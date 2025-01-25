import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const options = [
    "about rog",
    "product guide",
    "store locator",
    "support",
    "4a guarantee",
  ];
  return (
    <div className="bg-black py-10">
      <div className="p-8 box-border flex lg:items-end lg:justify-end flex-col gap-3 text-zinc-50 w-full min-h-[800px] lg:min-h-[400px] lg:h-[30vw] bg-[url(https://dlcdnwebimgs.asus.com/gain/FDFFE426-0A29-40D5-8E26-C838EB26CA8F)] bg-cover bg-no-repeat">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight items-start lg:w-[30%] ">
          ROG Story
        </h1>
        <p className="text-sm md:text-xl lg:w-[30%]">
          Technology never sleeps, nor should the action. For those keen on
          winning power, the Republic of Gamers awaits. Driven by relentless
          innovation, ROG is committed to producing out-of-this-world
          experiences for gamers and enthusiasts everywhere.
        </p>
      </div>
      <hr className="bg-[#9c9999] hidden lg:block" />
      <div className="my-4 bg-black flex lg:items-center 
      justify-start flex-col lg:flex-row">

        
      <div className="flex items-center justify-center flex-col lg:flex-row lg:pl-2 ">
        {options.map((item, i) => {
          return (
            <Link
            to={"/"}
              key={i}
              className="w-full px-2 py-4 text-[#7c7a7a] bg-black border-2 border-[#2c2c2c] hover:text-red-600  hover:border-b-red-600  tracking-tighter text-xl uppercase lg:border-none lg:px-3 lg:text-sm lg:w-fit"
            >
              {item}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-start gap-2 p-4 pl-4">
        <span className="text-[#7c7a7a] uppercase lg:text-xs lg: ">get the latest deals and more</span>
        <span className="flex gap-4">

        <input className="w-[60%] border-2 bg-transparent border-[#464545] rounded-md py-4 px-2 lg:min-w-[100px] lg:py-0 lg:text-md" type="text" placeholder="Enter email address"  />
        <button className="text-zinc-50 bg-red-600 py-1 px-3 uppercase text-xl rounded-md border-none lg:text-md" >Sign up</button>
        </span>
      </div>
      </div>
    </div>
  );
};

export default Footer;
