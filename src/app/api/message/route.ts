import { ENV } from "@/lib/env";
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(ENV.GEMINI_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;
    console.log(message);
    if (!genAi.apiKey)
      return new NextResponse("Gemini API Key not configured", {
        status: 500,
      });

    if (!message)
      return new NextResponse("Message field cannot be empty", { status: 500 });

    const model = genAi.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    const { response } = await model.generateContent(message.content);
    const responseData = response.candidates?.map((candidate) => ({
      role: candidate.content.role,
      content: candidate.content.parts.map((part) => part.text),
    }))[0];
    return NextResponse.json(responseData);
  } catch (err) {
    console.log("Conversation error", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
