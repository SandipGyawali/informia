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
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

function ForgotPasswordPage() {
  const form = useForm();
  const errors = form.formState.errors;

  return (
    <div className="mt-8 space-y-6">
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
          <Button className="w-full mt-8" type="submit">
            Update Password
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ForgotPasswordPage;
