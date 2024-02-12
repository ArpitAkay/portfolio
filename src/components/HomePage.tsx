"use client";

import Link from "next/link";
import React from "react";

const HomePage = () => {
  const [text, setText] = React.useState("");
  const originalText = "Arpit Kumar";

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
      <div className="flex h-full w-full flex-row items-start px-2 xl:items-center">
        <div className="flex flex-col items-start text-white 2xl:items-center">
          <p className="text-lg text-yellow-400 2xl:text-4xl">
            Hello!
            <span className="ms-2 text-2xl 2xl:text-4xl">&#128075;</span>
          </p>
          <p className="mt-2 inline-block text-4xl font-extrabold sm:text-5xl 2xl:text-8xl">
            I'm <span className="text-yellow-400">{text}</span>
          </p>
          {/* <p className="text-xl 2xl:mt-4 2xl:text-4xl">Software Engineer</p> */}
          <p className="my-4 text-xl 2xl:text-4xl">
            I’m a backend developer specializing in Java and Spring Boot. I
            excel in building REST and GraphQL APIs, emphasizing efficient
            database design and secure implementations for seamless
            functionality and optimal performance. Additionally, I’m skilled in
            front-end development using React and TypeScript. I’m passionate
            about learning new technologies and frameworks and am always looking
            for opportunities to grow and expand my skill set.
          </p>
          <div className="flex w-full flex-row justify-center sm:justify-end">
            <Link
              href="https://github.com/ArpitAkay"
              target="_blank"
              className="mx-2 opacity-50 hover:opacity-100"
            >
              <button className="rounded-md border-2 p-3 text-sm font-semibold 2xl:text-3xl">
                MY WORK
              </button>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/12A-lICgmJvOVDOQZtWbOfNEtbrzLLQwm/view?usp=sharing"
              }
              target="_blank"
              className="mx-2 opacity-50 hover:opacity-100"
            >
              <button className="rounded-md border-2 p-3 text-sm font-semibold 2xl:text-3xl">
                SEE MY RESUME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
