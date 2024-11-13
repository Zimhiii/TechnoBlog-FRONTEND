import React from "react";
import { CgProfile } from "react-icons/cg";

export default function EditProfilePop({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="bg-black/50 fixed inset-0  flex items-center justify-center h-full w-full font-nunito"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[568px] h-[731px] px-[50px] py-[43px] bg-[white] rounded-[10px] "
      >
        <h1 className="font-medium text-[32px] font-kanit mb-36px text-center">
          Profile information
        </h1>

        <div className="flex flex-col gap-[15px] font-nunito text-[16px] rounded-full ">
          <h2 className="text-[#4B5563]">photo</h2>
          <div className="flex gap-[24px] py-[20px]">
            <div>
              <div className="w-[90px] h-[90px] bg-[#D9D9D9] flex items-center justify-center rounded-full">
                <CgProfile className="w-[70px] h-[70px]" />
              </div>
            </div>
            <div>
              <div className="flex gap-[24px] mb-[21px]">
                <h1 className="text-[#00B65E]">Change</h1>
                <h1 className="text-[#AF0000]">Delete</h1>
              </div>
              <h1 className="text-[#4B5563]">
                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                side.
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="userName" className="cursor-pointer w-fit">
              Username *
            </label>
            <input
              type="text"
              id="userName"
              className="bg-[#F1F1F1] rounded-[7px] px-[18px] py-[7px] text-[15px] text-[#4B5563]"
            />
            <div className="flex justify-end">
              <span className="text-[#4B5563]">
                {" "}
                12 {" / "} <span className="opacity-60">30</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1 pb-[15px] border-b-2 border[#4B5563]]/60">
            <label htmlFor="biografi" className="cursor-pointer w-fit">
              Bio
            </label>
            <textarea
              name="biografi"
              id="biografi"
              className="bg-[#F1F1F1] rounded-[7px] px-[18px] py-[7px] min-h-[130px] text-[15px] text-[#4B5563]"
            ></textarea>
            <div className="flex justify-end">
              <span className="text-[#4B5563]">
                {" "}
                12 {" / "} <span className="opacity-60">30</span>
              </span>
            </div>
          </div>
          <h1 className="w-full text-center mt-[10px] text-[12px]">
            Don't forget to save the data you have filled in and if you don't
            want to change anything, you can click cancel or cross.
          </h1>
          <div className="flex gap-[20px] justify-end text-[16px] mt-[15px]">
            <button
              onClick={onClose}
              className="px-[10px] py-[5px] ring-1 ring-[red] text-red-500 rounded-[10px]"
            >
              Cancel
            </button>
            <button className="px-[10px] py-[5px] bg-[#34A853] text-white rounded-[10px] ">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
