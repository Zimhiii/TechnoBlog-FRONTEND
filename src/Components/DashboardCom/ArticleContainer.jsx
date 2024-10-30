import React from "react";
import { PiHandsClappingBold, PiHandsClappingFill } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ArticleContainer() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                laboriosam tempora sint, sed vero, repudiandae necessitatibus quas
                quae beatae voluptatem labore dolor, possimus cumque consectetur?
                Minima facere accusantium delectus iure! Quam iure, facere
                excepturi vel molestiae quos ipsa maiores aut voluptatem soluta
                qui laboriosam aliquid rem. Qui fugiat aliquam, placeat dolore
                expedita incidunt. Facilis iste beatae iusto eveniet, incidunt
                nostrum!`;

  // Fungsi untuk menampilkan beberapa kata awal dan akhir
  const getShortenedText = (text, startWords, endWords) => {
    const words = text.trim().split(" ");
    // Mengembalikan teks penuh jika kata kurang dari startWords + endWords
    if (words.length <= startWords + endWords) return text;
    // Mengambil kata awal dan kata akhir sesuai jumlah
    const startText = words.slice(0, startWords).join(" ");
    const endText = words.slice(-endWords).join(" ");
    return `${startText} ............ ///// ............. ${endText}`;
  };

  const shortenedText = getShortenedText(text, 8 + 1, 27); // Menampilkan 10 kata awal dan 10 kata akhir

  return (
    <div className="w-full flex py-[21px] pl-[10px] border-b-2 border-dasar1">
      <div className="w-8/12">
        <div className="flex gap-3 items-center">
          <div className=" w-6 h-6 bg-dasar1 rounded-full"></div>
          <h4>People in Figma</h4>
        </div>
        <div className="py-[10px]">
          <Link
            to="/article/detail"
            className="font-roboto text-[26px] font-black text-black"
          >
            Article Title 1
          </Link>

          <h3 className="font-normal text-[16px] text-black text-opacity-75">
            {shortenedText}
          </h3>
        </div>

        <div className="text-[12px] flex justify-between items-center py-[18px]">
          <h4>21 Juli, 2024</h4>
          <div className="flex gap-[6px] items-center">
            <PiHandsClappingBold className="w-[15px] h-[15px]" />
            <h4>999</h4>
          </div>
          <div className="flex gap-[6px] items-center">
            <IoShareSocial className="w-[15px] h-[17px]" />
            <h4>Share</h4>
          </div>
          <div className="flex gap-[6px] items-center">
            <FaRegBookmark className="w-[15px] h-[17px]" />
            <h4>Save</h4>
          </div>
        </div>
      </div>
      <div className="w-4/12 flex justify-center items-center">
        {/* <div className="w-[182px] h-[115px] bg-dasar3"></div> */}
      </div>
    </div>
  );
}
