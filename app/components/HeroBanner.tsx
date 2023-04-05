import React from "react";
import { FunctionComponent } from "react";

interface HeroData {
  smallText: string;
}

interface HeroBannerProps {
  heroData: HeroData;
}


const HeroBanner:FunctionComponent<HeroBannerProps> = ({heroData}) => {
  return (
    <div>
      <div>
        
        <p>{heroData.smallText}</p>
        <h3>MID TEXT</h3>
      </div>
    </div>
  );
};

export default HeroBanner;
