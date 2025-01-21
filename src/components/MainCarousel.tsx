"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const MainCarousel = () => {
  const mainImages = [
    "/images/coffee.jpg",
    "/images/cookies.jpg",
    "/images/gingerbread.jpg",
  ];
  const certification = [
    "/images/certification_mark.svg",
    "/images/certification_mark2.svg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === mainImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  });
  return (
    <div className="relative w-full h-44">
      {mainImages.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`image ${index + 1}`}
            width={380}
            height={180}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute right-4 flex bottom-4 gap-2">
            {certification.map((mark, index) => (
              <Image key={index} src={mark} alt="mark" width={50} height={50} />
            ))}
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {mainImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-[#296CAD]" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;
