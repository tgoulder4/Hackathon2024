
import { z } from 'zod'
export type UserProfile = {
    id: UserId;
    name: string | null;
    image: string | null;
};
export type UserId = string;

export type UserSession = {
    id: UserId;
};
export const ErrorSchema = z.object({
    message: z.string(),
    code: z.string(),
});

//type guards
// UI -> CA