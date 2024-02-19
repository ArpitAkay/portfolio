import React from "react";

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  const colorProp = darkMode
    ? {
        textColor: "text-white",
        bgColor: "bg-slate-950",
      }
    : {
        textColor: "text-black",
        bgColor: "bg-slate-200",
      };
  return (
    <div
      className={`flex w-full justify-center ${colorProp.bgColor} transition-colors`}
    >
      <div className="w-full sm:w-4/6">
        <div>
          <div
            className={`my-4 text-center ${colorProp.textColor} transition-colors`}
          >
            <p>Copyright &#169;2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
