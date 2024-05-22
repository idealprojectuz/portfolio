import Image from "next/image";
import React from "react";
import GlowCard from "../../helper/glow-card";

export const PortfolioCard = ({ project }) => {
  return (
    <div className="z-[-1]">
      <GlowCard identifier={"project-" + project.id}>
        <div className="p-2 rounded-[12px]">
          <Image
            src={project.singlePhoto.url}
            alt={project.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 12,
            }}
            width={720}
            height={450}
            // src={project}
          />
          <h3 className="mt-2 text-[18px] font-bold bg-gradient-to-r from-[#ff36bf] via-[#c12fff] to-[#0014ec] bg-clip-text text-transparent">
            {project.title}
          </h3>
        </div>
      </GlowCard>
    </div>
  );
};
