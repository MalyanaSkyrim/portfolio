import Image from "next/image";
import React from "react";

const DevImg = () => {
  return (
    <div className="relative bg-hero-shape w-[510px] h-[462px] bg-no-repeat bg-bottom scale-75 xl:scale-100">
      <div className="overflow-hidden rounded-full h-full">
        <Image src="/hero/developer.png" width={500} height={500} />
      </div>
    </div>
  );
};

export default DevImg;
