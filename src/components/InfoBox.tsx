import React from "react";
import geekyants from "../images/geekyants.png";
import { StaticImageData } from "next/image";

interface Point {
  id: number;
  text: string;
}

interface InfoBoxProps {
  darkMode: boolean;
  info: {
    id: number;
    logo?: StaticImageData;
    time: string;
    title: string;
    subTitle: string;
    description: string;
    points: Point[];
  };
}

const InfoBox = (props: InfoBoxProps) => {
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
      className={`hover:scale-104 rounded-md ${colorProp.backgroundColor} p-3 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:${colorProp.hoverBackgroundColor}`}
    >
      <div className="flex flex-row">
        {props.info.logo && (
          <div className="mt-2">
            <img
              src={props.info.logo.src}
              className="h-14 w-14 rounded-full"
              alt="geekyants"
            />
          </div>
        )}
        <div className={`flex flex-col ${props.info.logo ? "ms-4" : ""}`}>
          <div className="my-1 text-yellow-400">
            <h3 className="text-lg font-extrabold sm:text-2xl">
              {props.info.time}
            </h3>
          </div>
          <div className={`my-1 ${colorProp.color1}`}>
            <h4 className="text-lg sm:text-2xl">{props.info.title}</h4>
          </div>
        </div>
      </div>
      <div>
        <h5 className={`text-1xl ${colorProp.color2}`}>
          {props.info.subTitle}
        </h5>
      </div>
      <div className={`mt-4 ${colorProp.color2}`}>
        <p>{props.info.description}</p>
      </div>
      {props.info.points.length !== 0 && (
        <div className={`mt-4 ps-4 ${colorProp.color2}`}>
          <ol className="list-inside list-disc">
            {props.info.points.map((point) => {
              return (
                <li className="my-1" key={point.id}>
                  {point.text}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
