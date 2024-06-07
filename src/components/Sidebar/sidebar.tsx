"use client";
import { useState } from "react";
import { sidebarBottomList } from "@/data/sidebar-bottom";
import { Icon } from "@iconify/react";

const icon_size = 22;

function Sidebar() {
  const [isExtended, setIsExtended] = useState(true);

  return (
    <div
      className={`sidebar min-h-screen flex flex-col justify-between bg-[#f0f4f9] 
        px-6 py-4 transition-all duration-300 ${
          isExtended ? "w-[270px]" : "w-20"
        }`}
    >
      <div className="sidebar-component-1">
        <div
          className="cursor-pointer hover:scale-110 active:scale-95 transition-all duration-400"
          style={{ width: icon_size, height: icon_size }}
          onClick={() => {
            setIsExtended((prev) => !prev);
          }}
        >
          <Icon icon="heroicons:bars-3-16-solid" fontSize={icon_size} />
        </div>
        <div
          className="new-chat-section cursor-pointer mt-8 flex items-center justify-start gap-2.5 px-6 py-4 
          bg-[#e6eaf1] rounded-xl text-gray-700 font-semibold text-sm"
        >
          <div
            style={{
              width: icon_size,
              height: icon_size,
            }}
          >
            <Icon icon="ic:sharp-plus" fontSize={icon_size} />
          </div>
          <span
            className={`${
              isExtended ? "opacity-100 delay-300" : "opacity-0"
            } transition-opacity duration-300`}
          >
            New Chat
          </span>
        </div>

        <div
          className={`recent-section flex flex-col transition-opacity duration-300 ${
            isExtended
              ? "opacity-100 delay-300"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="recent-title mt-7 mb-5">Recent</p>
          <div
            className="latest-entries flex items-center justify-start gap-2.5 p-2.5 pr-4 rounded-xl text-[#282828] 
            cursor-pointer hover:bg-[#e6eaf1] transition-all duration-200"
          >
            <div style={{ width: icon_size, height: icon_size }}>
              <Icon icon="tabler:message-filled" fontSize={icon_size} />
            </div>
            <p>What is react....</p>
          </div>
        </div>
      </div>
      <div className="sidebar-component-2 cursor-pointer">
        {sidebarBottomList?.map((data, index) => (
          <div
            className="item cursor-pointer mt-2.5 flex items-center justify-start gap-2.5 p-2.5 pr-4 
            hover:bg-[#e6eaf1] rounded-xl text-gray-700 font-semibold text-sm transition-all duration-200"
            key={index}
          >
            <div style={{ width: icon_size, height: icon_size }}>
              <Icon icon={data.icon} fontSize={icon_size} />
            </div>
            <span
              className={`${
                isExtended ? "opacity-100 delay-300" : "opacity-0"
              } transition-opacity duration-300`}
            >
              {data.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
