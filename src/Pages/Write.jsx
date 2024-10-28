import React from "react";
import { Link } from "react-router-dom"; // Impor Link dengan benar
import { PiArrowUUpRightBold } from "react-icons/pi";
import { PiArrowUUpLeftBold } from "react-icons/pi";
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { GoPlusCircle } from "react-icons/go";
import { GoPlus } from "react-icons/go";

export default function Write() {
  return (
    <div>
      <div className="sticky top-0 flex justify-between items-center px-[69px] py-[17px] border-b-2 border-dasar1 ">
        <div className="flex h-fit gap-[20px] w-4/12 justify-center items-center">
          <h1 className="text-black font-bold text-[32px]">INFLOW</h1>
          <h2 className="text-[16px] font-bold">Draft In Bujangbangka</h2>
        </div>

        <div className="flex justify-between items-center  w-4/12">
          <button className="text-black/75 text-[14px] rounded-[10px] bg-dasar1  py-[8px] px-[14px] text-center">
            Add the Categories
          </button>
          <button className="text-white text-[14px] rounded-[10px] bg-main py-[8px] px-[14px] text-center">
            Publish
          </button>

          <div className="w-[42px] h-[42px] bg-main rounded-full"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-start items-center px-[325px] gap-[20px]">
          <div className="flex justify-start   py-[18px] gap-4 items-center  ">
            <div className="w-[25px] h-[25px] flex flex-row-reverse bg-dasar1 items-center justify-center">
              <PiArrowUUpLeftBold />
            </div>
            <div className="w-[25px] h-[25px] bg-dasar1 flex items-center justify-center">
              <PiArrowUUpRightBold />
            </div>
          </div>
          <div className="flex gap-[7px]">
            <div className="w-[25px] h-[25px]  bg-dasar1 flex items-center justify-center">
              <FaBold />
            </div>
            <div className="w-[25px] h-[25px]  bg-dasar1 flex items-center justify-center">
              <FaItalic />
            </div>
            <div className="w-[25px] h-[25px]  bg-dasar1 flex items-center justify-center">
              <FaUnderline />
            </div>
          </div>
          <div className="w-[25px] h-[25px]  bg-dasar1 flex items-center justify-center">
            <AiOutlineBars />
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center px-[248px] gap-[22px]">
            <div className="w-[45px] h-[45px] ring-1  ring-black rounded-full">
              <GoPlus className="text-[45px]" />
            </div>
            <div className="border-l-[1px] border-slate-950  w-full h-[45px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
