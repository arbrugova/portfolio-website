import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="py-14">
      <div className="container mx-auto text-center bg-tertiary py-16 rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-6">Technologies I Use</h2>
        <p className="text-gray-300 mb-10">
          Here are some of the technologies I work with on a regular basis.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-32 h-32 flex flex-col items-center" key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                className="object-contain h-20 w-20 mb-2"
              />
              <p className="text-white text-sm">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
