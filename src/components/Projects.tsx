import React from "react";
import ProjectItem from "./ProjectItem";
import Heading from "./Heading";
import customercare from "../images/customercare.jpg";
import riddeapp from "../images/riddeapp.jpg";
import blogapp from "../images/blogapp.jpg";
import chatapp from "../images/chatapp.jpg";
import tmdb from "../images/tmdb.jpg";
import springboot from "../svg/springboot.svg";
import nodejs from "../svg/nodejs.svg";
import mongodb from "../svg/mongodb.svg";
import redis from "../svg/redis.svg";
import azure from "../svg/azure.svg";
import mysql from "../svg/mysql.svg";
import firebase from "../svg/firebase.svg";
import jwt from "../svg/jwt.svg";
import websocket from "../images/websocket.png";
import react from "../svg/react.svg";
import bootstrap from "../svg/bootstrap.svg";
import redux from "../svg/redux.svg";
import typescript from "../svg/typescript.svg";
import tailwind from "../svg/tailwind-css.svg";

const Projects = ({ darkMode }: { darkMode: boolean }) => {
  const projectData = [
    {
      id: 1,
      title: "Customer Care Application",
      image: customercare.src,
      description:
        "As a backend developer, I contributed to a project using Spring Boot and Node.js. My role involved implementing APIs for customer-agent interactions via calls and chats, focusing on call management, chat features, and statistical tracking. I also worked on a pub/sub model for efficient communication between system components.",
      techStack: [
        {
          id: 1,
          name: "Springboot",
          svg: springboot.src,
        },
        {
          id: 2,
          name: "NodeJS",
          svg: nodejs.src,
        },
        {
          id: 3,
          name: "MongoDB",
          svg: mongodb.src,
        },
        {
          id: 4,
          name: "Redis",
          svg: redis.src,
        },
        {
          id: 5,
          name: "Azur DevOps",
          svg: azure.src,
        },
      ],
    },
    {
      id: 2,
      title: "Ridde Application",
      image: riddeapp.src,
      description:
        "Developed the backend for a motorcycle taxi app, providing users with a hassle-free way to navigate city traffic. The app features Ride Now for instant bookings, Ride Later for scheduled rides, and Package Delivery for secure pickup and drop-offs.",
      live: "https://geekyants.com/customizable-app/build-custom-taxi-booking-app/",
      techStack: [
        {
          id: 1,
          name: "Springboot",
          svg: springboot.src,
        },
        {
          id: 2,
          name: "MySQL",
          svg: mysql.src,
        },
        {
          id: 3,
          name: "Firebase Cloud Messaging",
          svg: firebase.src,
        },
        {
          id: 4,
          name: "Json Web Token",
          svg: jwt.src,
        },
        {
          id: 5,
          name: "WebSocket",
          svg: websocket.src,
        },
      ],
    },
    {
      id: 3,
      title: "BlogVista",
      image: blogapp.src,
      description:
        "Developed a full-stack blog application using React, Redux, and Bootstrap for the frontend, complemented by a Spring Boot backend. The application incorporates key features like user authentication, blog creation, deletion, editing, publishing, unpublishing, and an efficient search function.",
      feGithub: "https://github.com/ArpitAkay/blogvista-react",
      beGithub: "https://github.com/ArpitAkay/blogvista-springboot",
      techStack: [
        {
          id: 1,
          name: "React",
          svg: react.src,
        },
        {
          id: 2,
          name: "Bootstrap",
          svg: bootstrap.src,
        },
        {
          id: 3,
          name: "Redux",
          svg: redux.src,
        },
        {
          id: 4,
          name: "Springboot",
          svg: springboot.src,
        },
        {
          id: 5,
          name: "MySQL",
          svg: mysql.src,
        },
      ],
    },
    {
      id: 4,
      title: "Chat Application",
      image: chatapp.src,
      description:
        "Built a full-stack chat application featuring React, Redux, and Material UI for the frontend, and Spring Boot for the backend. The application enables private user interactions using Stomp over WebSockets and SockJS.",
      feGithub: "https://github.com/ArpitAkay/chatapp-react",
      beGithub: "https://github.com/ArpitAkay/chatapp-springboot",
      techStack: [
        {
          id: 1,
          name: "React",
          svg: react.src,
        },
        {
          id: 2,
          name: "TypeScript",
          svg: typescript.src,
        },
        {
          id: 3,
          name: "Redux",
          svg: redux.src,
        },
        {
          id: 4,
          name: "Material UI",
          svg: "https://mui.com/static/logo.png",
        },
        {
          id: 5,
          name: "Springboot",
          svg: springboot.src,
        },
        {
          id: 6,
          name: "MySQL",
          svg: mysql.src,
        },
      ],
    },
    {
      id: 5,
      title: "The Movie Database",
      image: tmdb.src,
      description:
        "Developed frontend for a movie database using NextJS and TailwindCSS. The application fetches data from the TMDB API and displays it in a user-friendly manner. The application features a search function, popular movie and movie details",
      feGithub: "https://github.com/ArpitAkay/tmdb",
      live: "https://akay-tmdb.vercel.app/",
      techStack: [
        {
          id: 1,
          name: "NextJS",
          svg: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          id: 2,
          name: "TailwindCSS",
          svg: tailwind.src,
        },
      ],
    },
  ];

  const colorProp = darkMode
    ? {
        textColor1: "text-white",
        backgroundColor: "bg-slate-800",
        hoverBackgroundColor: "bg-slate-600",
      }
    : {
        textColor1: "text-black",
        backgroundColor: "bg-slate-300",
        hoverBackgroundColor: "bg-slate-500",
      };

  return (
    <div className="w-full sm:w-4/6">
      <div className="w-full p-4">
        <div>
          <Heading
            textColor={colorProp.textColor1}
            title={"Projects"}
            subtitle={"Projects"}
            top={"top-0"}
            left={"left-0"}
          />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:mt-16 2xl:grid-cols-3">
          {projectData.map((item) => {
            return (
              <ProjectItem key={item.id} darkMode={darkMode} data={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
