import React from "react";
import { GiScrollQuill } from "react-icons/gi";

export default function ProfilePage() {
  return (
    <div className="flex">
      <div className="w-8/12 px-[126px] font-nunito  ">
        <div className="w-full  flex gap-[22px] pt-[32.5px] pb-[120px] ">
          <h1 className="font-bold text-[48px]">bujangbangka</h1>
        </div>
        <div>
          <div className="border-b-2 border-dasar1 flex gap-[36px] text-[16px] font-medium">
            <h3 className="py-[17px] border-b-[1px] border-black px-[4px]">
              Home
            </h3>
            <h3 className="py-[17px]">Save</h3>
          </div>
          <div className="w-full flex justify-center font-nunito py-[50px] ">
            <div className="w-6/12 flex justify-center items-center flex-col gap-[12px]">
              <h1 className="  text-[20px] text-center w-full">
                You don't have one yet published, lets write bujangbangka
              </h1>
              <div className="flex gap-[12px] ring-1 ring-[#4B5563] px-[15px]  py-[7px] rounded-[5px]">
                <GiScrollQuill className="text-[24px]" />
                <h3 className="text-[14px]">Write</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/12 h-[500px] p-[30px]"></div>
    </div>
  );
}
