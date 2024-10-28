import React from "react";
import { CiSearch } from "react-icons/ci";

export default function NavSearch() {
  return (
    <div className="w-2/3 h-fit bg-dasar1 opacity-50  font-montserrat px-[11px] py-[9px]  rounded-full shadow-slate-400 shadow-md flex justify-start items-center">
      <form action="" className="w-full h-fit flex  justify-start items-center">
        <span className="text-[#000000] mr-2 bg-transparent rounded-full w-[20px] h-[20px]     flex items-center justify-center">
          <CiSearch className="text-[#000000] text-[12px] md:text-[24px]" />
        </span>
        <input
          className=" bg-transparent text-[10px] md:text-[14px] placeholder:text-black placeholder:text-opacity-75 font-nunito focus:outline-none focus:ring-0"
          type="search"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
