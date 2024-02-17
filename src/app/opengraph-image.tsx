import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to right, #f12711, #f5af19)",
          color: "white",
          fontFamily: "Inter",
          fontSize: 50,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Arpit Kumar</h1>
          <p>Arpit Kumar's Portfolio</p>
        </div>
      </div>
    ),
  );
}
