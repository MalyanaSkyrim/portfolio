import Image from "next/image";
import React from "react";

const DevImg = ({ containerClassName }) => {
  return (
    <div className={containerClassName}>
      <div className="overflow-hidden rounded-full h-full">
        <Image src="/hero/developer.png" width={500} height={500} />
      </div>
    </div>
  );
};

export default DevImg;
