"use client";
import React from "react";
import CountUp from "react-countup";

const CountBadge = ({
  className,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${className}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-3xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={0.5} duration={3} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default CountBadge;
