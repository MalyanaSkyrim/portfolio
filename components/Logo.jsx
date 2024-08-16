import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={68} height={68} priority />
    </Link>
  );
};

export default Logo;
