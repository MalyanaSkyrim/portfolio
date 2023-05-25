/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ icon, date, iconBg, title, companyName, points }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232631",
      }}
      iconStyle={{
        backgroundColor: iconBg,
      }}
      date={date}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={companyName}
            className="w-3/5 h-3/5 object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl">{title}</h3>
        <p className="text-secondary text-base font-semibold m-0">
          {companyName}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {points.map((point) => (
            <li
              className="text-white-100 text-sm pl-1 tracking-wider"
              key={point}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}, "work");

export default Experience;
