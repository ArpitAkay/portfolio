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
      //write the code for animate text gradient with all the color
      <svg
        width={size.width}
        height={size.height}
        viewBox={`0 0 ${size.width} ${size.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width={size.width}
          height={size.height}
          fill="url(#gradient)"
        />
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f12711" />
            <stop offset="25%" stopColor="#f5af19" />
            <stop offset="50%" stopColor="#f12711" />
            <stop offset="75%" stopColor="#f5af19" />
            <stop offset="100%" stopColor="#f12711" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="90"
          fontWeight="bold"
          fill="url(#gradient)"
        >
          Portfolio
        </text>
      </svg>
    ),
    {
      ...size,
    },
  );
}
