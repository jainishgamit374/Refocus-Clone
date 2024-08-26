import React from "react";
import Carosale from "./Carosale";

const Carosales = () => {
  const CarosaleData = [
    {
      image:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6622e09b67c816482cb3d1e2_uzV9x4ZN_400x400.jpg",
      para: "Our collaboration with Refokus was incredibly effective. They have an insightful, senior team spanning many functions and they created a striking, articulate landing page for our AI startup that I'm extremely satisfied with. I showed some of the early design explorations to a friend who works on Apple's Interaction Design team and he remarked that the creative range was unusual to see from a single agency.",
      name: "Mike Conover",
      work: "Brighwave",
    },
    {
      image:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/661c5cd1c5d2e2795c264de0_Katie.jpg",
      para: "We had a wonderful experience working with Refokus for our recent website redesign. We were grateful for their partnership, guidance, patience, and expertise. They're masters of their craft, they helped us evolve our brand and level up our website, and we're incredibly proud of where we netted out.",
      name: "Katie Kearsey",
      work: "Right Side Up",
    },
    {
      image:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/661c4a2faec9b0d14a859536_ron.png",
      para: "Working with Refokus is an absolute pleasure, they are artists of their craft, work with passion and patience to understand the objective and reach it in an ultimate way!",
      name: "Ron Rofé",
      work: "Rainfall - Venture Capital",
    },

  ];

  return (
    <>
      <div className="w-full h-[60vh] overflow-hidden ">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-1 overflow-hidden">
          {CarosaleData.map((item, index) => {
            return <Carosale key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Carosales;
