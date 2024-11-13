import React, { useState } from "react";
import { GiScrollQuill } from "react-icons/gi";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function ProfilePage() {
  const [isSaveBar, setIsSaveBar] = useState(false);

  return (
    <div className="flex">
      <div className="w-8/12 px-[126px] font-nunito  ">
        <div className="w-full  flex gap-[22px] pt-[32.5px] pb-[120px] ">
          <h1 className="font-bold text-[48px]">bujangbangka</h1>
        </div>
        <div>
          <div className="border-b-2 border-dasar1 flex gap-[36px] text-[16px] font-medium">
            <button
              onClick={() => setIsSaveBar(false)}
              className={`py-[17px] px-[4px] ${
                !isSaveBar && "border-b-[1px] border-black"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setIsSaveBar(true)}
              className={`py-[17px] ${
                isSaveBar && "border-b-[1px] border-black"
              }`}
            >
              Save
            </button>
          </div>

          <div className="w-full flex justify-center font-nunito py-[50px] ">
            {!isSaveBar && (
              <div className="w-6/12 flex justify-center items-center flex-col gap-[12px]">
                <h1 className="  text-[20px] text-center w-full">
                  You don't have one yet published, lets write bujangbangka
                </h1>
                <div className="flex gap-[12px] ring-1 ring-[#4B5563] px-[15px]  py-[7px] rounded-[5px]">
                  <GiScrollQuill className="text-[24px]" />
                  <h3 className="text-[14px]">Write</h3>
                </div>
              </div>
            )}

            {isSaveBar && (
              <div className="w-6/12 flex justify-center items-center flex-col gap-[12px]">
                <h1 className="  text-[20px] text-center w-full">
                  You don't have one yet Saved, lets read and save bujangbangka
                </h1>
                <div className="flex gap-[12px] ring-1 ring-[#4B5563] px-[15px]  py-[7px] rounded-[5px]">
                  <FaRegBookmark className="text-[24px]" />
                  <h3 className="text-[14px]">Save</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-4/12 h-[500px] p-[30px]">
        <h1 className="font-nunito text-[14px] text-[#888888] w-full text-center">
          Edit Profile
        </h1>
        <div className="flex flex-col justify-center w-fit items-center gap-[10px]">
          <div className="w-[90px] h-[90px] bg-[#F1F1F1] rounded-full"></div>
          <h1 className="font-bold text-[18px] font-nunito">bujangbangka</h1>
        </div>
      </div>
    </div>
  );
}
