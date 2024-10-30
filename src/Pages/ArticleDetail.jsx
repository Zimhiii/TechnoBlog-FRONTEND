import React from "react";
import { useParams } from "react-router-dom";
import { PiHandsClappingBold, PiHandsClappingFill } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  return (
    <div className="px-[285px]">
      <header>
        <h1 className="font-roboto text-[48px] font-black mb-[19px] leading-[56px]">
          Article Title 1, it just can until 2....../ col./ kkmafkawnfanwfafaj
        </h1>
        <h2 className="font-roboto text-[24px] font-normal mb-[36px]">
          Snippet also can untiI 2 COLOUM like
          that....................................////////.........................kEFGAFD
          if more 2 coloum it can like this...
        </h2>
        <div className="flex gap-[10px] justify-start items-center mb-[33px]">
          <div className="w-[50px] font-nunito text-black/75 text-[15px] h-[50px] bg-dasar2 rounded-full "></div>
          <div className="flex flex-col  gap-[5px] justify-center items-start">
            <div className="flex gap-[14px]">
              <h3>Manusia Kaktus</h3>
              <h4 className="bg-[#4F6F52] text-white px-[7px] py-[5px] text-[10px] rounded-[13px]">
                follow
              </h4>
            </div>
            <h3>Published in canva</h3>
          </div>
        </div>

        <div className="border-t-2 border-b-2 border-dasar1 py-[14px] px-[35px] flex justify-between items-center mb-[50px]">
          <div className="flex gap-[45px]">
            <h4>21 Juli, 2024</h4>
            <div className="flex gap-[6px] items-center">
              <PiHandsClappingBold className="w-[15px] h-[15px]" />
              <h4>999</h4>
            </div>
          </div>
          <div className="flex gap-[45px]">
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
      </header>

      <main className="flex flex-col gap-[20px] font-georgia text-[20px] text-[#404040]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          similique quo, labore ut in dolore corporis, necessitatibus earum odio
          quae, assumenda non consequatur sequi! Sit repellat voluptatum quod
          nihil suscipit!
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          numquam adipisci totam. Laborum magni quidem aut, sed tempora
          voluptatum? Aliquam quo eveniet fugiat eius dolore sint, explicabo
          numquam doloremque repudiandae expedita distinctio quos officia
          repellendus quisquam eos nostrum? Similique, earum! Voluptas magnam
          odit sapiente reiciendis. Fuga ipsa, molestiae amet corporis placeat a
          animi vel dolorem cum accusamus illum dolor minima quaerat et neque
          nihil quo itaque atque nemo ratione modi qui, reprehenderit quia
          voluptas? Commodi non cupiditate amet repudiandae sed? Iste quis animi
          debitis nisi, pariatur quae, ex voluptas unde et, voluptatem adipisci
          ducimus praesentium aliquid sunt aliquam repellat molestias?
        </p>
      </main>
    </div>
  );
};

export default ArticleDetail;
