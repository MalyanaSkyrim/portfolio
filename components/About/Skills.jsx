"use client";
import React from "react";
import Image from "next/image";

const skillsData = {
  title: "skills",
  data: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
  ],
};

const toolsData = {
  title: "tools",
  data: [
    {
      imgPath: "/about/vscode.svg",
    },
    {
      imgPath: "/about/figma.svg",
    },
    {
      imgPath: "/about/notion.svg",
    },
  ],
};

const Skills = () => {
  return (
    <div className="text-center">
      <h3>Tools i use everyday</h3>
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-2">Skills</h4>
        <div className="border-b border-border mb-4"></div>
        <div className="flex flex-wrap mx-auto sm:max-w-96 gap-y-2 justify-center">
          {skillsData.data.map((item) => (
            <div className="min-w-[120px] text-center">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">Tools</h4>
        <div className="border-b border-border mb-4"></div>
        <div className="flex flex-wrap gap-4 justify-center">
          {toolsData.data.map((item) => (
            <div key={item.imgPath} className="w-9 h-9 relative">
              <Image
                src={item.imgPath}
                alt="tool"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
