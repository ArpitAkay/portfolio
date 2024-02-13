import React from "react";
import InfoBox from "./InfoBox";
import Heading from "./Heading";
import Link from "next/link";
import geekyants from "../images/geekyants.png";
import cognizant from "../images/cognizant.png";

const Resume = ({ darkMode }: { darkMode: boolean }) => {
  const experienceInfo = [
    {
      id: 1,
      logo: geekyants,
      time: "July, 2022 - Present",
      title: "Software Engineer",
      subTitle: "GeekyAnts",
      description:
        "Upon joining GeekyAnts, I played a key role in the development of the Ridde App - an internal project aimed at enhancing customer commuting within the city. Following this, I transitioned to a client engagement focused on the Customer Care App, where my responsibilities centered around the development of call and chat functionalities. Additionally, I actively participated in a research and development project, successfully creating an IVR menu using FreePBX and Asterisk.",
      points: [],
    },
    {
      id: 2,
      logo: cognizant,
      time: "March, 22 - June, 22",
      title: "Internship Trainee",
      subTitle: "Congizant",
      description:
        "During my internship at Cognizant as a DevOps Engineer, I gained valuable skills in Linux, Shell Scripting, Microsoft Azure, Jenkins, Git, Jira, Splunk, Maven, Ansible, CI/CD, and Azure DevOps. This experience greatly enhanced my expertise in DevOps practices, including automation, continuous integration, and cloud infrastructure management, positioning me for success in future roles within the field.",
      points: [],
    },
  ];

  const educationInfo = [
    {
      id: 1,
      time: "2018-2022",
      title: "Bachelor of Technology",
      subTitle: "Graphic Era University, Dehradun Uttarakhand",
      subTitleLink: "https://www.geu.ac.in/",
      description: "Grade : 9.05 CGPA",
      points: [],
    },
    {
      id: 2,
      time: "2017-2018",
      title: "Senior Secondary Education",
      subTitle: "Maria Assumpta Senior Secondary School",
      subTitleLink: "https://mariaschoolkashipur.org/",
      description: "Grade : 92.2 Percentage",
      points: [],
    },
    {
      id: 3,
      time: "2015-2016",
      title: "Secondary Education",
      subTitle: "Maria Assumpta Senior Secondary School",
      subTitleLink: "https://mariaschoolkashipur.org/",
      description: "Grade : 8.6 CGPA",
      points: [],
    },
  ];

  const colorProp = darkMode
    ? {
        textColor1: "text-white",
        textColor2: "text-gray-400",
        buttonBgColor: "bg-yellow-400",
      }
    : {
        textColor1: "text-black",
        textColor2: "text-gray-950",
        buttonBgColor: "bg-slate-500",
      };

  return (
    <div className="w-full sm:w-4/6">
      <div className="w-full p-4">
        {/* Resume Heading */}
        <div className="relative text-white">
          <div>
            <Heading
              textColor={colorProp.textColor1}
              title={"Resume"}
              subtitle={"Resume"}
              top={"top-0"}
              left={"left-0"}
            />
          </div>
        </div>
        <div className={`mt-6 xl:mt-8 2xl:mt-12 ${colorProp.textColor2}`}>
          <p>
            I am a passionate and innovative software engineer with a strong
            foundation in computer science and a keen interest in web
            development. My expertise lies in full-stack development, with
            proficiency in technologies such as React, Redux, Node.js, Express,
            and MongoDB. I am adept at collaborating with cross-functional teams
            to deliver high-quality, user-centric solutions, and I am committed
            to continuous learning and growth. I am currently seeking
            opportunities to leverage my skills and experience in a dynamic
            environment that fosters creativity and innovation.
          </p>
        </div>
        {/* Experience */}
        <div className="mt-8 w-full">
          <div className={colorProp.textColor1}>
            <h4 className="text-3xl font-bold">Experience</h4>
          </div>
          <div className="mt-2 grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
            {experienceInfo.map((item) => {
              return <InfoBox key={item.id} darkMode={darkMode} info={item} />;
            })}
          </div>
        </div>
        {/* Education */}
        <div className="mt-8">
          <div className={colorProp.textColor1}>
            <h4 className="text-3xl font-bold">Education</h4>
          </div>
          <div className="mt-2 grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
            {educationInfo.map((item) => {
              return <InfoBox key={item.id} darkMode={darkMode} info={item} />;
            })}
          </div>
        </div>
        <div className="mt-6 flex flex-row justify-center">
          <Link href={"/cv.pdf"} download={"MyCV.pdf"} target="_blank">
            <button
              type="button"
              className={`rounded-full ${colorProp.buttonBgColor} ${colorProp.textColor1} p-3 text-base font-medium ${colorProp.textColor1}`}
            >
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
