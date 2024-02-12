import Image from "next/image";
import Link from "next/link";
import React from "react";

interface projectItemProps {
  data: {
    id: number;
    title: string;
    image: string;
    description: string;
    frontend?: string;
    backend?: string;
    live?: string;
  };
}

const ProjectItem = (props: projectItemProps) => {
  return (
    <div className="hover:scale-104 flex flex-col rounded-md bg-slate-800 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:bg-slate-600">
      <div>
        <div className="relative h-72">
          <Image src={props.data.image} alt="project" fill={true} />
        </div>
        <div className="my-4 flex flex-col p-2 ">
          <h3 className="text-2xl font-medium text-white">
            {props.data.title}
          </h3>
          <p className="mt-2 text-gray-400">{props.data.description}</p>
        </div>
      </div>
      <div className="mt-auto flex flex-row justify-end p-2">
        {props.data.live && (
          <Link
            href={props.data.live}
            target="_blank"
            className="mx-2 rounded-sm bg-slate-700 px-2 py-1 text-white"
          >
            <button type="button">Live</button>
          </Link>
        )}
        {props.data.frontend && (
          <Link
            href={props.data.frontend}
            target="_blank"
            className="mx-2 rounded-sm bg-slate-700 px-2 py-1 text-white"
          >
            <button type="button">Frontend</button>
          </Link>
        )}
        {props.data.backend && (
          <Link
            href={props.data.backend}
            target="_blank"
            className="mx-2 rounded-sm bg-slate-700 px-2 py-1 text-white"
          >
            <button type="button">Backend</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
