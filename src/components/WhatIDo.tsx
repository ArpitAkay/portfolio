import React from "react";
import javascript from "../svg/javascript.svg";
import typescript from "../svg/typescript.svg";
import react from "../svg/react.svg";
import tailwind from "../svg/tailwind-css.svg";
import bootstrap from "../svg/bootstrap.svg";
import redux from "../svg/redux.svg";
import java from "../svg/java.svg";
import springboot from "../svg/springboot.svg";
import graphql from "../svg/graphql.svg";
import mysql from "../svg/mysql.svg";
import mongodb from "../svg/mongodb.svg";
import redis from "../svg/redis.svg";
import git from "../svg/git.svg";
import gitlab from "../svg/gitlab.svg";
import github from "../svg/github-bg-slate.svg";
import docker from "../svg/docker.svg";
import kubernetes from "../svg/kubernetes.svg";
import azure from "../svg/azure.svg";
import Heading from "./Heading";
import SkillItem from "./SkillItem";

const WhatIDo = ({ darkMode }: { darkMode: boolean }) => {
  const techStack = [
    {
      id: 1,
      title: "Web Development",
      skillSvg: [
        {
          id: 1,
          name: "HTML/CSS",
          svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        },
        {
          id: 2,
          name: "JavaScript",
          svg: javascript.src,
        },
        {
          id: 3,
          name: "TypeScript",
          svg: typescript.src,
        },
        {
          id: 4,
          name: "React",
          svg: react.src,
        },
        {
          id: 5,
          name: "NextJS",
          svg: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          id: 6,
          name: "TailwindCSS",
          svg: tailwind.src,
        },
        {
          id: 7,
          name: "Material UI",
          svg: "https://mui.com/static/logo.png",
        },
        {
          id: 8,
          name: "Bootstrap",
          svg: bootstrap.src,
        },
        {
          id: 9,
          name: "Redux",
          svg: redux.src,
        },
      ],
      description: [
        {
          id: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 3,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 4,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 5,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      id: 2,
      title: "Backend & Infrastructure",
      skillSvg: [
        {
          id: 1,
          name: "Java",
          svg: java.src,
        },
        {
          id: 2,
          name: "Springboot",
          svg: springboot.src,
        },
        {
          id: 3,
          name: "RESTful",
          svg: "https://restfulapi.net/wp-content/uploads/cropped-rest.png",
        },
        {
          id: 4,
          name: "GraphQL",
          svg: graphql.src,
        },
        {
          id: 5,
          name: "RabbitMQ",
          svg: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
        },
        {
          id: 6,
          name: "Apache Kafka",
          svg: "https://logosandtypes.com/wp-content/uploads/2020/07/kafka.png",
        },
        {
          id: 7,
          name: "Junit",
          svg: "https://junit.org/junit5/assets/img/junit5-logo.png",
        },
        {
          id: 8,
          name: "Mockito",
          svg: "https://raw.githubusercontent.com/mockito/mockito.github.io/master/img/logo%402x.png",
        },
      ],
      description: [
        {
          id: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 3,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 4,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 5,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      id: 3,
      title: "Databases",
      skillSvg: [
        {
          id: 1,
          name: "MySQL",
          svg: mysql.src,
        },
        {
          id: 2,
          name: "MongoDB",
          svg: mongodb.src,
        },
        {
          id: 3,
          name: "Redis",
          svg: redis.src,
        },
      ],
      description: [
        {
          id: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 3,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 4,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 5,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      id: 4,
      title: "DevOps",
      skillSvg: [
        {
          id: 1,
          name: "Git",
          svg: git.src,
        },
        {
          id: 2,
          name: "Github",
          svg: github.src,
        },
        {
          id: 3,
          name: "Gitlab",
          svg: gitlab.src,
        },
        {
          id: 4,
          name: "Docker",
          svg: docker.src,
        },
        {
          id: 5,
          name: "Kubernetes",
          svg: kubernetes.src,
        },
        {
          id: 6,
          name: "Azure",
          svg: azure.src,
        },
      ],
      description: [
        {
          id: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 3,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 4,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 5,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
  ];

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

  return (
    <div className="w-full sm:w-4/6">
      <div className="p-4">
        <div className={`relative ${colorProp.color1}`}>
          <div>
            <Heading
              textColor={colorProp.color1}
              title={"What I Do"}
              titleSize={"text-5xl"}
              subtitle={"What I Do"}
              subtitleSize={"text-7xl"}
              top={"top-0"}
              left={"left-0"}
            />
          </div>
        </div>
        <div className="mt-8">
          <p className={colorProp.color2}>
            Passionate full-stack developer hungry for tech exploration.
          </p>
        </div>
        <div className="mt-4 grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
          {techStack.map((item) => {
            return (
              <SkillItem
                key={item.id}
                darkMode={darkMode}
                title={item.title}
                skillSvg={item.skillSvg}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
