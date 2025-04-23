"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

    return () => clearInterval(interval);
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
          Craving something delicious? We&apos;ve got you covered. Freshly
          prepared meals, delivered right to your doorstep.
        </p>
        <Button className="py-6 text-lg">Discover Food</Button>
      </div>
      <Image
        width={1024}
        height={1024}
        src={image}
        alt="Food"
        className="h-full md:w-[35%] scale-90 hover:scale-100  md:scale-100 md:hover:scale-105 cursor-pointer rounded object-cover"
        style={{
          animation: "rotate 5s linear infinite",
        }}
      />
    </section>
  );
};

export default HomeSection;
