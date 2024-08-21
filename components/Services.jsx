import React from "react";
import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi liberoavidem sit deserunt fuga.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi liberoquidem sit deserunt fuga.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quasi libero quidem sit deserunt fuga.",
  },
];

const Services = () => {
  return (
    <section className="mb-20 xl:mb-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-[70px] lg:mb-16 text-center mx-auto">
          My Services
        </h2>
        <div className="grid lg:grid-cols-3 gap-x-4 justify-center gap-y-12 xl:gap-y-24">
          {servicesData.map((service) => (
            <Card
              className="relative w-full max-w-[360px] h-[240px] pt-10 flex flex-col justify-center items-center"
              key={service.title}
            >
              <CardHeader className="text-primary absolute top-0 -translate-y-1/2">
                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
