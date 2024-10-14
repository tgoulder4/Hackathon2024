import prisma from "@/db/prisma";
import { UserId } from "@/lib/types";
import crypto from "crypto";

const ITERATIONS = 10000;

async function hashPassword(plainTextPassword: string, salt: string) {
    return new Promise<string>((resolve, reject) => {
        crypto.pbkdf2(
            plainTextPassword,
            salt,
            ITERATIONS,
            64,
            "sha512",
            (err, derivedKey) => {
                if (err) reject(err);
                resolve(derivedKey.toString("hex"));
            }
        );
    });
}

export async function createAccount(userId: UserId, plainTextPassword?: string) {
    console.log("Creating account with password", plainTextPassword);
    const salt = crypto.randomBytes(128).toString("base64");
    if (plainTextPassword) {
        console.log("plainTextPassword was true, creating account with password");
        const hash = await hashPassword(plainTextPassword, salt);
        const account = await prisma.accounts.create({
            data: {
                userId: userId,
                AccountType: "email",
                salt,
                password: hash
            }
        })
        return account;
    }
    else {
        console.log("plainTextPassword was false, creating account without password");
        const account = await prisma.accounts.create({
            data: {
                userId: userId,
                AccountType: "email",
                salt,
            }
        })
        return account;
    }
}

export async function createAccountViaGithub(userId: UserId, githubId: string) {
    await prisma.accounts.create({
        data: {
            userId: userId,
            AccountType: "github",
        }
    })
}

export async function createAccountViaGoogle(userId: UserId, googleId: string) {
    await prisma.accounts.create({
        data: {
            userId: userId,
            AccountType: "google",
        }
    })
}

export async function getAccountByUserId(userId: UserId) {
    const account = await prisma.accounts.findFirst({
        where: {
            userId
        }
    })
    return account;
}

export async function updatePasswordDA(
    userId: UserId,
    password: string,
) {
    const salt = crypto.randomBytes(128).toString("base64");
    const hash = await hashPassword(password, salt);
    await prisma.accounts.update({
        where: {
            userId
        },
        data: {
            password: hash,
            salt
        }
    })
}

// export async function getAccountByGoogleId(googleId: string) {
//     return await prisma.accounts.findFirst({
//         where: {
//             googleId
//         }
//     })
// }

// export async function getAccountByGithubId(githubId: string) {
//     return await prisma.accounts.findFirst({
//         where: {
//             githubId
//         }
//     })
// }
export async function removeAllAccountsExceptMineDA() {
    await prisma.accounts.deleteMany({
        where: {
            NOT: {
                userId: "MYUSERID"
            }
        }
    })
}