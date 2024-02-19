import React from "react";
import InfoBox from "./InfoBox";
import Heading from "./Heading";
import geekyants from "../images/geekyants.png";
import cognizant from "../images/cognizant.png";

const Experience = ({ darkMode }: { darkMode: boolean }) => {
  const experienceInfo = [
    {
      id: 1,
      logo: geekyants.src,
      time: "July, 2022 - Present",
      title: "Software Engineer",
      subTitle: "GeekyAnts",
      description:
        "Upon joining GeekyAnts, I played a key role in the development of the Ridde App - an internal project aimed at enhancing customer commuting within the city. Following this, I transitioned to a client engagement focused on the Customer Care App, where my responsibilities centered around the development of call and chat functionalities. Additionally, I actively participated in a research and development project, successfully creating an IVR menu using FreePBX and Asterisk.",
      points: [],
    },
    {
      id: 2,
      logo: cognizant.src,
      time: "March, 22 - June, 22",
      title: "Internship Trainee",
      subTitle: "Congizant",
      description:
        "During my internship at Cognizant as a DevOps Engineer, I gained valuable skills in Linux, Shell Scripting, Microsoft Azure, Jenkins, Git, Jira, Splunk, Maven, Ansible, CI/CD, and Azure DevOps. This experience greatly enhanced my expertise in DevOps practices, including automation, continuous integration, and cloud infrastructure management, positioning me for success in future roles within the field.",
      points: [],
    },
  ];

  const colorProp = darkMode
    ? {
        textColor1: "text-white",
        buttonBgColor: "bg-yellow-400",
      }
    : {
        textColor1: "text-black",
        buttonBgColor: "bg-slate-500",
      };

  return (
    <div className="w-full sm:w-4/6">
      <div className="w-full p-4">
        {/* Experience Heading */}
        <div>
          <Heading
            textColor={colorProp.textColor1}
            title={"Experience"}
            subtitle={"Experience"}
            top={"top-0"}
            left={"left-0"}
          />
        </div>
        {/* Experience */}
        <div className="mt-10 w-full 2xl:mt-16">
          <div className="mt-2 grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
            {experienceInfo.map((item) => {
              return <InfoBox key={item.id} darkMode={darkMode} info={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
