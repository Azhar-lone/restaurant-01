"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageLinks = [
  "/images/image1.png",
  "/images/image5.png",
  "/images/image4.png",
];

const HomeSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ImageLinks.length);
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

  const image = ImageLinks[index];

  return (
    <section
      id="home"
      className="pt-32 flex flex-col md:flex-row items-center justify-between px-8 pb-32 w-[95%] "
    >
      <div className=" h-full flex-1 w-full">
        <h2 className="text-5xl text-sunset font-bold mb-4">
          Satisfy Your Cravings <br />
          Anytime, Anywhere
        </h2>
        <p className="text-lg text-lightColor mb-6">
          Craving something delicious? We&apos;ve got you covered. Freshly prepared
          meals, delivered right to your doorstep.
        </p>
        <button className="bg-red-400 text-white px-6 py-3 rounded hover:bg-red-500 transition cursor-pointer">
          Discover Food
        </button>
      </div>
      <Image
        width={1024}
        height={1024}
        src={image}
        alt="Food"
        className="h-full w-[35%]  rounded object-cover"
        style={{
          animation: "rotate 5s linear infinite",
        }}
      />
    </section>
  );
};

export default HomeSection;
