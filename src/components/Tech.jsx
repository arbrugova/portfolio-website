import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='bg-violet-gradient py-14'>
      <div className='container mx-auto text-center bg-black py-32 rounded-[20px]'>
        <h2 className='text-4xl font-bold mb-6 text-white'>Technologies I Use</h2>
        <p className='text-gray-200 mb-10'>
          Here are some of the technologies I work with on a regular basis.
        </p>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                className='object-contain h-full w-full'
              />
              <p className="text-white">{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
