"use client";
import React from "react";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import CountBadge from "./CountBadge";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Socials from "./Socials";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-12 lg:py-24 h-[84vh] lg:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none flex items-center">
      <div className="mx-auto container lg:px-12 2xl:px-0">
        <div className="flex flex-col justify-between gap-x-8 lg:flex-row">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <div className="text-base uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Front-end Developer
            </div>
            <h1 className="max-w-[400px] sm:max-w-none mx-auto">
              Hello, my name is Mohamed Malyana
            </h1>
            <p className="subtitle max-w-[490px] mx-auto lg:mx-0 mt-3">
              Brief description with insights about my skills and what I do. and
              what i engage in professionally.
            </p>
            <div className="flex gap-y-3 gap-x-3 mx-auto lg:mx-0 mb-8">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download <Download size={18} />
              </Button>
            </div>
            <Socials
              containerClassName="flex gap-x-6 mx-auto lg:mx-0"
              iconClassName="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden lg:flex relative">
            <CountBadge
              className="absolute top-[24%] -left-[5rem]"
              badgeText="Years of experience"
              icon={<RiBriefcase4Fill />}
              endCountNum={4}
            />
            <CountBadge
              className="absolute top-[80%] -left-[1rem]"
              badgeText="Personal projects"
              icon={<RiTodoFill />}
              endCountNum={9}
            />
            <CountBadge
              className="absolute top-[55%] -right-[1rem]"
              badgeText="Freelance projects"
              icon={<RiTeamFill />}
              endCountNum={3}
            />
            <div className="bg-hero-shape2-light dark:bg-hero-shape2-dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 scale-75 lg:scale-100"></div>
            <DevImg />
          </div>
        </div>
        <div className="hidden lg:flex absolute left-2/4 bottom-5 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
