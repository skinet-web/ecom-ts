import React from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/client";
import Link from "next/link";

interface HeroData {
  image: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  buttonText: string;
  desc: string;
  product: string;
}

interface HeroBannerProps {
  heroData: HeroData;
}


const HeroBanner:FunctionComponent<HeroBannerProps> = ({heroData : {image, smallText, product, midText, largeText1, largeText2, buttonText, desc}}) => {
  return (
    // <div className="flex mx-10 bg-secondarycolor rounded-xl my-16 ">
    //   <div className="flex flex-col justify-start items-start ml-4 my-2">
    //     <h3 className="font-semibold text-xl">{smallText}</h3>
    //     <h3 className="font-bold text-5xl">{midText}</h3>
    //     <p  className="text-white text-6xl uppercase font-semibold">{largeText2}</p>
    //     <Image src={urlFor(image).url()} alt='headphones' width={500} height={500} />
    //     <button className="bg-buttonColor text-white font-semibold p-2 my-6 
    //       ml-2 rounded-xl ">
    //         {buttonText}
    //     </button>
    //     <div className="w-[95%] mb-2">
    //       <h3 className="font-bold text-lg">Description</h3>
    //       <p className="text-justify">{desc}</p>
    //     </div>
        
    //   </div>
    // </div>

    <div className= 'flex flex-col md:flex-row  bg-secondarycolor text-white mx-10 rounded-xl p-3 mt-20 '>
      <div className=' flex flex-col md:items-start  md:justify-center md:mx-7 z-0'>
          <h3 className='md:text-xl md:font-semibold '>{smallText}</h3>
          <h1 className='text-4xl font-semibold md:text-3xl  '>{midText}</h1>
          <p className=' font-bold text-6xl md:text-6xl  uppercase md:max-w-xs relative z-4'>{largeText2}</p>
      </div>
      <div className='flex justify-center relative md:ml-[-80px] z-2'>
        <Image src={urlFor(image).url()}  width='500' height='500' alt='footer-image' className="object-contain"/>
      </div>

      <div className=' flex flex-col md:items-start md:justify-center ' >
          
              <h3 className="font-bold text-lg">Description</h3>
              <div className=" md:max-w-[300px]  ">
                 <p className=' text-md  text-justify mr-2 '>{desc}</p>
              </div>
              
              <Link href={`/product/${product}`} className=''>
                  <button className='bg-red-600 rounded-xl 
                  p-2 text-white font-bold mt-4 '>
                      {buttonText}
                  </button>
              </Link>
               
      </div>            
    </div>
  );
};

export default HeroBanner;
