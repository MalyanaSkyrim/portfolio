"use client";
import React from "react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import DevImg from "./DevImg";

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

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        university: "High School Omar Al Khayam",
        qualification: "Baccalaureate in Physical Sciences",
        years: "2011 - 2014",
      },
      {
        university: "National School of Applied Sciences",
        qualification: "Engineer in Networks and Telecommunications",
        years: "2014 - 2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Innoveos",
        position: "Front-end Developer",
        years: "2019 - 2020",
      },
      {
        company: "MTS System",
        position: "FullStack JavaScript Developer",
        years: "2020 - Present",
      },
    ],
  },
];

const skillsData = [
  {
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
  },
  {
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
  },
];

export const getData = (arr, title) => {
  return arr.find((item) => item.title === title);
};

const About = () => {
  return (
    <section className="mt-16 min-h-[85vh] lg:h-[860px]">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-1 lg:hidden relative mb-12">
            <DevImg containerClassName="bg-about-shape-light dark:bg-about-shape-dark w-[80vw] h-[80vw] max-w-[400px] max-h-[400px]  mx-auto bg-no-repeat bg-contain relative" />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="skills">
              <TabsList className="w-full md:gap-x-2 grid md:grid-cols-3 md:w-[520px] mx-auto md:border-border md:border">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="mt-12 xl:mt-8 md:w-[520px] lg:w-[640px]">
                <TabsContent value="personal">
                  <div className="text-center">
                    <h3>Skilled FullStack Javascript Developer</h3>
                    <p className="subtitle max-w-lg lg:max-w-xl max-h-auto mx-auto">
                      I am specialized in creating web applications with
                      cutting-edge technologies, with experience in the full
                      application life cycle, planning, architecture,
                      implementation, automated tests, and release.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          key={item.icon}
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
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3>My Awesome Journey</h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary mb-3">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "experience").data.map(
                            (item) => (
                              <div
                                key={item.company}
                                className="flex gap-x-8 group"
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500"></div>
                                </div>
                                <div>
                                  <p className="font-semibold text-xl leading-none">
                                    {item.company}
                                  </p>
                                  <p className="text-lg leading-none text-muted-foreground mb-4">
                                    {item.position}
                                  </p>
                                  <p className="text-base font-medium">
                                    {item.years}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary mb-3">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "education").data.map(
                            (item) => (
                              <div
                                key={item.university}
                                className="flex gap-x-8 group"
                              >
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500"></div>
                                </div>
                                <div>
                                  <p className="font-semibold text-xl leading-none">
                                    {item.university}
                                  </p>
                                  <p className="text-lg leading-none text-muted-foreground mb-4">
                                    {item.qualification}
                                  </p>
                                  <p className="text-base font-medium">
                                    {item.years}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center">
                    <h3>Tools i use everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex flex-wrap mx-auto sm:max-w-96 gap-y-2 justify-center">
                        {getData(skillsData, "skills").data.map((item) => (
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
                        {getData(skillsData, "tools").data.map((item) => (
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
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
