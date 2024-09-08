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

function MessagePage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const headingData = dashboardTools[0];
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isLoading;

  const submit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];
      const res = await axios.post("/api/message", {
        message: userMessage,
      });

      console.log(res.data);
      setMessages((curr) => [...curr, userMessage, res.data]);
      form.reset();
    } catch (err) {
      console.log();
    } finally {
      router.refresh();
    }
  };

  console.log(messages);

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
          {messages.length === 0 && !isLoading && (
            <EmptyMessage label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={Math.round(Math.random() * 10000000)}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 justify-start rounded-lg",
                  message.role === "user"
                    ? "bg-white dark:bg-black border border-black/10 dark:border-gray-700"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  className="leading-7 text-gray-900 dark:text-gray-300"
                  components={{
                    p: ({ node, ...props }) => (
                      <p
                        className="mb-4 text-base leading-relaxed"
                        {...props}
                      />
                    ),
                    h1: ({ node, ...props }) => (
                      <h1 className="text-2xl font-semibold my-4" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 className="text-xl font-semibold my-3" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-lg font-semibold my-2" {...props} />
                    ),
                    code: ({ node, ...props }) => (
                      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                        <code {...props} />
                      </pre>
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc pl-5 mb-4" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="list-decimal pl-5 mb-4" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="mb-2" {...props} />
                    ),
                  }}
                >
                  {message?.content?.toString()}
                </Markdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
