import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "my projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const Nav = ({ containerClassName, linkClassName, underlineClassName }) => {
  const path = usePathname();
  return (
    <nav className={`${containerClassName}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`capitalize ${linkClassName}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{
                  y: 0,
                }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={underlineClassName}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
