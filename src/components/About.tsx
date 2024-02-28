"use client";

import React from "react";
import avatar from "../images/avatar.png";
import PercentageBar from "./PercentageBar";
import Link from "next/link";
import Heading from "./Heading";
import Image from "next/image";
import github_bg_slate from "../svg/github-bg-slate.svg";
import github_bg_white from "../svg/github-bg-white.svg";
import linkedin from "../svg/linkedin.svg";
import twitter from "../svg/twitterx.svg";
import instagram from "../svg/instagram.svg";
import facebook from "../svg/facebook.svg";

const About = ({ darkMode }: { darkMode: boolean }) => {
  const skills = [
    {
      id: 1,
      name: "Frontend",
      percent: 55,
    },
    {
      id: 2,
      name: "Backend",
      percent: 85,
    },
    {
      id: 3,
      name: "Programming",
      percent: 80,
    },
    {
      id: 4,
      name: "DevOps",
      percent: 20,
    },
  ];

  function getDate(): string {
    const currentDate = new Date();
    const compareDate = new Date("2022-06-27");
    let diffMonth = currentDate.getMonth() + 1 - compareDate.getMonth() + 1;
    let diffYear = currentDate.getFullYear() - compareDate.getFullYear();

    if (diffMonth < 0) {
      diffMonth += 12;
      diffYear--;
    }

    return `${diffYear} ${diffYear > 1 ? "Years" : "Year"} ${diffMonth} ${diffMonth > 1 ? "Months" : "Month"}`;
  }

  const userInfo = [
    {
      id: 1,
      attribute: "Name",
      value: "Arpit Kumar",
    },
    {
      id: 2,
      attribute: "Job Role",
      value: "Backend Developer",
    },
    {
      id: 3,
      attribute: "Experience",
      value: getDate(),
    },
    {
      id: 4,
      attribute: "Address",
      value: "Bengaluru, India",
    },
  ];

  const profileInfo = [
    {
      id: 1,
      attribute: "Profile",
      value: "Software Engineer",
    },
    {
      id: 2,
      attribute: "Domain",
      value: "Web Development",
    },
    {
      id: 3,
      attribute: "Education",
      value: "Bachelor of Engineering",
    },
    {
      id: 4,
      attribute: "Language",
      value: "English, Hindi",
    },
    {
      id: 5,
      attribute: "Frontend",
      value: "React, Next.js",
    },
    {
      id: 6,
      attribute: "Backend",
      value: "Java, Spring Boot",
    },
    {
      id: 7,
      attribute: "Interest",
      value: "FullStack Development, Coding, Cricket, Football & Table Tennis",
    },
  ];

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
        avatarBgColor: "bg-yellow-400",
      }
    : {
        textColor1: "text-black",
        textColor2: "text-gray-950",
        avatarBgColor: "bg-slate-500",
      };

  return (
    <div className="w-full sm:w-4/6">
      <div className={`grid grid-cols-1 gap-4 xl:grid-cols-2`}>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-2 2xl:grid-cols-3">
            <div className="flex flex-row items-center justify-center">
              <Image
                alt="arpit kumar"
                src={avatar.src}
                width={200}
                height={200}
                className={`rounded-full border-2 border-s-white ${colorProp.avatarBgColor} transition-colors`}
              />
            </div>
            <div className="flex flex-row items-center justify-center p-2 2xl:col-span-2 2xl:justify-start">
              <table className="table-auto border-separate border-spacing-x-2 text-sm lg:text-lg 2xl:border-spacing-x-1 2xl:text-xl">
                <tbody>
                  {userInfo.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td
                          className={`flex justify-start font-bold ${colorProp.textColor1} transition-colors`}
                        >
                          {item.attribute}:
                        </td>
                        <td
                          className={`${colorProp.textColor2} transition-colors`}
                        >
                          {item.value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* skills */}
          <div className={`mt-2 ${colorProp.textColor2} transition-colors`}>
            <div>
              <p className="text-xl 2xl:text-2xl">Skills</p>
            </div>
            {skills.map((skill) => {
              return (
                <div className="w-full p-2" key={skill.id}>
                  <PercentageBar
                    percentage={skill.percent}
                    skill={skill.name}
                    color="bg-yellow-400"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-4">
          {/* About Heading */}
          <div>
            <Heading
              textColor={colorProp.textColor1}
              title={"About Me"}
              subtitle={"About"}
              top={"top-0"}
              left={"left-0"}
            />
          </div>
          <div className="mt-8 2xl:mt-12">
            <p
              className={`text-sm lg:text-lg 2xl:text-xl ${colorProp.textColor1} transition-colors`}
            >
              I’m a backend developer specializing in Java and Spring Boot. I
              excel in building REST and GraphQL APIs, emphasizing efficient
              database design and secure implementations for seamless
              functionality and optimal performance. Additionally, I have
              frontend development experience with React and Next.js. I am
              passionate about learning new technologies and frameworks, and I
              am always eager to take on new challenges.
            </p>
          </div>
          <div className="mt-4">
            <table className="w-full table-auto border-separate border-spacing-x-2 text-sm lg:text-lg 2xl:border-spacing-x-1 2xl:text-xl">
              <tbody>
                {profileInfo.map((info) => {
                  return (
                    <tr key={info.id}>
                      <td
                        className={`flex justify-start font-bold ${colorProp.textColor1} transition-colors`}
                      >
                        {info.attribute}:
                      </td>
                      <td
                        className={`${colorProp.textColor2} transition-colors`}
                      >
                        {info.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <div className="flex flex-row">
              {socialMedia.map((item) => {
                return (
                  <div
                    className="mx-1 transform transition duration-200 ease-in-out hover:scale-125"
                    key={item.id}
                  >
                    <Link href={item.link} target="_blank">
                      <Image
                        width={40}
                        height={40}
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

export default About;
