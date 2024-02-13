import React from "react";

interface HeadingProps {
  textColor: string;
  title: string;
  subtitle: string;
  top: string;
  left: string;
}

const Heading = (props: HeadingProps) => {
  return (
    <div className={`relative ${props.textColor}`}>
      <h1 className={`text-3xl font-extrabold md:text-4xl 2xl:text-5xl`}>
        {props.title}
      </h1>
      <h1
        className={`absolute ${props.top} ${props.left} text-6xl font-extrabold opacity-10 md:text-7xl 2xl:text-8xl`}
      >
        {props.subtitle}
      </h1>
    </div>
  );
};

export default Heading;
