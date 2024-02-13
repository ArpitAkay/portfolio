"use client";

import Link from "next/link";
import React from "react";

const HomePage = ({ darkMode }: { darkMode: boolean }) => {
  const [text, setText] = React.useState("");
  const originalText = "Arpit Kumar";

  const colorProp = darkMode
    ? {
        textColor1: "text-white",
        textColor2: "text-yellow-400",
        backgroundColor: "bg-slate-950",
        borderColor: "border-white",
      }
    : {
        textColor1: "text-black",
        textColor2: "text-slate-500",
        backgroundColor: "bg-slate-200",
        borderColor: "border-black",
      };

  React.useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const revealNextCharacter = () => {
      setText(originalText.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex <= originalText.length) {
        timeout = setTimeout(revealNextCharacter, 100);
      } else {
        setTimeout(() => {
          setText("");
          currentIndex = 0;
          revealNextCharacter();
        }, 2000);
      }
    };

    revealNextCharacter();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-full w-full sm:w-4/6">
      <div className="flex h-full w-full flex-col justify-center px-2">
        <div className={`flex flex-col ${colorProp.textColor1}`}>
          <p
            className={`text-lg ${colorProp.textColor2} font-medium 2xl:text-4xl`}
          >
            Hello!
            <span className="ms-2 text-2xl 2xl:text-4xl">&#128075;</span>
          </p>
          <p className="mt-2 inline-block text-4xl font-extrabold sm:text-5xl 2xl:text-8xl">
            I'm <span className={colorProp.textColor2}>{text}</span>
          </p>
          <p className="mt-2 text-xl font-medium 2xl:text-4xl">
            Software Engineer
          </p>
          <p className="mt-2 text-xl font-medium 2xl:text-4xl">
            Welcome to my portfolio &#128640;. Feel free to explore, and don't
            hesitate to reach out to me.
          </p>
        </div>
        <div
          className={`flex w-full flex-row justify-center sm:justify-end ${colorProp.textColor1} mt-10`}
        >
          <Link
            href="https://github.com/ArpitAkay"
            target="_blank"
            className="mx-2"
          >
            <button
              className={`rounded-md border-2 ${colorProp.borderColor} p-3 text-sm font-semibold opacity-50 hover:border-solid hover:${colorProp.borderColor} hover:opacity-100 2xl:text-3xl`}
            >
              MY WORK
            </button>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/12A-lICgmJvOVDOQZtWbOfNEtbrzLLQwm/view?usp=sharing"
            }
            target="_blank"
            className="mx-2"
          >
            <button
              className={`hover:${colorProp.borderColor} rounded-md border-2 ${colorProp.borderColor} p-3 text-sm font-semibold opacity-50 hover:border-solid hover:opacity-100 2xl:text-3xl`}
            >
              SEE MY RESUME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
