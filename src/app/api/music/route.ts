import { ENV } from "@/lib/env";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: ENV.REPLICATE_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;
    if (!prompt)
      return new NextResponse("Prompt is required", {
        status: 500,
      });

    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          alpha: 0.5,
          prompt_a: prompt,
          prompt_b: "total of 15 seconds only",
          denoising: 0.75,
          seed_image_id: "vibes",
          num_interface_steps: 50,
        },
      }
    );

    return NextResponse.json(response);
  } catch (err) {
    console.log("Music error", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
