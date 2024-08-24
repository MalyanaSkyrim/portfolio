import React from "react";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Mohamed Malyana",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+212622304207",
  },
  {
    icon: <MailIcon size={20} />,
    text: "malyanamohamed1@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born in 1996",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Casablanca, Morocco",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Engineer in Networks and Telecommunications",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Front-end Developer",
  },
];

const PersonalInfo = () => {
  return (
    <div className="text-center">
      <h3>Skilled FullStack Javascript Developer</h3>
      <p className="subtitle max-w-lg lg:max-w-xl max-h-auto mx-auto">
        I am specialized in creating web applications with cutting-edge
        technologies, with experience in the full application life cycle,
        planning, architecture, implementation, automated tests, and release.
      </p>
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3 mb-12">
        {infoData.map((item, index) => (
          <div
            key={item.text}
            className="flex items-center gap-x-4 mx-auto lg:mx-0"
          >
            <div className="text-primary">{item.icon}</div>
            <p className="whitespace-nowrap">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-primary">Language Skill</p>
        <div className="border-b border-border"></div>
        <p>English, French, Arabic</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
