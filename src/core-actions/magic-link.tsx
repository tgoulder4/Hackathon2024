import { applicationName } from "@/app-config";
import {
    deleteMagicToken,
    getMagicLinkByToken,
    upsertMagicLinkDA,
} from "@/data-access/magic-links";
import {
    createFirstTimeUserDA,
    getUserByEmailDA,
    setEmailVerifiedDA,
} from "@/data-access/users";

import { NotFoundError } from "@/lib/errors";
import { sendEmail } from "./resend-core";

export async function sendMagicLinkCA(email: string) {
    const token = await upsertMagicLinkDA(email);

    // await sendEmail(
    //     email,
    //     `Your magic login link for ${applicationName}`,
    //     <MagicLinkEmail token={token} />
    // );
}

export async function loginWithMagicLinkCA(token: string) {
    const magicLinkInfo = await getMagicLinkByToken(token);
    if (!magicLinkInfo) {
        throw new NotFoundError();
    }

    if (magicLinkInfo.tokenExpiresAt! < new Date()) {
        // throw new TokenExpiredError();
    }

    const existingUser = await getUserByEmailDA(magicLinkInfo.email);

    if (existingUser) {
        await setEmailVerifiedDA(existingUser.id);
        await deleteMagicToken(token);
        return existingUser;
    } else {
        const newUser = await createFirstTimeUserDA(magicLinkInfo.email, existingUser || "");
        await deleteMagicToken(token);
        // await createProfile(newUser.id, generateRandomName());
        return newUser;
    }
}
