import { Avatar } from "@mui/material";
import { Icon } from "@iconify/react";
import { cardSuggestionQuestions } from "@/data/card-suggestion";
import { Box, TextField } from "@radix-ui/themes";

function Main() {
  return (
    <div className="main-wrapper relative pb-5 flex-1 h-screen">
      <div className="main-nav flex items-center justify-between p-5 text-xl font-semibold">
        <p>INFORMIA...</p>
        <Avatar
          alt="profile-image"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
        />
      </div>
      <div className="main-container px-5 flex mt-20 flex-col items-center gap-4">
        <p>
          <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Hey there!
          </span>
        </p>
        <p className="font-medium text-gray-600">
          I can't make you a coffee, but I can help you
          <br /> being and assistant. How can i help you?
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

      <div className="main-last">
        <div className="search-box w-full flex justify-center items-center absolute bottom-4">
          <Box maxWidth="">
            <TextField.Root
              placeholder="Search the docs…"
              size="3"
            ></TextField.Root>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Main;
