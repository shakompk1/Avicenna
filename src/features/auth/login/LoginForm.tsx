"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Card from "@/src/shared/ui/Card";
import Input from "@/src/shared/ui/Input";
import Button from "@/src/shared/ui/Button";

import { loginSchema, type LoginFormValues } from "./login.schema";
import { CalendarIcon } from "@/src/shared/ui/icons";

export default function LoginForm() {
  const router = useRouter();
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (values: LoginFormValues) => {
    setFormError(null);

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (!res?.ok) {
      setFormError("Invalid email or password");
      return;
    }

    router.replace("/");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card>
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg bg-black text-white">
          <CalendarIcon size={22} />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-black">
            Avicenna
          </h1>
          <p className="mt-1 text-sm text-gray-500">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <Input
            label="Email"
            placeholder="your@email.com"
            type="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            autoComplete="current-password"
            error={errors.password?.message}
            {...register("password")}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
