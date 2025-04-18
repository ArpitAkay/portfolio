import React from "react";
import Link from "next/link";

interface ContactItemProps {
  darkMode: boolean;
  title: string;
  info: string;
  children: React.ReactNode;
}

const ContactItem = (props: ContactItemProps) => {
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
        bgColor: "bg-slate-500",
        hoverBgColor: "bg-slate-50",
      };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`hover:scale-104 h-14 w-14 rounded-full sm:h-20 sm:w-20 ${colorProp.bgColor}  transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:${colorProp.hoverBgColor} transition-colors 2xl:h-32 2xl:w-32`}
      >
        {props.children}
      </div>
      <div
        className={`mt-2 text-center ${colorProp.textColor1} transition-colors`}
      >
        <p className="text-sm font-medium sm:text-base">{props.title}</p>
        {props.info === "Resume Link" && (
          <Link
            href={"/cv.pdf"}
            download={"MyCV.pdf"}
            target="_blank"
            className="cursor-pointer"
          >
            <p
              className={`mt-2 cursor-pointer text-xs sm:text-sm 2xl:text-base ${colorProp.textColor2} underline transition-colors`}
            >
              {props.info}
            </p>
          </Link>
        )}
        {props.info !== "Resume Link" && (
          <p
            className={`mt-2 text-xs sm:text-sm 2xl:text-base ${colorProp.textColor2} transition-colors`}
          >
            {props.info}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
