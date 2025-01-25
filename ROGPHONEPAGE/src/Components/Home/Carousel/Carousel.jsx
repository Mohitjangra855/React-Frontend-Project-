import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const slides = [
    {
      name: "Laptops",
      image:
        "https://dlcdnwebimgs.asus.com/gain/868C3307-DD02-4624-8BA7-31B62EE4A38F/w240/h175",
    },
    {
      name: "Motherboards",
      image:
        "https://dlcdnwebimgs.asus.com/gain/B9B3F542-45F3-4C59-9BC1-25B8A1B7CCB1/w240/h175",
    },
    {
      name: "Graphics Cards",
      image:
        "https://dlcdnwebimgs.asus.com/gain/01480520-08BA-439E-A626-2E3D6F0D9908/w240/h175",
    },
    {
      name: "Monitors",
      image:
        "https://dlcdnwebimgs.asus.com/gain/44F0B24D-67A0-4716-A88C-B8B621B0D1F7/w240/h175",
    },
    {
      name: "Phones",
      image:
        "https://dlcdnwebimgs.asus.com/gain/8F573A21-6ABD-415D-BF51-96A047493D02/w240/h175",
    },
    {
      name: "Power Supply Units",
      image:
        "https://dlcdnwebimgs.asus.com/gain/DD0607BB-A52B-4947-81D4-6E90FFE609C1/w240/h175",
    },
    {
      name: "External Graphic Docks",
      image:
        "https://dlcdnwebimgs.asus.com/gain/976CF93D-8371-4C36-B44C-88920ED5FA9D/w240/h175",
    },
    {
      name: "Networking",
      image:
        "https://dlcdnwebimgs.asus.com/gain/8E7A4860-965C-424A-AC63-E228E0D0B391/w240/h175",
    },
    {
      name: "Keyboards",
      image:
        "https://dlcdnwebimgs.asus.com/gain/FE102E9F-C72D-407F-A49B-2AB1006A0669/w240/h175",
    },
    {
      name: "Mice & Mouse Pads",
      image:
        "https://dlcdnwebimgs.asus.com/gain/F919198E-4F2B-4A8A-969A-E6E4757674AC/w240/h175",
    },
    {
      name: "Headsets & Audio",
      image:
        "https://dlcdnwebimgs.asus.com/gain/070A915A-ED63-4C9E-B837-F6F1766E2863/w240/h175",
    },
    {
      name: "Cases",
      image:
        "https://dlcdnwebimgs.asus.com/gain/30D1F34B-0C37-4D9D-92E4-487372FD254F/w240/h175",
    },
    {
      name: "Apparel, Bags, & Gear",
      image:
        "https://dlcdnwebimgs.asus.com/gain/5AC10F2B-B36C-40D7-8950-78EE7F4E298E/w240/h175",
    },
    {
      name: "Streaming Kits",
      image:
        "https://dlcdnwebimgs.asus.com/gain/7A8E0C01-7EBA-49FF-977E-352D6EAAA8BC/w240/h175",
    },
    {
      name: "Controllers",
      image:
        "https://dlcdnwebimgs.asus.com/gain/85A00D94-1EFE-424F-9C02-CE0EDBB646D1/w240/h175",
    },
    {
      name: "Storage",
      image:
        "https://dlcdnwebimgs.asus.com/gain/D8D19FB9-2485-478F-9E58-4344265E0E69/w240/h175",
    },
    {
      name: "Power & Protection Gadgets",
      image:
        "https://dlcdnwebimgs.asus.com/gain/09D0ECE7-D85B-49F2-8432-8938293A39BB/w240/h175",
    },
    {
      name: "Cooling",
      image:
        "https://dlcdnwebimgs.asus.com/gain/FB3145A7-F4C6-493F-BF30-3137E3DFD470/w240/h175",
    },
    {
      name: "Gaming Handhelds",
      image:
        "https://dlcdnwebimgs.asus.com/gain/D0875F0F-7F79-4C4A-8B9D-AE292AD3B675/w240/h175",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 300,
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 762,
        settings: {
          dots: true,
          infinite: true,
          speed: 100,
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="w-[80%] lg:w-[85%] m-auto ">
      <div className="mt-2  p-3">
        <Slider {...settings}>
          {slides.map((d) => (
            <div className=" h-[300px] rounded-xl border-2 border-zinc-500 ">
              <div className="h-56 rounded-t-xl flex justify-center items-center gap-2">
                <img src={d.image} alt="" className="h-44 w-64 rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Carousel;
