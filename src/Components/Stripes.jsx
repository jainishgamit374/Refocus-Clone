import React from "react";
import Stripe from "./Stripe";
import Stripe2 from "./Stripe2";

const Stripes = () => {
  const data = [
    [
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 52
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 2
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 15
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 52
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 2
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 15
      }
    ],

  ];


  const textdata = [
    [
      { text: "Creative Strategy" },
      { text: "Branding & Art Direction" },
      { text: "Web Design" },
      { text: "Creative Development" },
      { text: "2D/3D Animations" },
      { text: "Webflow Development" },
      { text: "AI Strategy & Integration" },
    ],
  ];


  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex overflow-x-hidden mt-24">
        {data.map((item, i) => (
          <Stripe
            direction={i % 2 === 0 ? "left" : "right"}
            key={i} data={item} />
        ))}
      </div>

      <div className="w-full flex overflow-x-hidden -mt-14">
        {textdata.map((item, i) => (
          <Stripe2
            direction={i % 2 === 0 ? "left" : "right"}
            key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Stripes;
