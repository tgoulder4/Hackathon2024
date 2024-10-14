import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VerifySuccess() {
    return (
        <div className="py-24 mx-auto max-w-[400px] space-y-6">
            <h1 >Email Successfully Verified</h1>
            <p className="text-xl">
                Your email has been successfully verified. You can now sign in to your
                account.
            </p>

            <Button asChild>
                <Link href="/sign-in">Sign In</Link>
            </Button>
        </div>
    );
}
