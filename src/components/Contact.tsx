import React from "react";
import Heading from "./Heading";
import ContactItem from "./ContactItem";
import github_bg_slate from "../svg/github-bg-slate.svg";
import github_bg_white from "../svg/github-bg-white.svg";
import linkedin from "../svg/linkedin.svg";
import twitter from "../svg/twitterx.svg";
import instagram from "../svg/instagram.svg";
import facebook from "../svg/facebook.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  const socialMedia = [
    {
      id: 1,
      name: "github",
      link: "https://github.com/ArpitAkay",
      svg: darkMode ? github_bg_slate.src : github_bg_white.src,
    },
    {
      id: 2,
      name: "linkedin",
      link: "https://www.linkedin.com/in/arpit-kumar-5a26201b4/",
      svg: linkedin.src,
    },
    {
      id: 3,
      name: "twitter",
      link: "https://twitter.com/arpit_noob31",
      svg: twitter.src,
    },
    {
      id: 4,
      name: "instagram",
      link: "https://www.instagram.com/arpit_noob31/",
      svg: instagram.src,
    },
    {
      id: 5,
      name: "facebook",
      link: "https://www.facebook.com/arpitkumar4000/",
      svg: facebook.src,
    },
  ];

  const colorProp = darkMode
    ? {
        textColor1: "text-white",
        textColor2: "text-gray-400",

        btnBgColor: "bg-yellow-400",
        btnTextColor: "text-white",
      }
    : {
        textColor1: "text-black",
        textColor2: "text-gray-950",
        btnBgColor: "bg-slate-500",
        btnTextColor: "text-white",
      };

  return (
    <div className={`${colorProp.textColor1} w-full sm:w-4/6`}>
      <div className="p-4">
        <div>
          <Heading
            textColor={colorProp.textColor1}
            title={"Contact Me"}
            subtitle={"Contact"}
            top={"top-0"}
            left={"left-0"}
          />
        </div>
        <div className="mt-6">
          <p className="text-sm lg:text-lg 2xl:text-2xl">
            Below are the details to reach out to me! &#128515;
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ContactItem
              darkMode={darkMode}
              title={"ADDRESS"}
              info={"Bengaluru, India"}
            >
              <svg
                className="h-full w-full p-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </ContactItem>
            <ContactItem
              darkMode={darkMode}
              title={"CONTACT NUMBER"}
              info={"+916397473077"}
            >
              <svg
                className="h-full w-full p-4 text-white"
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
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </ContactItem>
            <ContactItem
              darkMode={darkMode}
              title={"EMAIL ADDRESS"}
              info={"arpitkumar4000@gmail.com"}
            >
              <svg
                className="h-full w-full p-4 text-white"
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
                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />{" "}
                <line x1="8" y1="9" x2="16" y2="9" />{" "}
                <line x1="8" y1="13" x2="14" y2="13" />
              </svg>
            </ContactItem>
            <ContactItem
              darkMode={darkMode}
              title={"DOWNLOAD RESUME"}
              info={"Resume Link"}
            >
              <svg
                className=" h-full w-full p-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
            </ContactItem>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex flex-col justify-center sm:flex-row">
            <div className="flex flex-col items-center sm:flex-row">
              <h4 className="my-2 me-4 text-3xl font-light">
                Have a question?
              </h4>
              <button
                className={`my-2 rounded-full ${colorProp.btnBgColor} ${colorProp.btnTextColor} px-3 py-2 font-medium`}
              >
                Ask Me
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-row justify-center">
            <div className="me-2 flex flex-row items-center">
              <p
                className={`text-xs ${colorProp.textColor2} lg:text-lg xl:text-xl 2xl:text-2xl`}
              >
                Find me on
              </p>
            </div>
            <div className="flex flex-row">
              {socialMedia.map((item) => {
                return (
                  <div
                    className="transform transition duration-200 ease-in-out hover:scale-125"
                    key={item.id}
                  >
                    <Link href={item.link} target="_blank">
                      <Image
                        width={50}
                        height={50}
                        src={item.svg}
                        alt={item.name}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
