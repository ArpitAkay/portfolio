"use client";

import React from "react";
import avatar from "../images/avatar.png";
import PercentageBar from "./PercentageBar";
import Link from "next/link";
import Heading from "./Heading";
import Image from "next/image";
import linkedin from "../svg/linkedin.svg";

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

  const [projectCount, setProjectCount] = React.useState(1);
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

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    const increaseProjectCount = () => {
      timeout = setTimeout(() => {
        if (projectCount < 10) {
          setProjectCount((prevCount) => prevCount + 1);
          increaseProjectCount(); // Call the function recursively
        }
      }, 500);
    };

    increaseProjectCount();

    return () => {
      clearTimeout(timeout);
    };
  }, [projectCount]);

  return (
    <div className="w-full sm:w-4/6">
      <div
        className={`grid grid-cols-1 gap-4 ${colorProp.textColor1} xl:grid-cols-2`}
      >
        <div className="p-4">
          <div className="grid grid-cols-1 gap-2 2xl:grid-cols-3">
            <div className="flex flex-row items-center justify-center">
              <Image
                alt="arpit kumar"
                src={avatar.src}
                width={200}
                height={200}
                className={`rounded-full border-2 border-s-white ${colorProp.avatarBgColor}`}
              />
            </div>
            <div className="flex flex-row items-center justify-center p-2 2xl:col-span-2 2xl:justify-start">
              <table className="table-auto text-sm lg:text-lg 2xl:text-xl">
                <tbody>
                  <tr>
                    <td className="font-bold">Name:</td>
                    <td className={colorProp.textColor2}>Arpit Kumar</td>
                  </tr>
                  <tr>
                    <td className="font-bold ">Job Role:</td>
                    <td className={colorProp.textColor2}>Backend Developer</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Experience:</td>
                    <td className={colorProp.textColor2}>1 Year 10 Months</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Address:</td>
                    <td className={colorProp.textColor2}>Bengaluru, India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* skills */}
          <div className={`mt-2 ${colorProp.textColor2}`}>
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
              className={`text-sm lg:text-lg 2xl:text-xl ${colorProp.textColor1} text-justify`}
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
            <table className="w-full table-auto text-sm lg:text-lg 2xl:text-xl">
              <tbody>
                {profileInfo.map((info) => {
                  return (
                    <tr key={info.id}>
                      <td className="font-bold">{info.attribute}:</td>
                      <td className={colorProp.textColor2}>{info.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link
              href={"https://www.linkedin.com/in/arpit-kumar-5a26201b4/"}
              target="_blank"
            >
              <Image src={linkedin.src} alt="linkedin" width={50} height={50} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
