"use client";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { Icon } from "@iconify/react";
import { cardSuggestionQuestions } from "@/data/card-suggestion";
import { Box } from "@radix-ui/themes";
import { useGeminiContext } from "@/context/gemini-context";

function Main() {
  const [prompt, setPrompt] = useState<string>("");
  const {
    sentQuery,
    isLoading,
    setIsLoading,
    setShowResults,
    showResults,
    resultData,
    setResultData,
  } = useGeminiContext();

  return (
    <div className="main-wrapper relative pb-5 flex-1 h-screen overflow-hidden">
      <div className="main-nav flex items-center justify-between p-5 text-xl font-semibold">
        <p className="font-extrabold">INFORMIA...</p>
        <Avatar
          alt="profile-image"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
        />
      </div>
      {!showResults ? (
        <>
          <div className="main-container px-5 flex mt-20 flex-col items-center gap-4">
            <p>
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Hey there!
              </span>
            </p>
            <p className="font-medium text-gray-600">
              I can't make you a coffee, but I can help you
              <br /> being and assistant. How can I help you?
            </p>
          </div>

          <div className="card-wrapper w-fit m-auto px-5 grid grid-cols-2 xl:grid-cols-4 gap-3 mt-32">
            {cardSuggestionQuestions.map((data, index) => (
              <div
                className="card border hover:bg-[#e6eaf1] transition transition-all linear duration-200
                rounded-xl px-1 flex flex-col items-center justify-around w-[160px] h-[100px] cursor-pointer 
                hover:scale-105 active:scale-95"
                key={index}
              >
                <Icon icon={data.icon} fontSize={20} />
                <p className="text-sm text-center">{data.text}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="prompt-result px-5 h-full scrollbar-thin overflow over-x-hidden overflow-y-scroll">
          <div className="result-title flex items-center gap-5 my-[40px]">
            <Icon icon="logos:crossplane-icon" fontSize={22} />
            <p>{prompt}</p>
          </div>
          <div className="result-data flex items-start gap-5">
            <div>
              <Icon icon="twemoji:check-mark-button" fontSize={18} />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: resultData }}
              className="leading-7"
            />
          </div>
        </div>
      )}

      <div className="main-last w-full">
        <div className="search-box w-full flex justify-center items-center absolute bottom-4">
          <Box className="w-9/12 md:w-10/12 lg:w-1/2 ">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Prompt Here…"
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
                className="w-full pl-10 pr-20 py-2 font-medium text-gray-600 bg-[#e6eaf1] 
                rounded-full outline-none focus:border-none active:border-none"
              />
              <Icon
                icon="material-symbols:mic-outline"
                fontSize={20}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
              <Icon
                icon="mage:image"
                fontSize={20}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
              <Icon
                icon="akar-icons:send"
                fontSize={20}
                onClick={() => {
                  sentQuery(prompt);
                  // showResults === true ? setPrompt("") : "";
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Main;
