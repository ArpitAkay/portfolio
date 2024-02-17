import React from "react";

const page = () => {
  return (
    <div className="mt-10">
      <div
        style={{
          width: "1200px",
          height: "635px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            background: "-webkit-linear-gradient(45deg, #ff0000, #0000ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "96px",
            fontWeight: "bold",
          }}
        >
          Portfolio
        </h1>
      </div>
    </div>
  );
};

export default page;
