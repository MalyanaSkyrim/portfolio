"use client";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroActions = () => {
  return (
    <div className="flex gap-y-3 gap-x-3 mx-auto lg:mx-0 mb-8">
      <Link href="/contact">
        <Button className="gap-x-2">
          Contact me <Send size={18} />
        </Button>
      </Link>
      <Link
        href="https://drive.google.com/file/d/1FiPJfX51PKh9eFTVsTwyTFISH07Bw9gt/view?usp=sharing"
        target="_blank"
      >
        <Button variant="secondary" className="gap-x-2">
          Download <Download size={18} />
        </Button>
      </Link>
    </div>
  );
};

export default HeroActions;
