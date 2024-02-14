import React from "react";
import InfoBox from "./InfoBox";
import Heading from "./Heading";
import Link from "next/link";
import geekyants from "../images/geekyants.png";
import cognizant from "../images/cognizant.png";

const Education = ({ darkMode }: { darkMode: boolean }) => {
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
        btnTextColor: "text-black",
      }
    : {
        textColor1: "text-black",
        textColor2: "text-gray-950",
        buttonBgColor: "bg-slate-500",
        btnTextColor: "text-white",
      };

  return (
    <div className="w-full sm:w-4/6">
      <div className="w-full p-4">
        {/* Education Heading */}
        <div className="relative text-white">
          <div>
            <Heading
              textColor={colorProp.textColor1}
              title={"Education"}
              subtitle={"Education"}
              top={"top-0"}
              left={"left-0"}
            />
          </div>
        </div>
        {/* Education */}
        <div className="mt-10">
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
              className={`rounded-full ${colorProp.buttonBgColor}  p-3 text-base font-medium ${colorProp.btnTextColor}`}
            >
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
