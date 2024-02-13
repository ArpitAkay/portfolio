"use client";

import React from "react";
import avatar from "../images/avatar.png";
import PercentageBar from "./PercentageBar";
import Link from "next/link";
import Heading from "./Heading";

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
      attribute: "BI Tools",
      value: "Microsoft Power BI, Looker, Tableau",
    },
    {
      id: 6,
      attribute: "Other Skills",
      value: "Cloud, PySpark, Excel, Git, JIRA, Google Analytics, SEO",
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
        color1: "text-white",
        color2: "text-gray-400",
        backgroundColor: "bg-slate-950",
      }
    : {
        color1: "text-black",
        color2: "text-gray-950",
        backgroundColor: "bg-slate-200",
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
        className={`grid grid-cols-1 gap-4 ${colorProp.color1} xl:grid-cols-2`}
      >
        <div className="p-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-2 2xl:grid-cols-3">
            <div className="flex flex-row items-center justify-center 2xl:col-span-1">
              <img
                alt="arpit kumar"
                src={avatar.src}
                className="h-48 w-48 rounded-full border-2 border-s-white bg-yellow-400"
              />
            </div>
            <div className="flex flex-row items-center justify-center p-2 2xl:col-span-2 2xl:text-2xl">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="text-lg font-bold">Name:</td>
                    <td className={`text-base ${colorProp.color2}`}>
                      Arpit Kumar
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg font-bold ">Job Role:</td>
                    <td className={`text-base ${colorProp.color2}`}>
                      Backend Developer
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg font-bold">Experience:</td>
                    <td className={`text-base ${colorProp.color2}`}>
                      1 Year 10 Months
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg font-bold">Address:</td>
                    <td className={`text-base ${colorProp.color2}`}>
                      Bengaluru, India
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* skills */}
          <div className={`mt-8 ${colorProp.color2}`}>
            <div>
              <p className="text-xl">Skills</p>
            </div>
            {skills.map((skill) => {
              return (
                <div className="mt-4 w-full p-2" key={skill.id}>
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
              textColor={colorProp.color1}
              title={"About Me"}
              titleSize={"text-5xl"}
              subtitle={"About"}
              subtitleSize={"text-8xl"}
              top={"-top-2"}
              left={"left-0"}
            />
          </div>
          <div className="mt-10">
            <p className={`text-base ${colorProp.color1}`}>
              I started my career as internship trainee as DevOps Engineer at
              cognizant where i got introduced to the world of cloud and
              infrastructure. During my tenure at cognizant, I got an tools and
              technologies like AWS, Azure, Jenkins, Docker, Kubernetes,
              Terraform, Ansible, Git, JIRA, Confluence, Splunk, ELK,
              Prometheus, Grafana, Nagios, New Relic, Dynatrace, AppDynamics,
              Datadog, Zabbix
            </p>
          </div>
          <div className="mt-8">
            <table className="w-full table-auto">
              <tbody>
                {profileInfo.map((info) => {
                  return (
                    <tr key={info.id}>
                      <td className="text-lg font-bold">{info.attribute}:</td>
                      <td className={`text-base ${colorProp.color2}`}>
                        {info.value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <div>
              <p className="text-lg">
                <span>{projectCount}</span>+ Projects Completed
              </p>
            </div>
            <div className="mt-2">
              <Link
                href={"https://www.linkedin.com/in/arpit-kumar-5a26201b4/"}
                target="_blank"
              >
                <button
                  className={`rounded-full bg-yellow-400 p-3 text-sm font-semibold ${colorProp.color1}`}
                >
                  LINKEDIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
