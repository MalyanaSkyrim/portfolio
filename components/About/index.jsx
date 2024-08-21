"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DevImg from "../DevImg";
import PersonalInfo from "./PersonalInfo";
import Qualifications from "./Qualifications";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="mt-16 pb-20 min-h-[85vh] lg:min-h-[700px]">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-1 lg:hidden relative mb-12">
            <DevImg containerClassName="bg-about-shape-light dark:bg-about-shape-dark w-[80vw] h-[80vw] max-w-[400px] max-h-[400px]  mx-auto bg-no-repeat bg-contain relative" />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full md:gap-x-2 grid md:grid-cols-3 md:w-[520px] mx-auto md:border-border md:border">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="mt-12 xl:mt-8 md:w-[520px] lg:w-[640px]">
                <TabsContent value="personal">
                  <PersonalInfo />
                </TabsContent>
                <TabsContent value="qualifications">
                  <Qualifications />
                </TabsContent>
                <TabsContent value="skills">
                  <Skills />
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
