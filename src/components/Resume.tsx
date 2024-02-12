import React from "react";
import InfoBox from "./InfoBox";
import Heading from "./Heading";
import Link from "next/link";
import geekyants from "../images/geekyants.png";
import cognizant from "../images/cognizant.png";

const Resume = () => {
  const experienceInfo = [
    {
      id: 1,
      logo: geekyants,
      time: "July, 2022 - Present",
      title: "Software Engineer",
      subTitle: "GeekyAnts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rerum praesentium fuga dolorum alias distinctio voluptates placeat sit porro mollitia.",
      points: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, neque?",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, neque?",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, neque?",
        },
        {
          id: 4,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, neque?",
        },
      ],
    },
    {
      id: 2,
      logo: cognizant,
      time: "March, 2022 - June, 2022",
      title: "Internship Trainee",
      subTitle: "Congizant",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rerum praesentium fuga dolorum alias distinctio voluptates placeat sit porro mollitia.",
      points: [
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, neque?",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, neque?",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, neque?",
        },
        {
          id: 4,
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, neque?",
        },
      ],
    },
  ];

  const educationInfo = [
    {
      id: 1,
      time: "2018-2022",
      title: "Bachelor of Technology (Computer Science and Engineering)",
      subTitle: "Graphic Era University, Dehradun Uttarakhand",
      description: "Grade : 9.05 CGPA",
      points: [],
    },
    {
      id: 2,
      time: "2017-2018",
      title: "Senior Secondary Education (Science)",
      subTitle: "Maria Assumpta Senior Secondary School",
      description: "Grade : 92.2 Percentage",
      points: [],
    },
    {
      id: 3,
      time: "2015-2016",
      title: "Secondary Education",
      subTitle: "Maria Assumpta Senior Secondary School",
      description: "Grade : 8.6 CGPA",
      points: [],
    },
  ];

  return (
    <div className="w-full sm:w-4/6">
      <div className="w-full p-4">
        {/* Resume Heading */}
        <div className="relative text-white">
          <div>
            <Heading
              title={"Resume"}
              titleSize={"text-5xl"}
              subtitle={"Resume"}
              subtitleSize={"text-7xl"}
              top={"top-0"}
              left={"left-0"}
            />
          </div>
        </div>
        <div className="mt-6 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eum optio libero delectus sit, cupiditate qui laudantium unde
            provident et nihil sed debitis nemo vitae quam exercitationem
            molestiae natus ipsam. Nulla officiis tempore quisquam obcaecati
            adipisci non delectus deserunt consectetur?
          </p>
        </div>
        {/* Experience */}
        <div className="mt-12 w-full">
          <div className="text-white">
            <h4 className="text-3xl font-bold">Experience</h4>
          </div>
          <div className="mt-2 grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
            {experienceInfo.map((item) => {
              return <InfoBox key={item.id} info={item} />;
            })}
          </div>
        </div>
        {/* Education */}
        <div className="mt-12">
          <div className="text-white">
            <h4 className="text-3xl font-bold">Education</h4>
          </div>
          <div className="mt-2 grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
            {educationInfo.map((item) => {
              return <InfoBox key={item.id} info={item} />;
            })}
          </div>
        </div>
        <div className="mt-20 flex flex-row justify-center">
          <Link href={"/cv.pdf"} download={"MyCV.pdf"} target="_blank">
            <button
              type="button"
              className="rounded-full bg-yellow-400 p-3 text-base font-medium"
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
