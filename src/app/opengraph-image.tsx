import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#333",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            background: "linear-gradient(45deg, #f3ec78, #af4261)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "96px",
            fontWeight: "bold",
            textAlign: "center",
            margin: 0,
            padding: "200px 0",
          }}
        >
          Portfolio
        </h1>
      </div>
    ),
    {
      ...size,
    },
  );
}
