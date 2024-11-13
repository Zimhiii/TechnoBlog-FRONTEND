import React from "react";
import { ImEmbed } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function SharePop({ onClose, id }) {
  return (
    <div
      onClick={onClose}
      className="bg-black/50 fixed inset-0  flex items-center justify-center h-full w-full font-nunito"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[660px] h-[345px] p-[40px] relative bg-dasar1 rounded-[12px] shadow-[0px_8px_8px_0px_rgba(0,0,0,0.25)]"
      >
        <RxCross1
          className="absolute top-5 right-5 text-[24px] cursor-pointer"
          onClick={onClose}
        />
        <h1 className="font-semibold text-[24px] mb-[24px]"> Share </h1>
        <div className="flex justify-center items-center px-[76px] py-[30px] border-b-2 border-dasar2 border-t-2 mb-[45px]">
          {/* <div className="flex gap-[30px] ">
            <ImEmbed className="text-[60px] w-[60px] h-[60px]" />
            <FaWhatsappSquare className="text-[60px] w-[60px] h-[60px]" />
            <ImFacebook2 className="text-[60px] w-[60px] h-[60px]" />
            <FaLinkedin className="text-[60px] w-[60px] h-[60px]" />
            <FaSquareXTwitter className="text-[60px] w-[60px] h-[60px]" />
          </div> */}
          <div className="flex gap-[30px]">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <ImEmbed className="text-[60px]" />
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <FaWhatsappSquare className="text-[60px] w-full h-full" />
            </div>
            <div className="w-[60px] h-[60px] flex  justify-center items-center">
              <ImFacebook2 className="text-[60px] w-full h-full" />
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <FaLinkedin className="text-[60px]" />
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <FaSquareXTwitter className="text-[60px]" />
            </div>
          </div>
        </div>
        <div className="px-[30px] ">
          <div className="flex px-[17px] py-[6px] justify-between items-center bg-main rounded-[8px]">
            <h1 className="text-[18px] font-medium text-white">
              https://www.inflow.com/live/amandiainformaitikaoke
            </h1>
            <button className="px-[11px] py-[2px] bg-dasar1 rounded-[8px]">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
