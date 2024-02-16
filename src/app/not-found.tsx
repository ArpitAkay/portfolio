"use client";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-svh w-svw">
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <hr />
          <p className="text-xl">This page could not be found</p>
          <Link href="/">
            <p className="text-blue-500">Go back to home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
