import { div } from "framer-motion/client";
import React from "react";

const AboutRog = () => {
  const linksData = [
    {
      link: "https://rog.asus.com/in/articles/product-news/everything-rog-announced-at-ces-2025/",
      imageTitle:
        "All the new gaming gear revealed from the ROG Lab at CES 2025",
      description:
        "ROG is going harder than ever in 2025. Here's everything we announced at the Consumer Electronics Show this year.",
      imageURL: "https://dlcdnrog.asus.com/rog/media/1735961766603.webp",
    },
    {
      link: "https://rog.asus.com/in/articles/gaming-graphics-cards/introducing-the-rog-astral-geforce-rtx-5090-and-5080-a-new-frontier-of-gaming-graphics/",
      imageTitle:
        "Introducing the ROG Astral GeForce RTX 5090 and 5080: a new frontier of gaming graphics",
      description:
        "The NVIDIA GeForce RTX 50 series of GPUs has landed, and to usher in this new generation of graphics performance, we’re launching a new line of graphics cards.",
      imageURL: "https://dlcdnrog.asus.com/rog/media/1735959218957.webp",
    },
    {
      link: "https://rog.asus.com/in/articles/rog-gaming-laptops/2025-rog-strix-gaming-laptops-elevate-performance-and-upgradeability-to-new-heights/",
      imageTitle:
        "2025 ROG Strix gaming laptops elevate performance and upgradeability to new heights",
      description:
        "Our new ROG Strix laptops feature cutting-edge silicon from NVIDIA, Intel, and AMD, ultra-efficient thermal solutions, and dazzling Nebula Displays with Mini LED and ACR technology.",
      imageURL: "https://dlcdnrog.asus.com/rog/media/1735949598774.webp",
    },
    {
      link: "https://rog.asus.com/in/articles/rog-gaming-laptops/meet-the-2025-rog-flow-z13-elevating-gaming-tablets-to-new-heights/",
      imageTitle:
        "Meet the 2025 ROG Flow Z13: Elevating Gaming Tablets to New Heights",
      description:
        "The world’s most powerful gaming tablet is back and better than ever with a brand-new processor, revamped cooling, loads of ports, and much more.",
      imageURL: "https://dlcdnrog.asus.com/rog/media/1735952411117.webp",
    },
    {
      link: "https://rog.asus.com/in/articles/product-news/2025-rog-xg-mobile-leads-new-era-of-egpus-with-thunderbolt-5/",
      imageTitle:
        "The 2025 ROG XG Mobile Leads New Era of eGPUs with Thunderbolt 5",
      description:
        "The 2025 ROG XG Mobile brings the NVIDIA GeForce RTX 5090 Laptop GPU to the device of your choice with Thunderbolt 5.",
      imageURL: "https://dlcdnrog.asus.com/rog/media/1735952410153.webp",
    },
  ];

  return (
    <div className="mt-[3rem] bg-[url(https://rog.asus.com/_nuxt/img/rog_bg_pattern.2e3d71a.jpg)] py-20 lg:py-0 lg:h-[150vh]">
      <h1 className="uppercase font-semibold tracking-tighter text-zinc-50 text-xl md:text-2xl xl:text-3xl pl-5 md:pl-0 md:text-center pt-5 md:pt-10 lg:pt-20">
        LIVING FOR GAMERS-ABOUT ROG
      </h1>
      <div className="mt-10 flex item-center justify-center gap-4  flex-nowrap overflow-x-auto lg:flex-wrap cursor-pointer" >
        {linksData.map((item, index) => {
          // Determine width class based on number of items
          const widthClass = index >= 3 ? "w-[45%]" : "w-[30%]";
          const bgImage = item.imageURL;

          return (
            <div key={index} className={`${widthClass} h-[20rem] p-4 box-border flex justify-end items-end text-zinc-50 min-w-[300px] md:min-w-[300px]`}
            style={{backgroundImage:`url(${bgImage})`,
            backgroundSize: "cover", // You can add background properties like cover, contain, etc.
                backgroundPosition: "center"
          }}
            >
              <a href={item.link} className="block">
               
                <h3 className="font-bold mt-2">{item.imageTitle}</h3>
                <p>{item.description}</p>
              </a>
            </div>
          );
        })}
      </div>
      <h1 className="cursor-pointer text-xl flex items-center justify-center gap-3 font-medium  mt-20  tracking-tighter text-[#ff171b] V">LEARN MORE <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" fill="#ff171b" data-name="圖層 1" viewBox="0 0 32 32" svg-inline="" alt="more link" role="presentation" focusable="false"><path d="M23.07 13.77L9.06 0v6.7l9.18 8.94-9.18 9.66V32l14.01-14.49 1.87-1.87-1.87-1.87z"></path></svg></h1>

    </div>
  );
};

export default AboutRog;
