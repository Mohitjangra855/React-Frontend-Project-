import React from "react";
import { Link } from "react-router-dom";
const InAction = () => {
  const data = [
    {
      link: "https://rog.asus.com/in/articles/gaming/rog-travel-books-another-killer-vacation-in-second-video/",
      title: "ROG Travel books another killer vacation in second video",
      imageURL: "https://dlcdnrog.asus.com/rog/media/1731034178744.webp",
    },
    {
      link: "https://rog.asus.com/in/articles/gaming/surviving-frostpunk-2s-frozen-hellscape/",
      title: "Surviving Frostpunk 2’s frozen hellscape",
      imageURL: "https://dlcdnrog.asus.com/rog/media/1728009310122.webp",
    },
    {
      link: "https://rog.asus.com/in/articles/rog-ally/god-of-war-ragnarok-on-the-rog-ally-and-rog-ally-x-performance-guide--best-settings/",
      title:
        "God of War: Ragnarok on the ROG Ally and ROG Ally X: performance guide & best settings",
      imageURL: "https://dlcdnrog.asus.com/rog/media/1726892195292.webp",
    },
  ];

  return (
    <div className="my-6 flex items-center justify-center flex-col">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-tighter">
        Rog in actions
      </h1>
      <div className="flex w-[100%] flex-wrap md:flex-nowrap flex-col md:flex-row gap-2 items-center justify-center p-3 box-border">
        {data.map((item, i) => {
          return (
            <Link
              to={"#"}
              className="w-[100%] h-[20rem] md:w-[30%] text-zinc-50 flex justify-center items-end p-2"
              style={{ backgroundImage: `url(${item.imageURL})` }}
            >
              <h1>{item.title}</h1>
            </Link>
          );
        })}
      </div>
      <h1 className="cursor-pointer text-xl flex items-center justify-center gap-3 font-medium  mt-20  tracking-tighter text-[#ff171b] V">
        LEARN MORE{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          width="18px"
          fill="#ff171b"
          data-name="圖層 1"
          viewBox="0 0 32 32"
          svg-inline=""
          alt="more link"
          role="presentation"
          focusable="false"
        >
          <path d="M23.07 13.77L9.06 0v6.7l9.18 8.94-9.18 9.66V32l14.01-14.49 1.87-1.87-1.87-1.87z"></path>
        </svg>
      </h1>
    </div>
  );
};

export default InAction;
