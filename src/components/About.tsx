import { Avatar } from "@mui/material";
import React from "react";
import avatar from "../images/avatar.png";
import { yellow } from "@mui/material/colors";
import PercentageBar from "./PercentageBar";

const About = () => {
  const skills = [
    {
      id: 1,
      name: "Frontend",
      percent: 65,
    },
    {
      id: 2,
      name: "Backend",
      percent: 90,
    },
    {
      id: 3,
      name: "DevOps",
      percent: 30,
    },
  ];

  const profileInfo = [
    { id: 1, attribute: "Profile", value: "Software Engineer" },
    {
      id: 2,
      attribute: "Domain",
      value: "Retail, Ecommerce, BFSI & Digital Marketing",
    },
    { id: 3, attribute: "Education", value: "Bachelor of Engineering" },
    { id: 4, attribute: "Language", value: "English, Hindi" },
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
      value:
        "FullStack Development, Coding, Cricket, Football and Table Tennis",
    },
  ];

  return (
    <div className="w-full sm:w-4/6">
      <div className="grid grid-cols-1 gap-4 text-white xl:grid-cols-2">
        <div className="p-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-2 2xl:grid-cols-3">
            <div className="flex flex-row items-center justify-center 2xl:col-span-1">
              <Avatar
                alt="arpit kumar"
                src={avatar.src}
                sx={{
                  width: 180,
                  height: 180,
                  border: "2px solid white",
                  backgroundColor: yellow[700],
                }}
              />
            </div>
            <div className="flex flex-row items-center justify-center p-2 text-gray-400 2xl:col-span-2 2xl:text-2xl">
              <div>
                <p className="my-1">{`Name : ${"Arpit Kumar"}`}</p>
                <p className="my-1">{`Job Role : ${"Backend Developer"}`}</p>
                <p className="my-1">{`Experience : ${"1 Year 10 Months"}`}</p>
                <p className="my-1">{`Address : ${"Bengaluru, India"}`}</p>
              </div>
            </div>
          </div>
          {/* skills */}
          <div className="text-gray-400">
            <div>
              <p className="text-xl">Skills</p>
            </div>
            {skills.map((skill) => {
              return (
                <div className="mt-4 w-full">
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
          <div>
            <h1 className="text-5xl">About Me</h1>
          </div>
          <div className="mt-8">
            <p className="text-base text-gray-400">
              With over 5 years of comprehensive experience in the field of data
              science & analytics, accompanied by a bachelor's degree in
              engineering. Proficient in data analysis, statistical analysis,
              hypothesis testing, customer behaviour analysis, & machine
              learning. Demonstrated success in leading impactful projects and
              providing effective mentorship.
            </p>
          </div>
          <div className="mt-8">
            <table className="w-full table-auto">
              <tbody>
                {profileInfo.map((info) => {
                  return (
                    <tr key={info.id}>
                      <td className="text-lg font-bold">{info.attribute}:</td>
                      <td className="text-base text-gray-400">{info.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
