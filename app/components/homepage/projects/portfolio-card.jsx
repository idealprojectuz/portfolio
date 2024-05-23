"use client";
import Image from "next/image";
import React from "react";
import GlowCard from "../../helper/glow-card";
import "./portfolio-card.css";
export const PortfolioCard = ({ project }) => {
  const [active, setActive] = React.useState(false);
  return (
    <div
      className="p-2 rounded-[12px] h-[300px] portfolio-card"
      // onMouseOver={() => {
      //   console.log("onMouseOver");
      //   setActive(true);
      // }}
      // onMouseOut={() => {
      //   console.log("onMouseOut");
      //   setActive(false);
      // }}
      // onClick={() => {
      //   console.log("onClick");
      //   setActive(true);
      // } }
    >
      {/* <div
        className={` z-[-1] portfolio-card__hovered ${
          active ? "active-portfolio" : "inactive-portfolio"
        }    rounded-[50%]   w-full h-full bg-[#1E1540] m-1 `}></div> */}
      <Image
        src={project.singlePhoto.url}
        alt={project.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: 12,
        }}
        width={720}
        height={450}
        // src={project}
      />
      <h3 className="mt-2  text-[18px] font-bold bg-gradient-to-r from-[#ff36bf] via-[#c12fff] to-[#0014ec] bg-clip-text text-transparent">
        {project.title}
      </h3>
    </div>
  );
};
