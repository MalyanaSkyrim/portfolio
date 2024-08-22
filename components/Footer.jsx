import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerClassName="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconClassName="text-white hover:text-primary text-[20px]"
          />
          <div className="text-muted-foreground text-center">
            Copyright &copy; MALYANA Mohamed. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
