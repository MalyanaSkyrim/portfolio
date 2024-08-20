"use client";
import React from "react";
import { Button } from "../ui/button";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const projectData = [
  {
    image: "/work/4.png",
    category: "React js",
    name: "Nexa Website",
    description: "A website for a digital agency",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Full Stack",
    name: "Serenity Website",
    description: "A website for a digital agency",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Next js",
    name: "Nexa Website",
    description: "A website for a digital agency",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "React js",
    name: "Nova Website",
    description: "A website for a digital agency",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-16 xl:mb-24">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto text-center flex flex-col justify-center items-center mb-10">
          <h2 className="section-title mb-4">Latest projects</h2>
          <p className="subtitle mb-8">
            Explore my recent projects that showcase trending technologies and
            concepts.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="lg:max-w-[1040px] max-w-[640px] mx-auto">
          <Swiper
            className="h-[490px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1040: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={16}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.name}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
