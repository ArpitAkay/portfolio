import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip, Zoom } from "@mui/material";

interface projectItemProps {
  darkMode: boolean;
  data: {
    id: number;
    title: string;
    image: string;
    description: string;
    github?: string;
    live?: string;
  };
}

const ProjectItem = (props: projectItemProps) => {
  const colorProp = props.darkMode
    ? {
        color1: "text-white",
        color2: "text-gray-400",
        backgroundColor: "bg-slate-800",
        hoverBackgroundColor: "bg-slate-600",
      }
    : {
        color1: "text-black",
        color2: "text-gray-950",
        backgroundColor: "bg-slate-300",
        hoverBackgroundColor: "bg-slate-500",
      };

  return (
    <div
      className={`hover:scale-104 flex flex-col rounded-md ${colorProp.backgroundColor} transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:${colorProp.hoverBackgroundColor}`}
    >
      <div>
        <div className="relative h-72">
          <Image src={props.data.image} alt="project" fill={true} />
        </div>
        <div className="my-4 flex flex-col p-2 ">
          <h3 className={`text-2xl font-medium ${colorProp.color1}`}>
            {props.data.title}
          </h3>
          <p className={`mt-2 ${colorProp.color2}`}>{props.data.description}</p>
        </div>
      </div>
      <div className="mt-auto flex flex-row justify-end p-2">
        {props.data.live && (
          <Tooltip title="Live" arrow TransitionComponent={Zoom}>
            <Link href={props.data.live} target="_blank" className="mx-1">
              <button type="button">
                <svg
                  className={`h-8 w-8 ${colorProp.color1}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="12" r="1" />{" "}
                  <circle cx="12" cy="12" r="5" />{" "}
                  <circle cx="12" cy="12" r="9" strokeDasharray=".001 4.03" />
                </svg>
              </button>
            </Link>
          </Tooltip>
        )}
        {props.data.github && (
          <Tooltip title="Github" arrow TransitionComponent={Zoom}>
            <Link href={props.data.github} target="_blank">
              <button type="button" className="mx-1">
                <svg
                  className={`h-8 w-8 ${colorProp.color1}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </button>
            </Link>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
