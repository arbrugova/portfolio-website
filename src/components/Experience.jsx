// Importing necessary modules and components
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

// Importing styles and constants
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";

// Importing Higher Order Component (HOC) and motion utility function
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Functional component representing an individual experience card
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
    >
      <div>
        {/* Title of the experience */}
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {/* Company name and additional details */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* List of bullet points for the experience */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Functional component representing the overall experience section
const Experience = () => {
  return (
    <>
      {/* Framer Motion animation for text */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Container for the timeline */}
      <div className='mt-20 flex flex-col'>
        {/* Vertical timeline component */}
        <VerticalTimeline>
          {/* Mapping over the experiences array and rendering ExperienceCard for each */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Exporting the Experience component wrapped with SectionWrapper HOC
export default SectionWrapper(Experience, "work");
