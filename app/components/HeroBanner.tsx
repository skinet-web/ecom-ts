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
    <div className="flex mx-10 bg-gray-400">
      <div className="flex flex-col justify-start items-start ml-4 ">
        <h3>{heroData.smallText}</h3>
        <h3>{heroData.midText}</h3>
        <p>{heroData.largeText2}</p>
        <Image src={urlFor(heroData.image).url()} width={500} height={500} />
        
        <button className="bg-red-500 text-white font-semibold p-3 
        ml-2 rounded-full">
          {heroData.buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
