import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { client } from "../lib/client.js";
import HeroBanner from "./components/HeroBanner";
import { FunctionComponent } from "react";

export const getPost = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  console.log(bannerData);
  return {
    props: { products, bannerData },
  };
};



const Home = ({ products, bannerData }) => {
  return (
    <main>
      {console.log(bannerData)}
      {JSON.stringify(bannerData)}
      <Navbar />
      <HeroBanner heroData={bannerData} />
      <Hero />
    </main>
  );
};

export default Home;
