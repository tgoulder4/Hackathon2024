'use server'

import { signInCA } from "@/core-actions/users"
import { rateLimitByIp } from "@/lib/limiter"
import { unauthenticatedAction } from "@/lib/safe-action"
import { setSession } from "@/lib/session"
import { redirect } from "next/navigation"
import { z } from "zod"

export const LoginSA = unauthenticatedAction
    .createServerAction()
    .input(z.object({
        email: z.string().email().optional(),
        password: z.string().min(8).optional(),
        name: z.string().optional(),
    }))
    .handler(async (input) => {
        const {
            email, password
        } = input.input;
        console.log("input", input.input)
        if (!email || !password) throw new Error("Email and password are required")
        console.log("calling login action with email and password")
        const user = await signInCA(email, password);
        const { emailVerified } = user;
        await rateLimitByIp({ key: 'login', limit: 5, window: 30000 });
        await setSession(user.id);
        redirect('/brand/' + user.brandId)
    })
