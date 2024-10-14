"use client";

import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { useServerAction } from "zsa-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Terminal } from "lucide-react";
import { LoaderButton } from "@/components/ui/loader-button";
import { LoginSA } from "./actions";

const registrationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export default function SignInPage() {
    const { toast } = useToast();
    const onInvalid = (errors: any) => console.error(errors)
    const { execute, isPending, error, reset } = useServerAction(LoginSA, {
        onError({ err }) {
            toast({
                title: "Something went wrong",
                description: err.message,
                variant: "destructive",
            });
        },
        onSuccess() {
            toast({
                title: "Let's Go!",
                description: "Enjoy your session",
            });
        },
    });

    const form = useForm<z.infer<typeof registrationSchema>>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof registrationSchema>) {
        execute(values);
    }

    return (
        <div className="py-24 mx-auto max-w-[400px] space-y-6">
            <h1 className={cn("", "text-center")}>Sign In</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-6">
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

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="w-full"
                                        placeholder="Enter your password"
                                        type="password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {error && (
                        <p className="text-red-600">{error.message}</p>
                    )}

                    <LoaderButton isLoading={isPending} className="w-full" type="submit">
                        Sign In
                    </LoaderButton>
                </form>
            </Form>

            <div className="flex justify-center">
                <Button asChild variant="link">
                    <Link href="/sign-in/forgot-password">Forgot Password</Link>
                </Button>
            </div>

        </div>
    );
}
