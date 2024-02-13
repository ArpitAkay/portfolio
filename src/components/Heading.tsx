import React from "react";

interface HeadingProps {
  textColor: string;
  title: string;
  titleSize: string;
  subtitle: string;
  subtitleSize: string;
  top: string;
  left: string;
}

const Heading = (props: HeadingProps) => {
  return (
    <div className={`relative ${props.textColor}`}>
      <h1 className={`${props.titleSize} font-extrabold`}>{props.title}</h1>
      <h1
        className={`absolute ${props.top} ${props.left} ${props.subtitleSize} font-extrabold opacity-10`}
      >
        {props.subtitle}
      </h1>
    </div>
  );
};

export default Heading;
