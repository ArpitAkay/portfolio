import Link from "next/link";
import React from "react";

const MoreOnGitHub = () => {
  return (
    <div className="h-96 w-full sm:w-4/6">
      <div className="p-4">
        <div className="flex h-96 w-full flex-col items-center justify-center">
          <h2 className="font-extrabold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            More projects on <span className="text-yellow-400">Github</span>
          </h2>
          {/* <div className="flex flex-row items-center justify-center text-center"> */}
          <p className="mt-3 text-center text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            I love to solve business problems & uncover hidden data stories
          </p>
          {/* </div> */}
          <div className="mt-6">
            <Link href={"https://github.com/ArpitAkay"} target="_blank">
              <button
                type="button"
                className="rounded-full bg-yellow-400 px-9 py-3 text-lg font-medium"
              >
                Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreOnGitHub;
