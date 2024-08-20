"use client";
import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { name, category, description, link, github, image } = project;

  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden bg-tertiary dark:bg-secondary/60 bg-no-repeat bg-cover bg-work-project-bg-light dark:bg-work-project-bg-dark bg-[110%]">
          <Image
            src={image}
            alt={name}
            className="absolute bottom-0 shadow-2xl"
            width={247}
            height={250}
            priority
          />
          <div className="flex gap-x-2">
            <Link
              href={link}
              className={cn(
                "bg-secondary w-[46px] h-[46px] rounded-full flex justify-center items-center",
                "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              )}
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={link}
              className={cn(
                "bg-secondary w-[46px] h-[46px] rounded-full flex justify-center items-center",
                "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              )}
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {category}
        </Badge>
        <h4 className="mb-1">{name}</h4>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
