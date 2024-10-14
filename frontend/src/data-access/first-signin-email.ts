import { generateRandomToken } from "@/data-access/utils";

import prisma from "@/db/prisma";
import { TOKEN_LENGTH, TOKEN_TTL } from "./magic links/lib";

export async function createFirstTimeSigninToken(userId: string) {
    const token = await generateRandomToken(TOKEN_LENGTH);
    const tokenExpiresAt = new Date(Date.now() + TOKEN_TTL);
    await prisma.verifyEmailTokens.create({
        data: {
            userId,
            token,
            tokenExpiresAt,
        },
    });

    return token;
}

export async function getVerifyEmailToken(token: string) {
    const existingToken = await prisma.verifyEmailTokens.findFirst({
        where: {
            token,
        },
    });

    return existingToken;
}

export async function deleteVerifyEmailToken(token: string) {
    await prisma.verifyEmailTokens.deleteMany({
        where: {
            token,
        },
    });
}
