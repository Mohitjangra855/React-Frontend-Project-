import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  // Array of images for the slideshow
  const images = ["https://dlcdnwebimgs.asus.com/gain/D8A5D7EC-C49F-4DC5-89DF-5331A185C64D/fwebp","https://dlcdnwebimgs.asus.com/gain/E898B3E5-437A-456E-A4B8-AAA5F11215AE/fwebp","https://dlcdnwebimgs.asus.com/gain/B32D384D-9657-4EE0-9A7E-DC72C63F2169/fwebp","https://dlcdnwebimgs.asus.com/gain/25EFA572-8F61-416E-95C1-F3B62B1FACF6/fwebp","https://dlcdnwebimgs.asus.com/gain/25EFA572-8F61-416E-95C1-F3B62B1FACF6/fwebp","https://dlcdnwebimgs.asus.com/gain/0B7F8591-112D-4D1E-B1F0-0A000EEAFCE6/fwebp"
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the image index
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []); // Adding empty dependency array to ensure this only runs once

  return (
    <div className="carousel w-full max-h-fit">
      <div className="list">
        <img src={images[currentIndex]} className="item" alt="cc" />
      </div>
    </div>
  );
};

export default Hero;
