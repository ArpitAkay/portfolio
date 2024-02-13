import React from "react";

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  const colorProp = darkMode
    ? {
        color: "text-white",
        backgroundColor: "bg-slate-950",
      }
    : {
        color: "text-black",
        backgroundColor: "bg-slate-200",
      };
  return (
    <div className={`flex w-full justify-center ${colorProp.backgroundColor}`}>
      <div className="w-full sm:w-4/6">
        <div>
          <div className={`my-4 text-center ${colorProp.color}`}>
            <p>Copyright &#169;2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
