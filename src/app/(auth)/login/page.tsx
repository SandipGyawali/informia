"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";

function LoginPage() {
  const form = useForm();
  const errors = form.formState.errors;

  return (
    <div className="mt-8 space-y-6">
      {/* email field */}
      <Form {...form}>
        <form onSubmit={() => {}}>
          {/* email field */}
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem className="mt-1 block w-full">
                <FormLabel>Enter Email</FormLabel>
                <FormControl>
                  <Input
                    className={`mt-1 block w-full ${
                      errors.email ? "border red-500" : ""
                    }`}
                    placeholder="Eg: youremail@gmail.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* password field */}
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4 block w-full">
                <FormLabel>Enter Password</FormLabel>
                <FormControl>
                  <Input
                    className={`mt-1 block w-full ${
                      errors.email ? "border red-500" : ""
                    }`}
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-5 text-sm flex items-center justify-end">
            <Link
              href="/forgot-password"
              className="font-medium hover:underline cursor-pointer"
            >
              Forgot your password?
            </Link>
          </div>

          <Button className="w-full mt-3" type="submit">
            Login
          </Button>

          <div className="flex gap-2 mt-4 items-center">
            <div className="w-full h-[1px] bg-gray-400" />
            <span className="text-xs">OR</span>
            <div className="w-full h-[1px] bg-gray-400" />
          </div>

          <Button className="w-full space-x-1 mt-4 bg-transparent hover:text-white dark:hover-none text-black dark:text-white border-2 border-primary ">
            <Image src="/google.svg" width={32} height={32} alt="g-logo" />
            <span>Login with Google</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginPage;
