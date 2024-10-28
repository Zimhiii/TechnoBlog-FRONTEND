import React from "react";
import ArticleContainer from "../Components/DashboardCom/ArticleContainer";

const Dashboard = () => {
  const categories = [
    {
      category: "Programming",
      link: "/",
    },
    {
      category: "Mental Health",
      link: "/",
    },
    {
      category: "Pemilu",
      link: "/",
    },
    {
      category: "Institut Teknologi Sumatera",
      link: "/",
    },
    {
      category: "Presiden Republik Konoha",
      link: "/",
    },
    {
      category: "Perang Kpop Melawan Wibu",
      link: "/",
    },
    {
      category: "Techno Blog Nih",
      link: "/",
    },
    {
      category: "Technopreuner",
      link: "/",
    },
  ];
  return (
    <div className="flex">
      <div className="w-8/12 px-[126px] font-nunito py-[41px] border-r-2 border-dasar1">
        <div className="w-full border-b-2 border-dasar1 flex gap-[22px] ">
          <button className="py-[14px]">For you</button>
          <button className="py-[14px]">Following</button>
          <button className="py-[14px]">+</button>
        </div>

        <ArticleContainer />
        <ArticleContainer />
        <ArticleContainer />
      </div>
      <div className="w-4/12 h-[500px] p-[30px]">
        <div>
          <h3 className="text-[16px] font-bold">Most Popular Categories</h3>
          <div className="py-[16px] text-[13px] flex flex-wrap gap-[10px]">
            {categories.map((item, index) => (
              <button
                key={index}
                className="p-[10px] flex  justify-center items-center rounded-[58px] bg-dasar1 w-fit h-fit"
              >
                <h4>{item.category}</h4>
              </button>
            ))}
            <button>
              <h4 className="text-[10px] text-dasar3">See the Others</h4>
            </button>
          </div>
        </div>
        <div className="mt-[40px] pr-[111px] ">
          <h3 className="text-[16px] font-bold">Save Article</h3>
          <p className="text-[13px]">
            Click The <span className="font-bold">Save</span> on any story to
            easily add it to your saved article in your profile and than you can
            share the story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
