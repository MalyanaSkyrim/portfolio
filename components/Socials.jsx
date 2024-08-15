"use client";
import Link from "next/link";
import React from "react";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
  RiInstagramFill,
} from "react-icons/ri";

const links = [
  {
    path: "/",
    icon: RiLinkedinFill,
  },
  {
    path: "/",
    icon: RiGithubFill,
  },
  {
    path: "/",
    icon: RiFacebookFill,
  },
  {
    path: "/",
    icon: RiInstagramFill,
  },
];

const Socials = ({ containerClassName, iconClassName }) => {
  return (
    <div className={containerClassName}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link href={link.path} key={link.path}>
            <Icon className={iconClassName}></Icon>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
