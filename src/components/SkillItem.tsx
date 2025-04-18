import { Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";

interface SkillSvgItem {
  id: number;
  name: string;
  svg: string;
}

interface DescriptionItem {
  id: number;
  text: string;
}

interface SkillItemProps {
  darkMode: boolean;
  title: string;
  skillSvg: SkillSvgItem[];
  description: DescriptionItem[];
}

const SkillItem = (props: SkillItemProps) => {
  const colorProp = props.darkMode
    ? {
        textColor1: "text-white",
        textColor2: "text-gray-400",
        bgColor: "bg-slate-800",
        hoverBgColor: "bg-slate-600",
        svgBgColor: "bg-slate-400",
        shadow: "shadow-none",
      }
    : {
        textColor1: "text-slate-500",
        textColor2: "text-black",
        bgColor: "bg-slate-300",
        hoverBgColor: "bg-slate-950",
        svgBgColor: "bg-white",
        shadow: "shadow-md",
      };
  return (
    <div
      className={`hover:scale-104 rounded-md ${colorProp.bgColor} p-2 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:${colorProp.hoverBgColor} ${colorProp.shadow} transition-colors`}
    >
      <div>
        <h4
          className={`text-2xl ${colorProp.textColor1} font-extrabold transition-colors`}
        >
          {props.title}
        </h4>
      </div>
      <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-7 2xl:grid-cols-9">
        {props.skillSvg.map((item) => {
          return (
            <div
              className="h-12 w-12 transform transition duration-300 ease-in-out hover:scale-125 2xl:h-12 2xl:w-12"
              key={item.id}
            >
              <Tooltip title={item.name} arrow enterTouchDelay={10}>
                <Image
                  className={`h-full w-full rounded-md ${colorProp.svgBgColor} p-1 transition-colors`}
                  width={50}
                  height={50}
                  src={item.svg}
                  alt={item.name}
                />
              </Tooltip>
            </div>
          );
        })}
      </div>
      <div
        className={`mt-4 p-2 text-base ${colorProp.textColor2} transition-colors`}
      >
        <ul className="list-inside list-decimal">
          {props.description.map((item) => {
            return (
              <li className="text-sm lg:text-lg 2xl:text-2xl" key={item.id}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillItem;
