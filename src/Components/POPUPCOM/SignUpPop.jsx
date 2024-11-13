import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

export default function SignUpPop({ onClose, onClose2 }) {
  return (
    <div
      className="bg-black/50 fixed inset-0  flex items-center justify-center h-full w-full font-nunito"
      onClick={onClose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex items-center flex-col relative rounded-[10px] bg-palingdasar w-[657px] h-[626px] "
      >
        <h1 className="text-[40px] mt-[58px] font-semibold font-kanit mb-[58px]">
          {" "}
          Join INFLOW
        </h1>

        <div className="flex  flex-col gap-[10px] ">
          <div className="bg-dasar1 relative px-[12] py-[9px] flex items-center justify-center rounded-[100px] w-[368px] h-[56px]">
            <img
              className="absolute left-4 w-[30px] h-[30px]"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
            <h1 className="text-[16px]">Sign Up with Google</h1>
          </div>
          <div className="bg-dasar1 relative px-[12] py-[9px] flex items-center justify-center rounded-[100px] w-[368px] h-[56px]">
            <img
              className="absolute left-4 w-[30px] h-[30px]"
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
            />
            <h1 className="text-[16px]">Sign Up with Facebook</h1>
          </div>
          <div className="bg-dasar1 relative px-[12] py-[9px] flex items-center justify-center rounded-[100px] w-[368px] h-[56px]">
            <MdOutlineMailOutline className="absolute left-4 w-[30px] h-[30px]" />
            <h1 className="text-[16px]">Sign Up with Email</h1>
          </div>
        </div>

        <div className="flex gap-[8px] mt-[32px] font-nunito text-[18px] mb-[85px]">
          <h1>Already have an account?</h1>
          <h1
            onClick={() => {
              onClose();
              onClose2(true);
            }}
            className="text-dasar3 hover:underline cursor-pointer"
          >
            Sign In
          </h1>
        </div>

        <h1 className="text-[11px] px-[152px] text-center">
          Click “Sign up” to agree to INFLOW's Terms of Service and acknowledge
          that INFLOW's Privacy Policy applies to you.
        </h1>
      </div>
    </div>
  );
}
