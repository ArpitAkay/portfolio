import React from "react";

interface PercentageBarProps {
  percentage: number;
  skill: string;
  color: string;
}

const PercentageBar = (props: PercentageBarProps) => {
  const clampedPercentage = Math.min(100, Math.max(0, props.percentage));
  const filledWidth = clampedPercentage;
  const emptyWidth = 100 - clampedPercentage;

  return (
    <div className="w-full">
      <div>
        <p>{`${props.skill} ${props.percentage}%`}</p>
      </div>
      <div className="mt-1 flex w-full flex-row">
        <div
          className={`h-3  ${props.color} rounded-l-md`}
          style={{ width: `${filledWidth}%` }}
        ></div>
        <div
          className={`h-3 rounded-r-md bg-slate-400`}
          style={{ width: `${emptyWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PercentageBar;
