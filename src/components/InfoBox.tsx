import React from "react";
import geekyants from "../images/geekyants.png";
import { StaticImageData } from "next/image";

interface Point {
  id: number;
  text: string;
}

interface InfoBoxProps {
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
  return (
    <div className="hover:scale-104 rounded-md bg-slate-800  p-3 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:bg-slate-600">
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
          <div className="my-1 text-white">
            <h4 className="text-lg sm:text-2xl">{props.info.title}</h4>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-1xl text-gray-400">{props.info.subTitle}</h5>
      </div>
      <div className="mt-4 text-gray-400">
        <p>{props.info.description}</p>
      </div>
      {props.info.points.length !== 0 && (
        <div className="mt-4 ps-4 text-gray-400">
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
