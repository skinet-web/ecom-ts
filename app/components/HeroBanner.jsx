import React from "react";

const HeroBanner = (heroData) => {
  return (
    <div>
      <div>
        {console.log(heroData)}
        <p>{heroData.product}</p>
        <h3>MID TEXT</h3>
      </div>
    </div>
  );
};

export default HeroBanner;
