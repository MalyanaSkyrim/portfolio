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
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Front-end Developer
            </div>
            <h1>Hello, my name is Mohamed Malyana</h1>
            <p className="subtitle max-w-[490px] mx-auto lg:mx-0 mt-3">
              Brief description with insights about my skills and what I do. and
              what i engage in professionally.
            </p>
            <div className="flex flex-col gap-y-3 sm:flex-row gap-x-3 mx-auto lg:mx-0 mb-8">
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
            <div className="bg-hero-shape2-light dark:bg-hero-shape2-dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
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
