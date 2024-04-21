import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center text-2xl p-8">
      <div className="lg:mr-8 text-center lg:text-left lg:w-1/2">
        <p className="text-green-900 py-10">
          Presidential Initiative for Artificial Intelligence and Computing
          (PIAIC)
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          Certified Web 3.0 and Metaverse Developer
        </h1>
        <p className="mt-2 text-lg">
          A One and Quarter Years Panaverse DAO Earn as you Learn Program
          Getting Ready for the Next Generation of the Internet
        </p>
        <p className="mt-2 text-lg">
          Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
          Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics
          Technologies
        </p>
        <Button className="bg-green-800 rounded-full mt-2 cursor-pointer duration-300 hover:shadow-lg text-white font-semibold px-7">
          Learn More
        </Button>
      </div>
      <div className="lg:w-1/2">
        <Image
          src="/Hero Poster.webp"
          width={1000}
          height={1000}
          alt="panaverse-logo"
        />
      </div>
    </div>
  );
};

export default Hero;
