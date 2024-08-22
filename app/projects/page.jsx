"use client";
import React from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { projectData } from "@/components/Work";
import ProjectCard from "@/components/Work/ProjectCard";

const categories = [
  "All projects",
  ...new Set(projectData.map((project) => project.category)),
];

const ProjectsPage = () => {
  const [category, setCategory] = React.useState("All projects");
  const filteredProjects = projectData.filter(
    (p) => category === "All projects" || p.category === category
  );
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        <Tabs defaultValue={category} className="mb-24">
          <TabsList className="w-full grid h-full gap-x-2 gap-y-2 sm:grid-cols-4 md:max-w-[640px] mb-12 mx-auto sm:border dark:border-none">
            {categories.map((category) => (
              <TabsTrigger
                onClick={() => setCategory(category)}
                key={category}
                value={category}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category}
              className="grid grid-cols-1 sm:grid-cols-2 sm:max-w-[700px] lg:grid-cols-3 gap-4 lg:max-w-[1040px] mx-auto"
            >
              {projectData
                .filter(
                  (p) => category === "All projects" || p.category === category
                )
                .map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsPage;
