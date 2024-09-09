import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Music prompt is required",
  }),
});

export const amountOptions = [
  {
    value: "1",
    label: "1 Image",
  },
  {
    value: "2",
    label: "2 Image",
  },
  {
    value: "3",
    label: "3 Image",
  },
];

export const resolutionOptions = [
  {
    value: "256*256",
    label: "256*256",
  },
  {
    value: "512*512",
    label: "512*512",
  },
  {
    value: "1024*1024",
    label: "1024*1024",
  },
];
