
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { client } from "../lib/client.js";
import HeroBanner from "./components/HeroBanner";
import { } from "react";
import FooterBanner from "./components/FooterBanner";
import Footer from "./components/Footer";

async function getData() {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return bannerData
}


export const metadata = {
  title: 'Ecommerce - TS/Sanity',
  description: 'Ecommerce - TS',
}

export default async function Home() {

  const bannerData = await getData()
  
  return (
    <main className="">
      <Navbar />      
      <HeroBanner heroData = {bannerData.length && bannerData[0]}/>
      {/* @ts-expect-error Async Server Component */}
      <Hero />        
      <FooterBanner footerData = {bannerData[0]}/>
       
        
     
      
    </main>
  );
};


