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
    ),
    {
      ...size,
    },
  );
}
