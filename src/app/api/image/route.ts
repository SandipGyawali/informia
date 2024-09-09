import { ENV } from "@/lib/env";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openAi = new OpenAI({
  apiKey: ENV.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, amount = 1, resolution = "256x256" } = body;

    if (!prompt || !amount || !resolution)
      return new NextResponse("Please provide credentials properly", {
        status: 400,
      });

    const response = await openAi.images.generate({
      model: "dall-e-2",
      prompt,
      n: parseInt(amount),
      size: resolution,
    });

    return NextResponse.json(response.data);
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
