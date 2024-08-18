import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

const educationData = {
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
};

const experiencesData = {
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
};

const Qualifications = () => {
  return (
    <div>
      <h3>My Awesome Journey</h3>
      <div className="grid md:grid-cols-2 gap-y-8">
        <div>
          <div className="flex gap-x-4 items-center text-[22px] text-primary mb-3">
            <Briefcase />
            <h4 className="capitalize font-medium">{experiencesData.title}</h4>
          </div>
          <div className="flex flex-col gap-y-8">
            {experiencesData.data.map((item) => (
              <div key={item.company} className="flex gap-x-8 group">
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
                  <p className="text-base font-medium">{item.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex gap-x-4 items-center text-[22px] text-primary mb-3">
            <GraduationCap size={28} />
            <h4 className="capitalize font-medium">{educationData.title}</h4>
          </div>
          <div className="flex flex-col gap-y-8">
            {educationData.data.map((item) => (
              <div key={item.university} className="flex gap-x-8 group">
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
                  <p className="text-base font-medium">{item.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
