import React from "react";
import ProjectItem from "./ProjectItem";
import Heading from "./Heading";
import customercare from "../images/customercare.jpg";
import riddeapp from "../images/riddeapp.jpg";
import blogapp from "../images/blogapp.webp";
import chatapp from "../images/chatapp.png";
import tmdb from "../images/tmdb.png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Customer Care Application",
      image: customercare.src,
      description:
        "As a backend developer, I contributed to a project using Spring Boot and Node.js. My role involved implementing APIs for customer-agent interactions via calls and chats, focusing on call management, chat features, and statistical tracking. I also worked on a pub/sub model for efficient communication between system components.",
    },
    {
      id: 2,
      title: "Ridde Application",
      image: riddeapp.src,
      description:
        "Developed the backend for a motorcycle taxi app, providing users with a hassle-free way to navigate city traffic. The app features Ride Now for instant bookings, Ride Later for scheduled rides, and Package Delivery for secure pickup and drop-offs.",
      live: "https://geekyants.com/customizable-app/build-custom-taxi-booking-app/",
    },
    {
      id: 3,
      title: "BlogVista",
      image: blogapp.src,
      description:
        "Developed a full-stack blog application using React, Redux, and Bootstrap for the frontend, complemented by a Spring Boot backend. The application incorporates key features like user authentication, blog creation, deletion, editing, publishing, unpublishing, and an efficient search function.",
      frontend: "https://github.com/ArpitAkay/blogvista-react",
      backend: "https://github.com/ArpitAkay/blogvista-springboot",
    },
    {
      id: 4,
      title: "Chat Application",
      image: chatapp.src,
      description:
        "Built a full-stack chat application featuring React, Redux, and Material UI for the frontend, and Spring Boot for the backend. The application enables private user interactions using Stomp over WebSockets and SockJS.",
      frontend: "https://github.com/ArpitAkay/chatapp-react",
      backend: "https://github.com/ArpitAkay/chatapp-springboot",
    },
    {
      id: 5,
      title: "The Movie Database",
      image: tmdb.src,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptasperspiciatis laudantium nobis pariatur expedita laboriosam dolores repellendus accusantium similique atque.",
      frontend: "https://github.com/ArpitAkay/tmdb",
      live: "https://tmdb-weld.vercel.app/",
    },
  ];

  return (
    <div className="w-full sm:w-4/6">
      <div className="w-full p-4">
        <div>
          <Heading
            title={"Projects"}
            titleSize={"text-5xl"}
            subtitle={"Projects"}
            subtitleSize={"text-7xl"}
            top={"top-0"}
            left={"left-0"}
          />
        </div>
        <div className="mt-24 grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
          {projectData.map((item) => {
            return <ProjectItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
