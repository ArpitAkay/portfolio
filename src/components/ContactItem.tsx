import React, { Children } from "react";
import contact from "../svg/contact.svg";
import address from "../svg/address.svg";
import email from "../svg/email.svg";
import download_resume from "../svg/download_resume.svg";
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
        color1: "text-white",
        color2: "text-gray-400",
        backgroundColor: "bg-slate-950",
      }
    : {
        color1: "text-black",
        color2: "text-gray-950",
        backgroundColor: "bg-slate-200",
      };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="hover:scale-104 h-20 w-20 rounded-full bg-slate-800 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:bg-slate-600 2xl:h-32 2xl:w-32">
        {props.children}
      </div>
      <div className={`mt-2 text-center ${colorProp.color1}`}>
        <p className="text-sm font-medium sm:text-base">{props.title}</p>
        {props.info === "Resume Link" && (
          <Link
            href={"/cv.pdf"}
            download={"MyCV.pdf"}
            target="_blank"
            className="cursor-pointer"
          >
            <p
              className={`mt-2 cursor-pointer text-sm ${colorProp.color2} underline`}
            >
              {props.info}
            </p>
          </Link>
        )}
        {props.info !== "Resume Link" && (
          <p className={`mt-2 text-sm  ${colorProp.color2}`}>{props.info}</p>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
