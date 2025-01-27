import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const Links = [
    "products",
    "innovation",
    "downloads",
    "community",
    "what's hot",
    "support",
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className=" items-center relative z-50 px-4 lg:px-2 w-full h-12 bg-[#000] sm:gap-1 lg:text-[12px] text-zinc-50 flex justify-between  lg:text-md lg:justify-evenly ">
      <button className="lg:hidden" onClick={() => setOpen(true)}>
        <i class="fa-solid fa-bars"></i>
      </button>
      {open && (
        <motion.div
          className="sidebar m-0 px-12 font-semibold tracking-tight translate-x-0 fixed overflow-y-hidden w-full min-h-[100vh] top-0 -left-[100%] flex items-start justify-evenly flex-col bg-[#f5f5f5] text-[#171717] lg:hidden"
          initial={{ left: "-100%" }}
          animate={{ left: "0" }}
          transition={{ duration: 0.9 }}
        >
          <span className="absolute font-semibold flex justify-between items-center tracking-tighter text-2xl left-0 w-full box-border px-12 top-1 md:top-5">
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              svg-inline=""
              alt="user"
              role="presentation"
              focusable="false"
              class="svg-icon"
            >
              <path
                d="M12.613 18.28v2.1H22l-4.009-4.009.7-3.982v-.1c-.484-1.44-2.1-6.195-2.783-6.846a18.386 18.386 0 00-3.701-1.874L12 3.5l-.17.069A18.393 18.393 0 008.13 5.443c-.69.651-2.89 5.848-3.32 6.88l-.063.139 1.235 3.939L2 20.383h8.886V18.53l-2.873-1.718-.442.739 2.448 1.452v.507H4.094l2.795-3.123-1.215-4.121a50.59 50.59 0 012.97-6.447 15.671 15.671 0 013.107-1.614V10.304l3.332-.868c.633.85 1.17 1.766 1.6 2.733l-1.587 4.425-2.483 1.686z"
                fill="#000000"
              ></path>
            </svg>
            <button onClick={() => setOpen(false)}>
              <i class="fa-solid fa-x"></i>
            </button>
          </span>
          {Links.map((item, i) => (
            <Link
              className="box-border w-full uppercase flex items-center justify-between hover:text-red-600
              "
              key={i}
            >
              {item}
              <i class="fa-duotone fa-solid fa-angle-right"></i>
            </Link>
          ))}
          <hr className="h-1 w-full box-border bg-[#d9d9d9]" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ paddingRight: "1rem",boxSizing:"border-box", borderRight: "3px solid white" }}
            width="85.418"
            height="20.556"
            viewBox="0 0 71.418 15.556"
            svg-inline=""
            alt="asus"
            role="none"
            focusable="false"
          >
            <g data-name="组件 69 – 1">
              <path
                fill="#797979"
                stroke="rgba(0,0,0,0)"
                stroke-miterlimit="10"
                d="M52.803 15.056l.009-3.84h13.593a1.609 1.609 0 00.649-.183.818.818 0 00.256-.578c0-.737-.613-.769-.921-.785l-9.882-.815A4.615 4.615 0 0154.3 7.812a3.758 3.758 0 01-1.271-2.052s12.766.746 14.184.877a4.359 4.359 0 013.618 3.351 6.077 6.077 0 01-.022 1.57 4.233 4.233 0 01-4.008 3.5zm-12.767-.017l-.354-.025a4.216 4.216 0 01-3.621-3.534v-.609a5.825 5.825 0 01-.077.656 4.261 4.261 0 01-3.52 3.5h-18.3v-9.8l3.8.276v5.738h13.688a.768.768 0 00.807-.74c.007-.738-.562-.814-.864-.828 0 0-9.444-.774-9.782-.806a4.988 4.988 0 01-2.284-1.074 3.976 3.976 0 01-1.2-2.258s12.694 1 14.119 1.129c2.392.221 3.494 2.753 3.59 3.327 0 0 .008.059.015.164V4.642l3.881.278v5.078a1.23 1.23 0 001.119 1.273h6.6a1.264 1.264 0 001.267-1.285v-4.46l3.843.227v5.358c0 3.627-3.817 3.931-3.817 3.931zM.918 15.021L7.651 4.597l4.341.458-6.472 9.966zM52.803 4.363v-.311a5.491 5.491 0 01.973-2A4.27 4.27 0 0156.918.5h14v3.866zm-3.937 0V.519h3.909v3.844zm-12.844 0V.519h3.912v3.844zm-28.216 0s1.589-2.59 1.983-3.1a1.682 1.682 0 011.4-.738h6.946v3.527a5.5 5.5 0 01.977-2A4.252 4.252 0 0122.253.496h13.086v3.863z"
                data-name="联合 1"
              ></path>
            </g>
          </svg>
        </motion.div>
      )}
      <div className="icon w-1/3 md:w-1/6 lg:w-1/4 h-12 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 fill-red-600 "
          viewBox="0 0 200 37"
          svg-inline=""
          role="presentation"
          focusable="false"
        >
          <path d="M22.2 29.1c.8.5 1.6 1 2.4 1.4 8.6 3.8 21.3 6.1 23.7 5.3C55 33.6 62.5 19.5 64.8 13c0 0-7 2.8-14.1 6.1-5.9 2.8-12.4 6-12.4 6l16.5-5s-4.4 10.4-10.2 11.6c-5.8 1.2-16-2.9-16-2.9.8-.7 11.6-8.6 36.8-18.9 1.1-.8 1.8-2.1 2-3.4-5.8.6-11.4 2.3-16.7 4.8-10.6 5-28.5 17.8-28.5 17.8zM3.8 24c1.8 2.3 9.2 4.2 10.2 4.4-4.6-3.2-14-12-14-12 1 2.7 2.3 5.2 3.8 7.6z"></path>
          <path d="M25.6 22.9C30.5 19.3 47.9 4.6 64.7.6c0 0-8.8-1.4-21.3 2.5-4.5 1.4-11 7.7-23.1 19.4-1.6.9-7.5-2.5-10.9-4.1 0 0 5.6 8.9 7.6 11.5 3 4.1 8.5 6.5 8.5 6.5-.5-.5-4.3-4.5-5.4-6.8-.7-1.1.1-2.7 5.5-6.7zM127.9 6.8h-3v8.9h-5.6V6.8h-3v10.4h11.6zM152.9 15.6h-7.5V6.8h-3.1v10.4h9.2zM154.2 6.8h3.1v10.4h-3.1zM191.7 8.3h6.9l1.4-1.5h-11.4v10.4h3.1v-5.1h6.7l1.2-1.6h-7.9zM106.6 13.8h8.3V7.6c0-.4-.3-.8-.7-.8h-10.7v10.3h3.1v-3.3zm0-5.5h5c.1 0 .3 0 .3.5v3.5h-5.3v-4zM140.7 10.8h-.9v-3c0-.6-.3-1-.8-1h-9.7v10.4h11.3l.1-6.4zm-3.1 4.8h-5.2v-3.3h5.2v3.3zm0-4.8h-5.2V8.3h4.9c.3 0 .3.4.3.5v2zM100.5 8.3l1.6-1.5H90.5v10.3h11.6l-1.6-1.5h-6.9v-2.8h7.8v-1.7h-7.8V8.3zM162 8.3h7l1.5-1.5h-11.6v10.3H169l1.5-1.5H162zM154 24.5l1.3-1.5h-11.8v5.6h8.5v3.1h-8.9l1.9 1.6h10.2V27h-8.6v-2.5zM100.6 23h-11v10.3h3.1v-4.4h5.5v4.4h3.1v-9.4c.1-.4-.2-.8-.7-.9zm-2.4 4.4h-5.4v-2.9h5.1c.3 0 .3.3.3.5v2.4zM127.2 24.5l1.6-1.5h-11.7v10.3h11.7l-1.6-1.5h-7V29h7.9v-1.7h-7.9v-2.8zM86.4 24.6L88 23H75.8v10.3h11.8v-5.6h-3.1v4.1H79v-7.2zM103 23v10.4h3.2v-6l3 2.1 3.1-2.1v6h3.1V23l-6.2 4.1zM141.8 28.9v-5c0-.5-.3-1-.8-1h-11.2v10.4h3.1v-8.8h5.4c.3 0 .3.3.3.5v2h-5.1l5.6 6.3h3.7l-3.9-4.4h2.9zM88.7 14.1V7.8c0-.5 0-1-.6-1H75.8V14l3.2 3.5V8.3h6c.4 0 .5.1.5.5v3.3h-5.3l8.5 8.9v-3.5L85.5 14h3.2zM186.1 6.8h-10.5v7.5l2.5 2.9h8.7V7.6c0-.4-.3-.8-.7-.8zm-2.4 8.8h-3.3l-1.7-2V8.3h5v7.3z"></path>
        </svg>
      </div>
      <div className="hidden lg:flex Links w-1/2 h-full  items-center justify-evenly">
        {Links.map((item, i) => (
          <Link className={`uppercase hover:text-red-600 `} key={i}>
            {item}
          </Link>
        ))}
      </div>
      <div className="users  w-1/3 md:w-1/5 flex items-center justify-end gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ paddingRight: "1rem", borderRight: "3px solid white" }}
          width="85.418"
          height="20.556"
          viewBox="0 0 71.418 15.556"
          svg-inline=""
          alt="asus"
          role="none"
          focusable="false"
        >
          <g data-name="组件 69 – 1">
            <path
              fill="#797979"
              stroke="rgba(0,0,0,0)"
              stroke-miterlimit="10"
              d="M52.803 15.056l.009-3.84h13.593a1.609 1.609 0 00.649-.183.818.818 0 00.256-.578c0-.737-.613-.769-.921-.785l-9.882-.815A4.615 4.615 0 0154.3 7.812a3.758 3.758 0 01-1.271-2.052s12.766.746 14.184.877a4.359 4.359 0 013.618 3.351 6.077 6.077 0 01-.022 1.57 4.233 4.233 0 01-4.008 3.5zm-12.767-.017l-.354-.025a4.216 4.216 0 01-3.621-3.534v-.609a5.825 5.825 0 01-.077.656 4.261 4.261 0 01-3.52 3.5h-18.3v-9.8l3.8.276v5.738h13.688a.768.768 0 00.807-.74c.007-.738-.562-.814-.864-.828 0 0-9.444-.774-9.782-.806a4.988 4.988 0 01-2.284-1.074 3.976 3.976 0 01-1.2-2.258s12.694 1 14.119 1.129c2.392.221 3.494 2.753 3.59 3.327 0 0 .008.059.015.164V4.642l3.881.278v5.078a1.23 1.23 0 001.119 1.273h6.6a1.264 1.264 0 001.267-1.285v-4.46l3.843.227v5.358c0 3.627-3.817 3.931-3.817 3.931zM.918 15.021L7.651 4.597l4.341.458-6.472 9.966zM52.803 4.363v-.311a5.491 5.491 0 01.973-2A4.27 4.27 0 0156.918.5h14v3.866zm-3.937 0V.519h3.909v3.844zm-12.844 0V.519h3.912v3.844zm-28.216 0s1.589-2.59 1.983-3.1a1.682 1.682 0 011.4-.738h6.946v3.527a5.5 5.5 0 01.977-2A4.252 4.252 0 0122.253.496h13.086v3.863z"
              data-name="联合 1"
            ></path>
          </g>
        </svg>
        <i className="fa-solid fa-magnifying-glass"></i>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          svg-inline=""
          alt="user"
          role="presentation"
          focusable="false"
          class="svg-icon"
        >
          <path
            d="M12.613 18.28v2.1H22l-4.009-4.009.7-3.982v-.1c-.484-1.44-2.1-6.195-2.783-6.846a18.386 18.386 0 00-3.701-1.874L12 3.5l-.17.069A18.393 18.393 0 008.13 5.443c-.69.651-2.89 5.848-3.32 6.88l-.063.139 1.235 3.939L2 20.383h8.886V18.53l-2.873-1.718-.442.739 2.448 1.452v.507H4.094l2.795-3.123-1.215-4.121a50.59 50.59 0 012.97-6.447 15.671 15.671 0 013.107-1.614V10.304l3.332-.868c.633.85 1.17 1.766 1.6 2.733l-1.587 4.425-2.483 1.686z"
            fill="#F7F7F7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
