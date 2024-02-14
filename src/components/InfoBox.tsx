import React from "react";
import Image, { StaticImageData } from "next/image";

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
        textColor1: "text-yellow-400",
        textColor2: "text-white",
        textColor3: "text-gray-400",
        backgroundColor: "bg-slate-800",
        hoverBackgroundColor: "bg-slate-600",
      }
    : {
        textColor1: "text-slate-500",
        textColor2: "text-black",
        textColor3: "text-gray-950",
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
            <Image
              src={props.info.logo.src}
              width={56}
              height={56}
              style={{ borderRadius: "100%" }}
              alt={props.info.subTitle}
            />
          </div>
        )}
        <div className={`flex flex-col ${props.info.logo ? "ms-4" : ""}`}>
          <div className={`my-1 ${colorProp.textColor1}`}>
            <h3 className="text-lg font-extrabold sm:text-2xl 2xl:text-3xl">
              {props.info.time}
            </h3>
          </div>
          <div className={`sm:my-1 ${colorProp.textColor1}`}>
            <h4 className="text-lg sm:text-2xl 2xl:text-3xl">
              {props.info.title}
            </h4>
          </div>
        </div>
      </div>
      <div>
        <h5
          className={`mt-2 text-sm lg:text-lg 2xl:text-2xl ${colorProp.textColor3}`}
        >
          {props.info.subTitle}
        </h5>
      </div>
      <div
        className={`mt-2 ${colorProp.textColor3} text-sm lg:text-lg 2xl:text-2xl`}
      >
        <p>{props.info.description}</p>
      </div>
      {props.info.points.length !== 0 && (
        <div className={`mt-4 ps-4 ${colorProp.textColor3}`}>
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
