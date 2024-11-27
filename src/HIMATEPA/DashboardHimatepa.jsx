import React from "react";
import heroimg from "./assets/heroimagedashboard.jpg";

// export default function DashboardHimatepa() {
//   return (
//     <div className="relative">
//       <div class="relative h-[937px] w-full z-1">
//         <div className="absolute bg-hero-dashboard h-[937px] inset-0 bg-cover bg-center"></div>
//         <div class="absolute inset-0 bg-black bg-opacity-75"></div>
//         <div class="relative text-white flex items-center justify-center h-full">
//           Konten di atas background
//         </div>
//       </div>
//       <nav className="sticky z-999 top-0 bg-gradient-to-t font-nunito py-[20px] flex justify-between px-[136px] ">
//         <div className="flex gap-[8px] items-center ">
//           <div className="logo w-[72px] h-[72px] bg-slate-500 rounded-full"></div>
//           <h1 className="text-[#EDE5CE] text-[24px] ">HIMATEPA </h1>
//         </div>
//         <div className="w-fit gap-[63px] flex items-center text-white">
//           <a href="#" className="text-white text-[20px] ">
//             Beranda
//           </a>
//           <div>
//             <a href="#" className="text-white text-[20px] ">
//               Tentang
//             </a>
//             <span> {">"} </span>
//           </div>
//           <div>
//             <a href="#" className="text-white text-[20px] ">
//               Berita
//             </a>
//             <span> {">"} </span>
//           </div>

//           <a
//             href="#"
//             className="text-black rounded-[100px] bg-[#9F8535] text-[20px] px-[32px] py-[8px] "
//           >
//             Kontak
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }
export default function DashboardHimatepa() {
  return (
    <div className="relative">
      {/* Sticky Navigation */}
      <nav className="sticky z-50 top-0 bg-gradient-to-t font-nunito py-[20px] flex justify-between px-[136px]">
        <div className="flex gap-[8px] items-center">
          <div className="logo w-[72px] h-[72px] bg-slate-500 rounded-full"></div>
          <h1 className="text-[#EDE5CE] text-[24px] font-bold">
            HIMATEPA ITERA
          </h1>
        </div>
        <div className="w-fit gap-[63px] flex items-center text-white">
          <a href="#" className="text-[#EDE5CE] text-[20px]">
            Beranda
          </a>
          <div>
            <a href="#" className="text-[#EDE5CE] text-[20px]">
              Tentang
            </a>
            <span> {">"} </span>
          </div>
          <div>
            <a href="#" className="text-[#EDE5CE] text-[20px]">
              Berita
            </a>
            <span> {">"} </span>
          </div>

          <a
            href="#"
            className="text-black rounded-[100px] bg-[#9F8535] text-[20px] px-[32px] py-[8px] font-semibold"
          >
            Kontak
          </a>
        </div>
      </nav>
      {/* <div className="relative h-[937px] w-full z-0">
        <div className="absolute bg-hero-dashboard h-[937px] bg-cover bg-center"></div>
        <div className="absolute  bg-black bg-opacity-75"></div>
        <div className="relative text-white flex items-center justify-center h-full">
          Konten di atas background
        </div>
      </div> */}
      {/* Background Section */}
      <div className="relative h-fit w-full overflow-x-hidden -mt-[112px] bg-[#060606]">
        <div className="absolute bg-hero-dashboard h-[937px]  inset-0  bg-cover bg-center "></div>
        <div
          className="absolute inset-0 h-[937px] w-full
          bg-gradient-to-b from-[#000000]/0 from-10%  to-[#181818] to-95%
          "
          // style={{
          //   background:
          //     "linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, #303030 100%)",
          // }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-75 h-[937px] "></div>
        <div className="relative text-white">
          <div className="mt-[258px] ml-[80px] text-[#DAD3BE] ">
            <h1 className="text-[96px] font-black  font-segoeBold h-fit">
              SELAMAT DATANG
            </h1>
            <h2 className="text-[24px] font-semibold max-w-[600px] font-nunito">
              Website Resmi Himpunan Mahasiswa Ganasarkara Institut Teknologi
              Sumatera
            </h2>
          </div>
          <div className="relative font-segoeBold text-[24px] text-[#4D4214] font-black flex flex-col justify-center items-center mt-[180px]">
            <div className="absolute z-1 flex gap-[32px] justify-evenly bg-[#C9A840] py-[15px] rotate-[4deg] overflow-hidden ">
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
            </div>
            <div className="absolute z-2 flex gap-[32px] justify-evenly bg-[#C9A840] py-[15px] rotate-[-4deg] overflow-hidden ">
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
              <h2>HIMATEPA</h2>
            </div>
          </div>
          <div className="font-segoeBold text-[40px] font-black text-[#EDE5CE] mt-[200px] h-[512px] px-[87px]">
            <h1>WHO ARE WE ?</h1>
            <div className="mt-[43px] flex gap-[94px] font-nunito">
              <div className="w-[546px] h-[405px] bg-slate-500 ring-2  ring-[#C9A840] rounded-[8px] "></div>
              <div className="">
                <h2 className="mt-[54px] text-[#EDE5CE]  text-[39px] font-black ">
                  We Are Himatepa ITERA
                </h2>
                <p className="mt-[24px] text-[20px] text-[#BFB9A5] font-normal max-w-[827px] text-justify">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet.
                </p>
                <button className="mt-[24px] text-[13px] px-[32px] py-[8px] text-[#181818] font-bold bg-[#C9A840] rounded-full flex justify-center items-center">
                  Learn More
                </button>
              </div>

              <div className="bg-gradient-to-b from-[#C9A840] to-[#EDE5CE] "></div>
            </div>
          </div>
          <div
            className="mt-[80px] w-full h-[838px] py-[36px] flex flex-col  items-center gap-[40px] bg-gradient-to-b from-[#C9A840] from-15%  to-[#63531F]/0 to-100%"
            // style={{
            //   background:
            //     "linear-gradient(180deg, rgba(201, 168, 64, 1) 15%, rgba(99, 83, 31, 0) 100%)",
            // }}
          >
            <div className="flex gap-4 font-nunito">
              <div className="bg-fast-food w-[48px] h-[48px]"></div>
              <h1 className="text-[39px] font-black font-segoeBold text-[#181818]">
                OUR PRODUCTS
              </h1>
            </div>
            <div className="py-[16px] flex gap-[108px]">
              <div className="flex flex-col gap-[32px] justify-center items-center font-nunito">
                <div className="w-[375px] h-[375px] rounded-full bg-slate-500 ring-4 ring-[#181818] "></div>
                <div className="text-center">
                  <h1 className="text-[25px] font-bold text-[#EDE5CE]">
                    KUE SUS
                  </h1>
                  <p className="text-[16px] font-medium text-[#959181]">
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] justify-center items-center font-nunito">
                <div className="w-[375px] h-[375px] rounded-full bg-slate-500 ring-4 ring-[#181818] "></div>
                <div className="text-center">
                  <h1 className="text-[25px] font-bold text-[#EDE5CE]">
                    KUE SUS
                  </h1>
                  <p className="text-[16px] font-medium text-[#959181]">
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] justify-center items-center font-nunito">
                <div className="w-[375px] h-[375px] rounded-full bg-slate-500 ring-4 ring-[#181818] "></div>
                <div className="text-center">
                  <h1 className="text-[25px] font-bold text-[#EDE5CE]">
                    KUE SUS
                  </h1>
                  <p className="text-[16px] font-medium text-[#959181]">
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col items-center">
              <h1 className="font-nunito font-black text-[#EDE5CE] text-[31px]">
                See More
              </h1>
              <div className="bg-see-more w-[48px] h-[48px]"></div>
            </div>
          </div>
          {/* ARTICLES */}
          <div className="bg-[#63531F]/0 py-[80px] font-nunito px-[87px]">
            <div className="flex justify-between items-center">
              <div className="flex gap-[16px] ">
                <div></div>
                <h1 className="font-segoeBold text-[39px] text-[#EDE5CE]">
                  ARTICLES
                </h1>
              </div>
              <div className="flex gap-2 text-[25px] text-[A5A5A5] font-semibold">
                <h2>See All</h2>
                <span>{"->"}</span>
              </div>
            </div>
            <div className="mt-[43px] py-[24px] flex justify-between">
              <div className="flex flex-col gap-[20px] w-[374px] px-[8px] justify-center">
                <div className="w-[358px] h-[224px] bg-slate-500 ring-2 ring-[#C9A840] rounded-[8px]"></div>
                <div className="flex items-between justify-between">
                  <h3 className="bg-[#BFB9A5]/30 text-[#C9A840] px-2 py-1 text-[13px] font-black rounded-full">
                    Divisi Pubdok
                  </h3>
                  <h3 className="text-[13px] text-[#C9A840]">
                    24 Oktober 2024
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#EDE5CE] font-segoeBold font-black">
                    HIMATEPA Goest To School
                  </h2>
                  <p className="text-[16px] text-[#BFB9A5] text-justify">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis...
                  </p>
                </div>
                <button className="rounded-full font-bold bg-[#C9A840] text-[#181818] px-[32px] py-[8px] w-full text-[13px]">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col gap-[20px] w-[374px] px-[8px] justify-center">
                <div className="w-[358px] h-[224px] bg-slate-500 ring-2 ring-[#C9A840] rounded-[8px]"></div>
                <div className="flex items-between justify-between">
                  <h3 className="bg-[#BFB9A5]/30 text-[#C9A840] px-2 py-1 text-[13px] font-black rounded-full">
                    Divisi Pubdok
                  </h3>
                  <h3 className="text-[13px] text-[#C9A840]">
                    24 Oktober 2024
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#EDE5CE] font-segoeBold font-black">
                    HIMATEPA Goest To School
                  </h2>
                  <p className="text-[16px] text-[#BFB9A5] text-justify">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis...
                  </p>
                </div>
                <button className="rounded-full font-bold bg-[#C9A840] text-[#181818] px-[32px] py-[8px] w-full text-[13px]">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col gap-[20px] w-[374px] px-[8px] justify-center">
                <div className="w-[358px] h-[224px] bg-slate-500 ring-2 ring-[#C9A840] rounded-[8px]"></div>
                <div className="flex items-between justify-between">
                  <h3 className="bg-[#BFB9A5]/30 text-[#C9A840] px-2 py-1 text-[13px] font-black rounded-full">
                    Divisi Pubdok
                  </h3>
                  <h3 className="text-[13px] text-[#C9A840]">
                    24 Oktober 2024
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#EDE5CE] font-segoeBold font-black">
                    HIMATEPA Goest To School
                  </h2>
                  <p className="text-[16px] text-[#BFB9A5] text-justify">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis...
                  </p>
                </div>
                <button className="rounded-full font-bold bg-[#C9A840] text-[#181818] px-[32px] py-[8px] w-full text-[13px]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* BEASISWA */}
          <div className="bg-[#63531F]/0 py-[80px] font-nunito px-[87px]">
            <div className="flex justify-between items-center">
              <div className="flex gap-[16px] ">
                <div></div>
                <h1 className="font-segoeBold text-[39px] text-[#EDE5CE]">
                  BEASISWA
                </h1>
              </div>
              <div className="flex gap-2 text-[25px] text-[A5A5A5] font-semibold">
                <h2>See All</h2>
                <span>{"->"}</span>
              </div>
            </div>
            <div className="mt-[43px] py-[24px] flex justify-between">
              <div className="flex flex-col gap-[20px] w-[374px] px-[8px] justify-center">
                <div className="w-[358px] h-[224px] bg-slate-500 ring-2 ring-[#C9A840] rounded-[8px]"></div>
                <div className="flex items-between justify-between">
                  <h3 className="bg-[#BFB9A5]/30 text-[#C9A840] px-2 py-1 text-[13px] font-black rounded-full">
                    Divisi Pubdok
                  </h3>
                  <h3 className="text-[13px] text-[#C9A840]">
                    24 Oktober 2024
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#EDE5CE] font-segoeBold font-black">
                    HIMATEPA Goest To School
                  </h2>
                  <p className="text-[16px] text-[#BFB9A5] text-justify">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis...
                  </p>
                </div>
                <button className="rounded-full font-bold bg-[#C9A840] text-[#181818] px-[32px] py-[8px] w-full text-[13px]">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col gap-[20px] w-[374px] px-[8px] justify-center">
                <div className="w-[358px] h-[224px] bg-slate-500 ring-2 ring-[#C9A840] rounded-[8px]"></div>
                <div className="flex items-between justify-between">
                  <h3 className="bg-[#BFB9A5]/30 text-[#C9A840] px-2 py-1 text-[13px] font-black rounded-full">
                    Divisi Pubdok
                  </h3>
                  <h3 className="text-[13px] text-[#C9A840]">
                    24 Oktober 2024
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#EDE5CE] font-segoeBold font-black">
                    HIMATEPA Goest To School
                  </h2>
                  <p className="text-[16px] text-[#BFB9A5] text-justify">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis...
                  </p>
                </div>
                <button className="rounded-full font-bold bg-[#C9A840] text-[#181818] px-[32px] py-[8px] w-full text-[13px]">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col gap-[20px] w-[374px] px-[8px] justify-center">
                <div className="w-[358px] h-[224px] bg-slate-500 ring-2 ring-[#C9A840] rounded-[8px]"></div>
                <div className="flex items-between justify-between">
                  <h3 className="bg-[#BFB9A5]/30 text-[#C9A840] px-2 py-1 text-[13px] font-black rounded-full">
                    Divisi Pubdok
                  </h3>
                  <h3 className="text-[13px] text-[#C9A840]">
                    24 Oktober 2024
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#EDE5CE] font-segoeBold font-black">
                    HIMATEPA Goest To School
                  </h2>
                  <p className="text-[16px] text-[#BFB9A5] text-justify">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis...
                  </p>
                </div>
                <button className="rounded-full font-bold bg-[#C9A840] text-[#181818] px-[32px] py-[8px] w-full text-[13px]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* FOOTER */}
          <footer className="font-nunito px-[82px]">
            <div className="pt-[46px] flex justify-between pb-[71px] border-b-[0.5px] border-[#BFB9A5]">
              <div className="flex flex-col gap-[8px]">
                <div className="w-[72px] h-[72px] bg-slate-500 rounded-full"></div>
                <h1 className="font-bold text-[25px]">HIMATEPA ITERA</h1>
              </div>
              <div className="flex gap-[80px]">
                <div className="flex flex-col gap-[8px] text-[16px] font-medium text-[#EDE5CE]">
                  <h2 className="font-bold text-[20px]">Kenali Kami</h2>
                  <h3>Kabinet Sahityadhinata </h3>
                  <h3>Teknologi Pangan ITERA </h3>
                  <h3>Institut Teknologi Sumatera </h3>
                </div>
                <div className="flex flex-col gap-[8px] text-[16px] font-medium text-[#EDE5CE]">
                  <h2 className="font-bold text-[20px]">Telusuri</h2>
                  <h3>Tentang HIMATEPA </h3>
                  <h3>Produk HIMATEPA</h3>
                  <h3>Berita HIMATEPA </h3>
                  <h3>Beasiswa</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-[28px]">
              <div>
                <p className="text-[13px] font-bold font-nunito text-[#EDE5CE]">
                  &copy; Copyright &copy;2024 | Himpunan Mahasiswa Teknologi
                  Pangan ITERA
                </p>
              </div>
              <div className="flex gap-[56px]">
                <div className="bg-tik-tok w-[24px] h-[24px] bg-cover bg-center"></div>
                <div className="bg-e-mail w-[24px] h-[24px] bg-cover bg-center"></div>
                <div className="bg-linked-in w-[24px] h-[24px] bg-cover bg-center"></div>
                <div className="bg-insta-gram w-[24px] h-[24px] bg-cover bg-center"></div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
