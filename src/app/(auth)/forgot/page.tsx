"use client";

import { z } from "zod";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { useServerAction } from "zsa-react";
import { useToast } from "@/components/ui/use-toast";
import { useRef } from "react";
import { resetPasswordSA } from "./actions";
import { LoaderButton } from "@/components/ui/loader-button";

const registrationSchema = z.object({
    email: z.string().email(),
});

export default function ForgotPasswordPage() {
    const { toast } = useToast();
    const errorCount = useRef(0); //if errorCount ==3 say 'we made it easier for you to get into your account. Please check your email for the reset link at/magic-link'
    const { execute, isPending, isSuccess } = useServerAction(
        resetPasswordSA,
        {
            onError({ err }) {
                toast({
                    title: "Something went wrong",
                    description: err.message,
                    variant: "destructive",
                });
            },
        }
    );

    const form = useForm<z.infer<typeof registrationSchema>>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            email: "",
        },
    });

    function onSubmit(values: z.infer<typeof registrationSchema>) {
        execute(values);
    }

    return (
        <div className="py-24 mx-auto max-w-[400px] space-y-6">
            <h1 className={cn("", "text-center")}>Forgot Password</h1>

            {isSuccess && (<></>
                // <Alert variant="success">
                //     <Terminal className="h-4 w-4" />
                //     <AlertTitle>Reset link sent</AlertTitle>
                //     <AlertDescription>
                //         We have sent you an email with a link to reset your password.
                //     </AlertDescription>
                // </Alert>
            )}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="w-full"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <LoaderButton isLoading={isPending} className="w-full" type="submit">
                        Send Reset Email
                    </LoaderButton>
                </form>
            </Form>
        </div>
    );
}
