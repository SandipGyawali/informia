"use client";
import * as z from "zod";
import { Mail } from "lucide-react";
import Heading from "@/components/heading";
import { dashboardTools } from "@/utils/dashboard-tools";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import axios from "axios";
import EmptyMessage from "@/components/empty-message";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { UserAvatar } from "@/components/avatar/user-avatar";
import { BotAvatar } from "@/components/avatar/bot-avatar";

function MusicPage() {
  const router = useRouter();
  const [music, setMusic] = useState<string>();
  const headingData = dashboardTools[0];
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const submit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/music", {
        prompt: values.prompt,
      });
      console.log(res.data);
      setMusic(res.data);
      form.reset();
    } catch (err) {
      console.log();
    } finally {
      router.refresh();
    }
  };

  // console.log(messages);

  return (
    <div className="rounded-md py-10">
      <Heading
        icon={Mail}
        title={headingData.name}
        description={headingData.description}
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 
              focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0
                       focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Best place to visit inside Kathmandu Valley..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2">Generate</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader label="Wait a moment..." />
            </div>
          )}
          {!music && !isLoading && <EmptyMessage label="No music generated." />}
          {music && (
            <audio controls className="w-full mt-8">
              <source src={music}></source>
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
