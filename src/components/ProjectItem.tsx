import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";

interface TechStack {
  id: number;
  svg: string;
  name: string;
}

interface ProjectItemProps {
  darkMode: boolean;
  data: {
    id: number;
    title: string;
    image: string;
    description: string;
    feGithub?: string;
    beGithub?: string;
    live?: string;
    techStack: TechStack[];
  };
}

const ProjectItem = (props: ProjectItemProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const colorProp = props.darkMode
    ? {
        textColor1: "text-white",
        textColor2: "text-gray-400",
        bgColor: "bg-slate-800",
        hoverBgColor: "bg-slate-600",
      }
    : {
        textColor1: "text-black",
        textColor2: "text-gray-950",
        bgColor: "bg-slate-300",
        hoverBgColor: "bg-slate-500",
      };

  return (
    <div
      className={`hover:scale-104 flex flex-col rounded-md ${colorProp.bgColor} transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:${colorProp.hoverBgColor}`}
    >
      <div>
        <div
          className="relative h-64"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image src={props.data.image} alt={props.data.title} fill={true} />

          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 h-full w-full bg-white bg-opacity-95"
            >
              <div className="flex h-full w-full items-center justify-center">
                <div className="grid grid-cols-5 gap-2 p-2">
                  {props.data.techStack.map((tech) => {
                    return (
                      <div key={tech.id} className="flex justify-center">
                        <Tooltip title={tech.name} arrow enterTouchDelay={10}>
                          <Image
                            src={tech.svg}
                            height={50}
                            width={50}
                            alt={tech.name}
                          />
                        </Tooltip>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <div className="my-4 flex flex-col p-2 ">
          <h3
            className={`text-xl font-medium 2xl:text-2xl ${colorProp.textColor1}`}
          >
            {props.data.title}
          </h3>
          <p
            className={`mt-2 text-sm lg:text-lg 2xl:text-xl ${colorProp.textColor2}`}
          >
            {props.data.description}
          </p>
        </div>
      </div>
      <div className="mt-auto flex flex-row justify-end p-2">
        {props.data.live && (
          <Tooltip title="Live" arrow>
            <Link href={props.data.live} target="_blank" className="mx-1">
              <button type="button">
                <svg
                  className={`h-8 w-8 ${colorProp.textColor1}`}
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
        {props.data.feGithub && (
          <Tooltip title="FE Github" arrow>
            <Link href={props.data.feGithub} target="_blank">
              <button type="button" className="mx-1">
                <svg
                  className={`h-8 w-8 ${colorProp.textColor1}`}
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
        {props.data.beGithub && (
          <Tooltip title="BE Github" arrow>
            <Link href={props.data.beGithub} target="_blank">
              <button type="button" className="mx-1">
                <svg
                  className={`h-8 w-8 ${colorProp.textColor1}`}
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
