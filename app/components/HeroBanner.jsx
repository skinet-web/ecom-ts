import React from "react";

const HeroBanner = ({heroData}) => {
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
