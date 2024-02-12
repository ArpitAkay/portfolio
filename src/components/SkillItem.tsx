import { Tooltip, Zoom } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

interface skillSvgItem {
  id: number;
  name: string;
  svg: string;
}

interface descriptionItem {
  id: number;
  text: string;
}

interface SkillItemProps {
  title: string;
  skillSvg: skillSvgItem[];
  description: descriptionItem[];
}

const SkillItem = (props: SkillItemProps) => {
  return (
    <div className="hover:scale-104 rounded-md bg-slate-800 p-2 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:bg-slate-600">
      <div>
        <h4 className="text-2xl text-white">{props.title}</h4>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-2 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-7 2xl:grid-cols-9">
        {props.skillSvg.map((item) => {
          return (
            <div
              className="h-12 w-12 transform transition duration-300 ease-in-out hover:scale-125 2xl:h-12 2xl:w-12"
              key={item.id}
            >
              <Tooltip title={item.name} arrow TransitionComponent={Zoom}>
                <img
                  className="h-full w-full rounded-md bg-slate-400 p-1"
                  src={item.svg}
                  alt={item.name}
                />
              </Tooltip>
            </div>
          );
        })}
      </div>
      <div className="mt-4 p-2 text-base text-gray-400">
        <ol className="list-inside list-disc">
          {props.description.map((item) => {
            return (
              <li className="my-1" key={item.id}>
                {item.text}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SkillItem;
