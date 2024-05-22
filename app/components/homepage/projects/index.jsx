import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import GlowCard from "../../helper/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import Image from "next/image";
import AnimationLottie from "../../helper/animation-lottie";
import { PortfolioCard } from "./portfolio-card";

const Projects = ({ portfoliodata }) => {
  console.log(portfoliodata);
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-4 gap-6">
          {portfoliodata.map((project, index) => (
            <PortfolioCard project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
