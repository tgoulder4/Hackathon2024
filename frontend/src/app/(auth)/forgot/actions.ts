"use server";

import { unauthenticatedAction } from "@/lib/safe-action";
import { z } from "zod";
import { rateLimitByKey } from "@/lib/limiter";
import { resetPasswordCA } from "@/core-actions/users";

export const resetPasswordSA = unauthenticatedAction
    .createServerAction()
    .input(
        z.object({
            email: z.string().email(),
        })
    )
    .handler(async ({ input }) => {
        await rateLimitByKey({ key: input.email, limit: 1, window: 30000 });
        await resetPasswordCA(input.email);
    });
