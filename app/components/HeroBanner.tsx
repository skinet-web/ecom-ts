import React from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/client";

interface HeroData {
  image: String;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  buttonText: string;
  desc: string;
}

interface HeroBannerProps {
  heroData: HeroData;
}


const HeroBanner:FunctionComponent<HeroBannerProps> = ({heroData}) => {
  return (
    <div className="flex mx-10 bg-gray-400 rounded-xl">
      <div className="flex flex-col justify-start items-start ml-4 my-2">
        <h3 className="font-semibold text-xl">{heroData.smallText}</h3>
        <h3 className="font-bold text-5xl">{heroData.midText}</h3>
        <p  className="text-white text-6xl uppercase font-semibold">{heroData.largeText2}</p>
        <Image src={urlFor(heroData.image).url()} alt='headphones' width={500} height={500} />
        <button className="bg-red-500 text-white font-semibold p-3 my-6 
          ml-2 rounded-full ">
            {heroData.buttonText}
        </button>
        <div className="w-[95%] mb-3">
          <h3 className="font-bold text-lg">Description</h3>
          <p className="text-justify">{heroData.desc}</p>
        </div>
        
      </div>
    </div>
  );
};

export default HeroBanner;
