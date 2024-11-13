import React, { useState } from "react";
import { Link } from "react-router-dom"; // Impor Link dengan benar
import NavSearch from "./NavSearch";
import { GiScrollQuill } from "react-icons/gi";
import SignUpPop from "../POPUPCOM/SignUpPop";
import LoginPop from "../POPUPCOM/LoginPop";
import EditProfilePop from "../POPUPCOM/EditProfilePop";

const navbar = [
  { name: "Categories", link: "/" }, // Tambahkan nama halaman untuk ditampilkan
  { name: "Write", link: "/Write" },
  { name: "Sign in", link: "/" },
  { name: "Profile", link: "/" },
];

export default function Navbar() {
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [isSignInPopOpen, setIsSignInPopOpen] = useState(false);
  const [isProfilePopOpen, setIsProfilePopOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(!isLogin);
    setIsPopOpen(true);
    console.log(isLogin);
  };

  return (
    <div className="sticky top-0 flex justify-between items-center px-[69px] py-[17px] border-b-2 border-dasar1 bg-white">
      <div className="flex h-fit gap-[85px] w-4/12 justify-center items-center">
        <h1 className="text-black font-bold text-[32px]">INFLOW</h1>
        <NavSearch />
      </div>

      <div className="flex justify-between items-baseline  w-4/12">
        {navbar.map((item, index) => (
          <div
            key={index}
            className="text-black font-normal font-nunito text-[14px] px-4 py-2"
          >
            <Link
              onClick={
                // item.name == "Sign in" ? () => setIsSignInPopOpen(true) : null
                item.name == "Profile" ? () => setIsProfilePopOpen(true) : null
              }
              to={item.link}
            >
              {item.name}
            </Link>
          </div>
        ))}
        {/* {isLogin ? (
          <button
            onClick={handleLogin}
            className="text-white rounded-md bg-gray-950 w-24  py-2"
          >
            Logout
          </button>
        ) : (
          
        )} */}
        <button
          onClick={handleLogin}
          className="text-white text-[14px] rounded-[10px] bg-dasar3  py-[8px] px-[14px] text-center"
        >
          Get Started
        </button>
      </div>
      {isPopOpen && (
        <SignUpPop
          onClose={() => setIsPopOpen(false)}
          onClose2={(bool) => setIsSignInPopOpen(bool)}
        />
      )}
      {isSignInPopOpen && (
        <LoginPop
          onClose={() => setIsSignInPopOpen(false)}
          onClose2={(bool) => setIsPopOpen(bool)}
        />
      )}
      {isProfilePopOpen && (
        <EditProfilePop onClose={() => setIsProfilePopOpen(false)} />
      )}
    </div>
  );
}
