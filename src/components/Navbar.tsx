"use client";

import React from "react";
import Drawer from "./Drawer";

interface NavbarProps {
  handleNavbarClick: (val: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const colorProp = props.darkMode
    ? {
        color: "text-white",
        backgroundColor: "bg-slate-950",
      }
    : {
        color: "text-black",
        backgroundColor: "bg-slate-200",
      };
  return (
    <nav
      className={`h-full w-full transition-colors ${colorProp.backgroundColor} ${colorProp.color}`}
    >
      <div className="flex h-full w-full justify-center">
        <div className="flex w-4/6 items-center justify-between">
          <button className="h-1/2 text-3xl">
            <svg
              onClick={() => props.handleNavbarClick("Home")}
              width="100%"
              height="100%"
              viewBox="0 0 164.2 37.92"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                strokeLinecap="round"
                fillRule="evenodd"
                fontSize="9pt"
                stroke={props.darkMode ? "#fffefe" : "#000000"}
                strokeWidth="0.25mm"
                fill={props.darkMode ? "#fffefe" : "#000000"}
                style={{
                  stroke: props.darkMode ? "#fffefe" : "#000000",
                  strokeWidth: "0.25mm",
                  fill: props.darkMode ? "#fffefe" : "#000000",
                }}
              >
                <path
                  d="M 87.4 4.92 L 87.4 5.44 Q 87.4 7.6 85.54 9.78 A 19.062 19.062 0 0 1 82.335 12.785 A 17.317 17.317 0 0 1 81.44 13.4 A 3.723 3.723 0 0 1 81.141 13.555 Q 80.835 13.695 80.602 13.716 A 0.89 0.89 0 0 1 80.52 13.72 A 0.888 0.888 0 0 1 79.892 13.453 Q 79.752 13.319 79.628 13.117 A 2.954 2.954 0 0 1 79.42 12.7 A 7.487 7.487 0 0 1 79.199 12.094 Q 79.101 11.783 79.052 11.508 A 2.98 2.98 0 0 1 79 10.98 Q 79 10.319 79.465 9.639 A 3.737 3.737 0 0 1 79.52 9.56 A 35.426 35.426 0 0 1 83.605 4.987 A 28.858 28.858 0 0 1 87.08 2.2 Q 87.88 1.64 88.9 1.64 Q 89.92 1.64 91.12 2.28 A 2.953 2.953 0 0 1 92.627 4.212 Q 92.8 4.844 92.8 5.64 A 6.841 6.841 0 0 1 92.726 6.605 Q 92.6 7.486 92.26 8.58 A 188.413 188.413 0 0 1 91.756 10.182 Q 91.498 10.989 91.26 11.7 Q 90.866 12.882 90.751 13.257 A 5.647 5.647 0 0 0 90.72 13.36 A 15.915 15.915 0 0 0 91.924 12.084 Q 93.146 10.652 94.604 8.446 A 67.162 67.162 0 0 0 95.28 7.4 A 265.509 265.509 0 0 1 95.73 6.684 Q 96.225 5.896 96.519 5.445 A 27.922 27.922 0 0 1 96.68 5.2 A 200.533 200.533 0 0 0 97.403 4.053 Q 98.843 1.748 99.2 1 A 2.492 2.492 0 0 1 99.221 0.66 Q 99.274 0.283 99.456 0.121 A 0.5 0.5 0 0 1 99.8 0 A 0.815 0.815 0 0 1 100.092 0.059 Q 100.386 0.172 100.74 0.5 Q 101.28 1 101.58 1.24 A 1.063 1.063 0 0 1 101.732 1.386 Q 101.81 1.48 101.847 1.579 A 0.515 0.515 0 0 1 101.88 1.76 A 0.841 0.841 0 0 1 101.85 1.975 Q 101.795 2.183 101.64 2.44 A 39.645 39.645 0 0 1 98.273 8.482 Q 95.63 12.425 91.76 16.52 A 0.27 0.27 0 0 0 91.68 16.713 A 0.354 0.354 0 0 0 91.68 16.72 A 0.454 0.454 0 0 0 91.941 17.13 Q 92.168 17.26 92.594 17.301 A 4.65 4.65 0 0 0 93.04 17.32 A 4.008 4.008 0 0 1 95.026 18.577 Q 95.648 19.274 96.12 20.32 Q 96.28 20.64 96.94 22.26 Q 97.6 23.88 98 24.72 A 3.007 3.007 0 0 0 98.185 25.094 Q 98.435 25.517 98.748 25.635 A 0.71 0.71 0 0 0 99 25.68 A 0.719 0.719 0 0 0 99.196 25.651 Q 99.363 25.604 99.56 25.48 A 3.617 3.617 0 0 1 99.673 25.412 Q 99.856 25.307 99.955 25.286 A 0.216 0.216 0 0 1 100 25.28 A 0.433 0.433 0 0 1 100.383 25.518 Q 100.58 25.844 100.598 26.615 A 6.878 6.878 0 0 1 100.6 26.78 Q 100.6 28.197 100.422 28.757 A 1.433 1.433 0 0 1 100.4 28.82 A 1.392 1.392 0 0 1 100.223 29.141 Q 99.913 29.574 99.18 30.12 Q 98.352 30.738 97.761 30.854 A 1.355 1.355 0 0 1 97.5 30.88 A 0.941 0.941 0 0 1 97.102 30.777 Q 96.523 30.503 95.68 29.5 A 7.021 7.021 0 0 1 95.028 28.561 Q 94.398 27.497 93.767 25.824 A 34.636 34.636 0 0 1 93.36 24.68 A 213.893 213.893 0 0 0 92.953 23.485 Q 92.133 21.098 91.84 20.48 Q 91.51 19.699 91.077 19.504 A 0.717 0.717 0 0 0 90.78 19.44 Q 90.201 19.44 89.796 20.052 A 2.362 2.362 0 0 0 89.74 20.14 A 1.824 1.824 0 0 1 89.501 20.46 Q 89.15 20.83 88.68 20.8 A 37.551 37.551 0 0 0 88.364 22.443 Q 88.105 23.983 88.083 25.091 A 10.21 10.21 0 0 0 88.08 25.3 Q 88.08 26.562 88.146 27.284 A 6.05 6.05 0 0 0 88.2 27.72 Q 88.299 28.314 88.317 28.69 A 3.269 3.269 0 0 1 88.32 28.84 A 0.723 0.723 0 0 1 88.254 29.13 Q 88.128 29.419 87.76 29.76 A 2.539 2.539 0 0 1 87.412 30.035 Q 87.207 30.167 87.005 30.228 A 1.187 1.187 0 0 1 86.66 30.28 Q 86.227 30.28 85.627 29.715 A 5.721 5.721 0 0 1 85.32 29.4 A 3.355 3.355 0 0 1 85.078 29.133 Q 84.79 28.774 84.76 28.48 Q 84.689 27.8 84.617 26.737 A 94 94 0 0 1 84.6 26.48 Q 84.539 25.531 84.525 24.769 A 23.85 23.85 0 0 1 84.52 24.32 Q 84.52 21.24 85.22 18.16 A 61.725 61.725 0 0 1 85.944 15.312 Q 86.346 13.865 86.852 12.276 A 105.904 105.904 0 0 1 87.2 11.2 Q 88.772 6.452 89.03 5.114 A 2.291 2.291 0 0 0 89.08 4.72 A 1.295 1.295 0 0 0 89.048 4.418 Q 88.928 3.92 88.36 3.92 Q 87.963 3.92 87.729 4.043 A 0.597 0.597 0 0 0 87.4 4.52 L 87.4 4.92 Z M 127.76 24.24 L 128.08 15.96 A 4.506 4.506 0 0 0 128.078 15.822 Q 128.07 15.547 128.024 15.493 A 0.031 0.031 0 0 0 128 15.48 Q 127.84 15.48 127.64 16.12 Q 126.92 17.96 124.28 27.6 Q 123.88 29 123.44 29 A 0.433 0.433 0 0 1 123.329 28.983 Q 123.118 28.925 122.72 28.68 A 5.75 5.75 0 0 1 121.58 27.609 A 4.025 4.025 0 0 1 120.68 25.04 A 14.567 14.567 0 0 1 120.735 23.844 Q 120.855 22.395 121.24 20.36 Q 121.849 16.862 121.879 16.418 A 0.582 0.582 0 0 0 121.88 16.38 A 1.374 1.374 0 0 0 121.877 16.286 Q 121.868 16.145 121.825 16.1 A 0.06 0.06 0 0 0 121.78 16.08 Q 121.683 16.08 121.491 16.46 A 4.323 4.323 0 0 0 121.48 16.48 Q 119.605 20.967 119.082 27.043 A 51.739 51.739 0 0 0 119 28.12 A 3.012 3.012 0 0 1 118.945 28.543 Q 118.843 29.021 118.585 29.205 A 0.645 0.645 0 0 1 118.2 29.32 Q 117.375 29.32 116.697 28.492 A 4.065 4.065 0 0 1 116.48 28.2 Q 115.08 26.2 115.08 23.72 A 16.715 16.715 0 0 1 115.125 22.549 Q 115.168 21.942 115.252 21.245 A 40.181 40.181 0 0 1 115.46 19.76 A 4074.214 4074.214 0 0 0 115.592 18.926 Q 115.855 17.263 115.92 16.84 Q 116.486 13.346 116.969 12.759 A 0.264 0.264 0 0 1 117.16 12.64 Q 117.573 12.64 117.81 13.643 A 5.777 5.777 0 0 1 117.84 13.78 Q 118.021 14.64 118.066 15.147 A 3.397 3.397 0 0 1 118.08 15.44 Q 118.08 15.818 118.165 15.922 A 0.095 0.095 0 0 0 118.24 15.96 A 0.505 0.505 0 0 0 118.536 15.854 Q 118.828 15.645 119.12 15.02 Q 119.56 14.08 120.2 13.14 A 2.621 2.621 0 0 1 120.63 12.645 A 1.692 1.692 0 0 1 121.78 12.2 A 2.478 2.478 0 0 1 123.19 12.645 A 3.312 3.312 0 0 1 123.52 12.9 Q 124.32 13.6 124.52 14.6 A 9.049 9.049 0 0 1 124.841 14.177 Q 125.204 13.722 125.761 13.11 A 41.898 41.898 0 0 1 126.12 12.72 A 3.295 3.295 0 0 1 126.422 12.353 Q 126.82 11.938 127.226 11.887 A 0.917 0.917 0 0 1 127.34 11.88 A 1.894 1.894 0 0 1 127.735 11.928 Q 128.298 12.049 129.16 12.48 A 2.423 2.423 0 0 1 130.199 13.567 Q 130.666 14.467 130.771 15.97 A 13.204 13.204 0 0 1 130.8 16.88 A 89.749 89.749 0 0 1 130.767 19.41 Q 130.731 20.654 130.66 21.745 A 45.321 45.321 0 0 1 130.56 23 L 130.56 23.28 Q 130.56 23.88 130.8 23.88 A 0.357 0.357 0 0 0 130.988 23.798 Q 131.443 23.472 132.56 21.86 A 35.759 35.759 0 0 1 133.01 21.226 Q 134.015 19.84 134.28 19.84 A 0.299 0.299 0 0 1 134.529 20.025 Q 134.801 20.498 134.835 22.187 A 25.268 25.268 0 0 1 134.84 22.7 A 8.655 8.655 0 0 1 134.053 26.245 A 12.224 12.224 0 0 1 132.8 28.4 Q 131.87 29.679 131.203 29.719 A 0.715 0.715 0 0 1 131.16 29.72 L 130.72 29.6 Q 129.12 28.76 128.44 27.68 Q 127.834 26.717 127.768 24.737 A 14.982 14.982 0 0 1 127.76 24.24 Z M 16.12 4.24 L 16.12 3.2 A 2.168 2.168 0 0 1 16.152 2.818 Q 16.19 2.608 16.272 2.443 A 1.008 1.008 0 0 1 16.46 2.18 A 1.677 1.677 0 0 1 16.732 1.958 Q 16.932 1.828 17.144 1.787 A 1.048 1.048 0 0 1 17.18 1.78 A 2.941 2.941 0 0 1 17.383 1.757 Q 17.71 1.729 18.308 1.722 A 35.827 35.827 0 0 1 18.7 1.72 Q 19.84 1.72 21.1 2.56 Q 22.36 3.4 22.36 4.84 Q 22.36 5.12 22 8.32 Q 21.64 11.52 21.52 16.52 A 13.748 13.748 0 0 0 22.464 16.092 Q 22.911 15.867 23.277 15.634 A 6.49 6.49 0 0 0 23.7 15.34 A 9.948 9.948 0 0 1 23.989 15.13 Q 24.438 14.815 24.676 14.742 A 0.435 0.435 0 0 1 24.8 14.72 Q 25.208 14.72 25.238 15.423 A 2.73 2.73 0 0 1 25.24 15.54 A 1.482 1.482 0 0 1 25.122 16.088 Q 24.93 16.568 24.425 17.16 A 8.939 8.939 0 0 1 24 17.62 Q 22.76 18.88 21.52 19.68 Q 21.52 20.56 21.6 22.48 A 0.417 0.417 0 0 1 21.713 22.429 Q 21.767 22.413 21.832 22.406 A 1.01 1.01 0 0 1 21.94 22.4 Q 22.16 22.4 22.38 22.52 Q 22.6 22.64 22.78 22.8 Q 22.901 22.908 23.049 23.079 A 5.984 5.984 0 0 1 23.2 23.26 A 39.203 39.203 0 0 1 23.313 23.402 Q 23.421 23.538 23.497 23.638 A 9.045 9.045 0 0 1 23.56 23.72 Q 23.652 23.843 23.791 24.047 A 19.931 19.931 0 0 1 23.88 24.18 Q 24.058 24.448 24.11 24.508 A 0.191 0.191 0 0 0 24.12 24.52 Q 24.84 25.6 24.84 26.22 A 3.891 3.891 0 0 1 24.794 26.797 Q 24.751 27.086 24.667 27.405 A 7.337 7.337 0 0 1 24.6 27.64 Q 23.68 30 23.36 31.76 Q 23.218 32.507 22.571 32.59 A 1.337 1.337 0 0 1 22.4 32.6 A 2.631 2.631 0 0 1 21.971 32.568 Q 21.43 32.478 21.18 32.14 Q 20.84 31.68 20.66 31.4 Q 20.48 31.12 20.34 30.6 A 665.333 665.333 0 0 1 20.274 30.354 Q 20.21 30.114 20.161 29.933 A 191.025 191.025 0 0 1 20.12 29.78 Q 20.04 29.48 19.96 28.84 Q 19.84 28 19.8 27.16 L 19.76 26.52 Q 19.601 24.609 19.362 20.715 A 755.058 755.058 0 0 1 19.36 20.68 A 5.475 5.475 0 0 1 18.687 20.861 Q 17.941 21.015 16.856 21.085 A 25.471 25.471 0 0 1 16.16 21.12 Q 15.52 24 14.86 26.42 A 9.849 9.849 0 0 1 14.122 28.35 A 7.268 7.268 0 0 1 12.7 30.28 Q 11.2 31.72 9.04 31.72 Q 8.55 31.72 7.92 31.603 A 10.286 10.286 0 0 1 7.52 31.52 A 10.286 10.286 0 0 1 3.404 29.39 Q 1.479 27.72 0.48 25 Q 0 23.68 0 22.68 A 4.42 4.42 0 0 1 0.177 21.389 Q 0.594 20.019 2 19.4 A 22.666 22.666 0 0 1 6.534 17.871 A 18.297 18.297 0 0 1 10.44 17.44 L 14.16 17.52 Q 15.713 10.516 16.036 6.274 A 27.004 27.004 0 0 0 16.12 4.24 Z M 39.32 19.76 L 39.36 19.08 A 2.875 2.875 0 0 0 39.234 18.211 A 2.379 2.379 0 0 0 38.74 17.34 A 10.297 10.297 0 0 1 38.53 17.095 Q 38.12 16.603 38.12 16.44 A 0.286 0.286 0 0 1 38.214 16.229 Q 38.256 16.188 38.317 16.153 A 0.785 0.785 0 0 1 38.38 16.12 A 2.304 2.304 0 0 1 38.747 15.989 A 2.81 2.81 0 0 1 38.96 15.94 A 0.725 0.725 0 0 0 39.215 15.835 Q 39.402 15.717 39.588 15.476 A 2.509 2.509 0 0 0 39.6 15.46 A 1.341 1.341 0 0 0 39.753 15.192 Q 39.949 14.748 40.091 13.873 A 13.746 13.746 0 0 0 40.12 13.68 Q 40.32 12.326 40.32 11.745 A 3.494 3.494 0 0 0 40.32 11.74 A 1.398 1.398 0 0 1 40.333 11.543 Q 40.366 11.314 40.484 11.222 A 0.31 0.31 0 0 1 40.68 11.16 Q 41.04 11.16 41.32 11.4 A 2.975 2.975 0 0 1 41.511 11.578 Q 41.6 11.668 41.667 11.756 A 1.435 1.435 0 0 1 41.74 11.86 A 2.858 2.858 0 0 1 41.829 12.01 Q 41.94 12.211 42.08 12.52 A 15.817 15.817 0 0 0 42.162 12.698 Q 42.272 12.932 42.334 13.038 A 0.859 0.859 0 0 0 42.36 13.08 Q 43.68 12.64 44.56 12.64 Q 46.84 12.64 48.5 14.86 A 9.138 9.138 0 0 1 49.59 16.716 A 6.738 6.738 0 0 1 50.16 19.4 A 8.491 8.491 0 0 1 50.122 20.181 Q 50.085 20.58 50.013 21.021 A 14.964 14.964 0 0 1 49.96 21.32 A 23.047 23.047 0 0 1 49.155 24.07 Q 48.108 26.919 46.494 28.369 A 6.381 6.381 0 0 1 46.12 28.68 A 4.56 4.56 0 0 1 45.638 29.028 Q 45.038 29.4 44.52 29.4 A 1.475 1.475 0 0 1 43.412 28.924 A 1.938 1.938 0 0 1 43.32 28.82 Q 42.854 28.257 42.652 27.372 A 5.066 5.066 0 0 1 42.64 27.32 A 14.585 14.585 0 0 1 42.382 25.669 Q 42.296 24.824 42.283 23.875 A 25.153 25.153 0 0 1 42.28 23.52 A 15.213 15.213 0 0 1 42.292 22.898 Q 42.345 21.601 42.642 21.398 A 0.206 0.206 0 0 1 42.76 21.36 A 0.062 0.062 0 0 1 42.797 21.394 Q 42.901 21.547 43.179 22.398 A 17.314 17.314 0 0 1 43.18 22.4 A 2.659 2.659 0 0 0 43.354 22.818 Q 43.683 23.44 44.24 23.44 A 1.113 1.113 0 0 0 44.853 23.271 Q 45.135 23.092 45.32 22.72 Q 45.96 21.6 46.56 19.9 A 16.628 16.628 0 0 0 46.85 19.004 Q 47.088 18.186 47.143 17.599 A 3.601 3.601 0 0 0 47.16 17.26 Q 47.16 16.46 46.523 16.341 A 1.322 1.322 0 0 0 46.28 16.32 A 2.301 2.301 0 0 0 45.784 16.378 Q 45.554 16.429 45.304 16.525 A 4.369 4.369 0 0 0 45.12 16.6 Q 42.64 17.6 41.84 21.12 Q 40.768 25.898 40.517 29.737 A 34.693 34.693 0 0 0 40.44 32 Q 40.44 33.478 40.549 34.614 A 14.853 14.853 0 0 0 40.68 35.64 L 40.8 36.56 A 1.203 1.203 0 0 1 40.637 37.157 A 1.779 1.779 0 0 1 40.4 37.48 A 1.592 1.592 0 0 1 40.118 37.73 A 1.046 1.046 0 0 1 39.52 37.92 Q 38.24 37.92 38.24 31.92 Q 38.24 28.16 39.32 19.76 Z M 102.36 11.28 L 104.28 10.92 A 2.481 2.481 0 0 1 105.641 11.333 A 3.332 3.332 0 0 1 106 11.6 A 0.859 0.859 0 0 0 106.042 11.639 Q 106.15 11.732 106.448 11.96 A 34.112 34.112 0 0 0 106.5 12 Q 106.822 12.245 107.038 12.42 A 10.675 10.675 0 0 1 107.16 12.52 A 3.934 3.934 0 0 1 107.425 12.792 Q 107.674 13.075 107.758 13.313 A 0.685 0.685 0 0 1 107.8 13.54 A 1.218 1.218 0 0 1 107.775 13.753 Q 107.673 14.293 107.163 15.728 A 59.024 59.024 0 0 1 107.08 15.96 Q 106.36 17.96 105.56 20.2 Q 104.52 22.96 104.52 23.24 Q 104.52 23.515 104.712 23.52 A 0.277 0.277 0 0 0 104.72 23.52 A 0.317 0.317 0 0 0 104.892 23.398 Q 105.381 22.873 106.91 20.103 A 123.924 123.924 0 0 0 107.12 19.72 Q 108.713 16.811 109.719 14.863 A 94.408 94.408 0 0 0 110.28 13.76 A 1.791 1.791 0 0 1 110.542 13.38 A 1.12 1.12 0 0 1 111.4 13 A 2.946 2.946 0 0 1 112.024 13.06 Q 113.08 13.29 113.08 14.4 A 2.965 2.965 0 0 1 113.044 14.803 Q 112.885 15.898 112.04 18.92 Q 110.72 23.84 110.72 24.26 A 1.201 1.201 0 0 0 110.728 24.402 Q 110.745 24.544 110.8 24.613 A 0.17 0.17 0 0 0 110.94 24.68 A 0.152 0.152 0 0 0 111.039 24.607 Q 111.288 24.287 111.84 22.58 Q 112.41 20.822 112.699 20.536 A 0.156 0.156 0 0 1 112.8 20.48 Q 112.949 20.48 113.168 20.792 A 2.587 2.587 0 0 1 113.2 20.84 A 11.608 11.608 0 0 1 113.838 22.447 Q 114.11 23.328 114.178 24.144 A 6.472 6.472 0 0 1 114.2 24.68 A 6.13 6.13 0 0 1 113.996 26.196 Q 113.697 27.367 112.96 28.72 A 2.588 2.588 0 0 1 112.611 29.242 A 1.55 1.55 0 0 1 111.4 29.8 A 2.017 2.017 0 0 1 111.069 29.775 Q 110.894 29.746 110.757 29.683 A 0.812 0.812 0 0 1 110.48 29.48 A 26.04 26.04 0 0 1 110.161 29.107 Q 109.645 28.49 109.52 28.24 A 3.703 3.703 0 0 1 109.104 27.558 Q 108.744 26.816 108.463 25.646 A 19.324 19.324 0 0 1 108.28 24.8 Q 108 25.32 107.56 26.28 Q 106.64 28.4 105.88 29.36 A 1.82 1.82 0 0 1 105.52 29.747 A 1.354 1.354 0 0 1 104.66 30.04 A 1.291 1.291 0 0 1 104.098 29.9 Q 103.685 29.701 103.234 29.219 A 5.889 5.889 0 0 1 103.04 29 Q 101.72 27.2 101.7 24.96 Q 101.686 23.391 101.908 21.959 A 15.861 15.861 0 0 1 102.14 20.76 A 35.274 35.274 0 0 1 102.556 19.172 Q 102.758 18.461 103.009 17.668 A 74.762 74.762 0 0 1 103.56 16 L 103.68 15.52 Q 103.68 15.244 103.472 15.206 A 0.401 0.401 0 0 0 103.4 15.2 L 102.48 15.44 A 0.881 0.881 0 0 1 101.731 15.058 Q 101.626 14.914 101.548 14.716 A 2.123 2.123 0 0 1 101.52 14.64 A 7.539 7.539 0 0 1 100.883 11.733 A 8.703 8.703 0 0 1 100.88 11.52 Q 100.88 11.04 101.28 11.04 L 102.36 11.28 Z M 66.72 11.88 L 69.88 11.72 A 1.352 1.352 0 0 1 70.437 11.827 Q 71.016 12.086 71.104 12.977 A 3.475 3.475 0 0 1 71.12 13.32 A 1.949 1.949 0 0 1 71.065 13.801 A 1.275 1.275 0 0 1 70.6 14.52 A 4.459 4.459 0 0 1 69.562 15.204 Q 68.486 15.732 66.808 16.025 A 18.839 18.839 0 0 1 66.2 16.12 Q 65.8 19.92 65.8 22.44 Q 65.8 24.96 66.16 24.96 A 0.327 0.327 0 0 0 66.293 24.915 Q 66.67 24.72 67.84 23.68 Q 69.254 22.424 69.434 22.401 A 0.05 0.05 0 0 1 69.44 22.4 A 0.45 0.45 0 0 1 69.827 22.644 Q 70.07 23.029 70.112 24.022 A 10.487 10.487 0 0 1 70.12 24.46 Q 70.12 26.52 69.36 28.52 A 5.326 5.326 0 0 1 68.971 29.345 Q 68.731 29.749 68.447 30.014 A 1.774 1.774 0 0 1 67.2 30.52 A 1.856 1.856 0 0 1 66.455 30.358 A 2.61 2.61 0 0 1 66 30.1 Q 65.543 29.78 65.259 29.459 A 2.467 2.467 0 0 1 65.1 29.26 A 15.152 15.152 0 0 1 64.935 29.024 Q 64.75 28.753 64.5 28.371 A 66.282 66.282 0 0 1 64.26 28 Q 63.769 27.236 63.625 27.035 A 1.809 1.809 0 0 0 63.6 27 A 7.12 7.12 0 0 1 62.885 25.803 Q 62.518 25.01 62.435 24.223 A 4.411 4.411 0 0 1 62.42 24.06 A 38.401 38.401 0 0 1 62.359 22.895 Q 62.335 22.251 62.326 21.532 A 70.133 70.133 0 0 1 62.32 20.64 A 36.679 36.679 0 0 1 62.396 18.334 A 46.381 46.381 0 0 1 62.56 16.4 Q 61.32 16.36 60.5 15.52 A 5.847 5.847 0 0 1 59.341 13.79 A 6.806 6.806 0 0 1 59.22 13.5 A 46.523 46.523 0 0 1 59.113 13.221 Q 58.831 12.484 58.774 12.248 A 0.423 0.423 0 0 1 58.76 12.16 A 0.64 0.64 0 0 1 58.795 11.941 Q 58.904 11.64 59.36 11.64 L 63.2 11.88 Q 63.353 10.931 63.647 9.419 A 182.308 182.308 0 0 1 63.84 8.44 A 154.349 154.349 0 0 0 64.071 7.335 Q 64.465 5.413 64.513 4.852 A 1.575 1.575 0 0 0 64.52 4.72 L 64.44 3.96 A 0.812 0.812 0 0 1 64.48 3.695 Q 64.604 3.335 65.117 3.321 A 1.548 1.548 0 0 1 65.16 3.32 Q 65.816 3.32 66.736 3.917 A 7.264 7.264 0 0 1 66.92 4.04 Q 67.96 4.76 67.96 5.4 Q 67.96 5.68 67.68 6.52 A 12.314 12.314 0 0 0 67.511 7.214 Q 67.189 8.693 66.72 11.88 Z M 151.76 23.16 L 151.68 25.12 A 3.492 3.492 0 0 1 151.592 25.858 Q 151.432 26.592 150.983 27.563 A 16.183 16.183 0 0 1 150.68 28.18 A 5.3 5.3 0 0 1 150.127 29.052 Q 149.278 30.12 148.12 30.12 A 2.32 2.32 0 0 1 147.444 30.027 A 1.793 1.793 0 0 1 146.6 29.48 A 1.884 1.884 0 0 1 146.489 29.357 Q 146.301 29.132 146 28.68 A 9.424 9.424 0 0 1 144.883 26.448 Q 144.531 25.447 144.333 24.276 A 15.733 15.733 0 0 1 144.32 24.2 A 46.634 46.634 0 0 1 143.145 26.199 Q 141.387 29.011 140.169 29.786 A 1.613 1.613 0 0 1 139.32 30.08 A 2.093 2.093 0 0 1 138.071 29.651 Q 137.745 29.415 137.439 29.048 A 5.417 5.417 0 0 1 137.08 28.56 A 2.922 2.922 0 0 1 136.911 28.282 Q 136.743 27.975 136.563 27.517 A 12.437 12.437 0 0 1 136.48 27.3 A 8.467 8.467 0 0 0 135.868 25.995 A 7.663 7.663 0 0 0 135.7 25.72 A 2.644 2.644 0 0 1 135.386 24.995 Q 135.295 24.665 135.261 24.273 A 5.683 5.683 0 0 1 135.24 23.78 Q 135.24 22.56 135.72 21.6 A 39.186 39.186 0 0 1 137.7 18.112 Q 139.914 14.668 142.281 12.968 A 10.909 10.909 0 0 1 142.64 12.72 A 1.801 1.801 0 0 1 143.691 12.361 A 2.231 2.231 0 0 1 143.76 12.36 A 1.51 1.51 0 0 1 144.215 12.438 Q 144.715 12.597 145.36 13.08 A 5.048 5.048 0 0 1 145.634 13.375 Q 145.953 13.75 146.04 14.04 Q 146.238 14.908 146.24 15.115 A 0.429 0.429 0 0 1 146.24 15.12 Q 147.584 15.581 147.638 16.779 A 2.256 2.256 0 0 1 147.64 16.88 Q 147.64 17.76 147.16 20.86 A 104.783 104.783 0 0 0 146.945 22.312 Q 146.664 24.316 146.602 25.453 A 14.779 14.779 0 0 0 146.6 25.48 A 1.864 1.864 0 0 0 146.622 25.776 Q 146.706 26.295 147.12 26.319 A 0.707 0.707 0 0 0 147.16 26.32 A 0.708 0.708 0 0 0 147.503 26.205 Q 148.153 25.826 149.373 24.197 A 29.208 29.208 0 0 0 149.46 24.08 A 67.054 67.054 0 0 1 149.853 23.555 Q 151.15 21.84 151.36 21.84 A 0.254 0.254 0 0 1 151.578 21.979 Q 151.724 22.211 151.753 22.829 A 7.067 7.067 0 0 1 151.76 23.16 Z M 38.116 20.572 A 0.141 0.141 0 0 0 38 20.48 A 0.14 0.14 0 0 0 37.952 20.496 Q 37.807 20.564 37.32 20.92 A 37.961 37.961 0 0 1 37.244 20.99 Q 36.237 21.912 34.08 23.76 A 71.415 71.415 0 0 1 34.068 23.771 Q 32.256 25.323 31.707 25.614 A 0.468 0.468 0 0 1 31.52 25.68 Q 31.329 25.68 31.29 25.476 A 0.627 0.627 0 0 1 31.28 25.36 Q 31.28 25.08 31.969 22.549 A 225.217 225.217 0 0 1 32.18 21.78 A 467.088 467.088 0 0 1 32.427 20.888 Q 32.958 18.983 33.168 18.305 A 7.225 7.225 0 0 1 33.26 18.02 A 2.05 2.05 0 0 1 33.39 17.729 A 1.558 1.558 0 0 1 33.8 17.24 Q 33.92 17.12 34.02 16.76 Q 34.12 16.4 34.12 15.52 A 3.09 3.09 0 0 0 34.118 15.41 Q 34.108 15.115 34.04 14.869 A 1.563 1.563 0 0 0 33.64 14.16 A 14.084 14.084 0 0 0 33.445 13.985 Q 32.191 12.88 31.54 12.88 Q 30.84 12.88 30.26 13.32 A 13.505 13.505 0 0 1 30.192 13.372 Q 29.783 13.678 29.626 13.743 A 0.188 0.188 0 0 1 29.56 13.76 Q 29.337 13.76 29.241 13.456 A 1.29 1.29 0 0 1 29.2 13.28 A 3.987 3.987 0 0 0 29.114 12.928 Q 29.012 12.587 28.859 12.323 A 1.729 1.729 0 0 0 28.2 11.66 Q 27.601 11.329 27.35 11.259 A 0.427 0.427 0 0 0 27.24 11.24 A 0.407 0.407 0 0 0 27.014 11.308 Q 26.779 11.461 26.64 11.96 Q 26.547 12.242 26.135 12.95 A 28.914 28.914 0 0 1 25.88 13.38 A 11.632 11.632 0 0 0 25.861 13.413 Q 25.24 14.448 25.24 14.94 Q 25.24 15.44 25.72 16.84 A 27.521 27.521 0 0 0 25.791 17.044 Q 26.113 17.961 26.35 18.41 A 2.209 2.209 0 0 0 26.5 18.66 A 1.283 1.283 0 0 0 26.593 18.776 A 0.868 0.868 0 0 0 27.26 19.08 A 1.267 1.267 0 0 0 27.732 18.99 A 1.52 1.52 0 0 0 28.12 18.76 A 18.501 18.501 0 0 0 28.546 18.374 Q 28.884 18.058 29.167 17.758 A 9.66 9.66 0 0 0 29.72 17.12 A 11.115 11.115 0 0 1 29.713 17.148 Q 29.61 17.52 29.288 18.601 A 392.208 392.208 0 0 1 29.12 19.16 Q 28.64 20.76 28.42 21.86 A 10.752 10.752 0 0 0 28.295 22.635 A 12.778 12.778 0 0 0 28.2 24.22 A 4.241 4.241 0 0 0 28.206 24.432 Q 28.238 25.081 28.468 25.766 A 7.046 7.046 0 0 0 28.96 26.88 A 0.017 0.017 0 0 0 28.96 26.882 Q 28.966 26.932 29.24 27.44 A 47.677 47.677 0 0 0 29.275 27.506 Q 29.525 27.968 29.6 28.08 A 4.521 4.521 0 0 1 29.636 28.134 Q 29.703 28.239 29.835 28.451 A 78.682 78.682 0 0 1 29.94 28.62 Q 30.2 29.04 30.38 29.18 Q 30.56 29.32 30.86 29.58 A 1.817 1.817 0 0 0 31.107 29.762 A 1.349 1.349 0 0 0 31.48 29.92 A 1.762 1.762 0 0 0 31.615 29.948 Q 31.926 30 32.46 30 A 1.429 1.429 0 0 0 32.764 29.965 Q 33.353 29.837 34.2 29.24 Q 34.493 29.013 35.247 28.138 A 45.983 45.983 0 0 0 35.62 27.7 A 18.047 18.047 0 0 0 36.24 26.924 Q 36.834 26.133 37.16 25.48 A 7.451 7.451 0 0 0 37.854 24.197 A 5.35 5.35 0 0 0 38.28 22.14 Q 38.28 20.869 38.116 20.572 Z M 164.036 20.572 A 0.141 0.141 0 0 0 163.92 20.48 A 0.14 0.14 0 0 0 163.872 20.496 Q 163.727 20.564 163.24 20.92 A 37.961 37.961 0 0 1 163.164 20.99 Q 162.157 21.912 160 23.76 A 71.415 71.415 0 0 1 159.988 23.771 Q 158.176 25.323 157.627 25.614 A 0.468 0.468 0 0 1 157.44 25.68 Q 157.249 25.68 157.21 25.476 A 0.627 0.627 0 0 1 157.2 25.36 Q 157.2 25.08 157.889 22.549 A 225.217 225.217 0 0 1 158.1 21.78 A 467.088 467.088 0 0 1 158.347 20.888 Q 158.878 18.983 159.088 18.305 A 7.225 7.225 0 0 1 159.18 18.02 A 2.05 2.05 0 0 1 159.31 17.729 A 1.558 1.558 0 0 1 159.72 17.24 Q 159.84 17.12 159.94 16.76 Q 160.04 16.4 160.04 15.52 A 3.09 3.09 0 0 0 160.038 15.41 Q 160.028 15.115 159.96 14.869 A 1.563 1.563 0 0 0 159.56 14.16 A 14.084 14.084 0 0 0 159.365 13.985 Q 158.111 12.88 157.46 12.88 Q 156.76 12.88 156.18 13.32 A 13.505 13.505 0 0 1 156.112 13.372 Q 155.703 13.678 155.546 13.743 A 0.188 0.188 0 0 1 155.48 13.76 Q 155.257 13.76 155.161 13.456 A 1.29 1.29 0 0 1 155.12 13.28 A 3.987 3.987 0 0 0 155.034 12.928 Q 154.932 12.587 154.779 12.323 A 1.729 1.729 0 0 0 154.12 11.66 Q 153.521 11.329 153.27 11.259 A 0.427 0.427 0 0 0 153.16 11.24 A 0.407 0.407 0 0 0 152.934 11.308 Q 152.699 11.461 152.56 11.96 Q 152.467 12.242 152.055 12.95 A 28.914 28.914 0 0 1 151.8 13.38 A 11.632 11.632 0 0 0 151.781 13.413 Q 151.16 14.448 151.16 14.94 Q 151.16 15.44 151.64 16.84 A 27.521 27.521 0 0 0 151.711 17.044 Q 152.033 17.961 152.27 18.41 A 2.209 2.209 0 0 0 152.42 18.66 A 1.283 1.283 0 0 0 152.513 18.776 A 0.868 0.868 0 0 0 153.18 19.08 A 1.267 1.267 0 0 0 153.652 18.99 A 1.52 1.52 0 0 0 154.04 18.76 A 18.501 18.501 0 0 0 154.466 18.374 Q 154.804 18.058 155.087 17.758 A 9.66 9.66 0 0 0 155.64 17.12 A 11.115 11.115 0 0 1 155.633 17.148 Q 155.53 17.52 155.208 18.601 A 392.208 392.208 0 0 1 155.04 19.16 Q 154.56 20.76 154.34 21.86 A 10.752 10.752 0 0 0 154.215 22.635 A 12.778 12.778 0 0 0 154.12 24.22 A 4.241 4.241 0 0 0 154.126 24.432 Q 154.158 25.081 154.388 25.766 A 7.046 7.046 0 0 0 154.88 26.88 A 0.017 0.017 0 0 0 154.88 26.882 Q 154.886 26.932 155.16 27.44 A 47.677 47.677 0 0 0 155.195 27.506 Q 155.445 27.968 155.52 28.08 A 4.521 4.521 0 0 1 155.556 28.134 Q 155.623 28.239 155.755 28.451 A 78.682 78.682 0 0 1 155.86 28.62 Q 156.12 29.04 156.3 29.18 Q 156.48 29.32 156.78 29.58 A 1.817 1.817 0 0 0 157.027 29.762 A 1.349 1.349 0 0 0 157.4 29.92 A 1.762 1.762 0 0 0 157.535 29.948 Q 157.846 30 158.38 30 A 1.429 1.429 0 0 0 158.684 29.965 Q 159.273 29.837 160.12 29.24 Q 160.413 29.013 161.167 28.138 A 45.983 45.983 0 0 0 161.54 27.7 A 18.047 18.047 0 0 0 162.16 26.924 Q 162.754 26.133 163.08 25.48 A 7.451 7.451 0 0 0 163.774 24.197 A 5.35 5.35 0 0 0 164.2 22.14 Q 164.2 20.869 164.036 20.572 Z M 59.98 19.04 A 0.103 0.103 0 0 0 59.969 19.041 Q 59.787 19.062 59.36 19.72 A 93.3 93.3 0 0 1 58.701 20.747 Q 56.618 23.946 55.726 24.645 A 0.739 0.739 0 0 1 55.32 24.84 Q 55.027 24.84 54.973 24.389 A 1.924 1.924 0 0 1 54.96 24.16 A 2.757 2.757 0 0 1 54.97 23.96 Q 55.029 23.18 55.462 20.494 A 297.014 297.014 0 0 1 55.72 18.92 Q 56.18 16.195 56.299 14.806 A 10.604 10.604 0 0 0 56.34 14.08 A 5.407 5.407 0 0 0 56.341 13.996 Q 56.341 13.295 56.154 12.831 A 1.458 1.458 0 0 0 55.78 12.28 Q 55.2 11.76 54.44 11.76 A 1.833 1.833 0 0 0 53.8 11.885 Q 53.54 11.981 53.265 12.153 A 4.734 4.734 0 0 0 52.76 12.52 A 11.407 11.407 0 0 1 52.632 12.628 Q 52.429 12.798 52.26 12.92 Q 52.04 13.08 51.82 13.3 A 3.038 3.038 0 0 0 51.643 13.493 A 2.326 2.326 0 0 0 51.46 13.74 Q 51.393 13.847 51.358 13.949 A 0.65 0.65 0 0 0 51.32 14.16 Q 51.32 14.36 51.96 15.34 A 7.284 7.284 0 0 1 52.108 15.576 Q 52.421 16.097 52.535 16.506 A 1.626 1.626 0 0 1 52.6 16.94 Q 52.6 17.56 52.32 19.36 Q 52.04 21.16 52.04 22.92 A 10.387 10.387 0 0 0 52.052 23.411 A 8.96 8.96 0 0 0 52.62 26.2 Q 52.983 27.15 53.353 27.882 A 10.229 10.229 0 0 0 53.8 28.68 A 3.988 3.988 0 0 0 53.943 28.929 Q 54.249 29.418 54.62 29.66 A 1.598 1.598 0 0 0 54.719 29.72 Q 54.964 29.855 55.27 29.915 A 2.689 2.689 0 0 0 55.78 29.96 Q 56.264 29.96 56.815 29.654 A 4.217 4.217 0 0 0 57.32 29.32 A 6.907 6.907 0 0 0 58.407 28.256 A 7.805 7.805 0 0 0 59.58 26.26 Q 59.946 25.37 60.14 24.532 A 8.105 8.105 0 0 0 60.36 22.7 A 53.632 53.632 0 0 0 60.36 22.55 Q 60.356 20.995 60.26 20.04 A 9.744 9.744 0 0 0 60.24 19.856 Q 60.168 19.252 60.06 19.095 A 0.103 0.103 0 0 0 59.98 19.04 Z M 13.24 21.16 L 10.68 21.16 A 57.658 57.658 0 0 0 7.822 21.227 Q 5.083 21.363 3.151 21.78 A 16.905 16.905 0 0 0 2.88 21.84 A 4.882 4.882 0 0 0 2.287 21.992 Q 1.676 22.194 1.421 22.517 A 0.824 0.824 0 0 0 1.24 23.04 A 1.186 1.186 0 0 0 1.336 23.479 Q 1.493 23.872 1.912 24.362 A 7.752 7.752 0 0 0 2.32 24.8 A 6.418 6.418 0 0 0 3.909 25.949 A 8.497 8.497 0 0 0 5.12 26.46 Q 6.84 27.04 8 27.04 Q 9.16 27.04 9.94 26.64 Q 10.72 26.24 11.18 25.8 A 2.586 2.586 0 0 0 11.48 25.451 Q 11.742 25.091 11.997 24.544 A 9.165 9.165 0 0 0 12.08 24.36 A 18.39 18.39 0 0 0 12.488 23.376 Q 12.672 22.896 12.86 22.342 A 41.128 41.128 0 0 0 13.24 21.16 Z M 144.68 14.96 A 22.62 22.62 0 0 0 140.585 19.849 A 18.789 18.789 0 0 0 138.28 25.48 A 17.775 17.775 0 0 0 141.597 21.596 Q 143.39 18.81 144.68 14.96 Z M 18.88 6.4 A 1260.232 1260.232 0 0 0 18.883 6.529 Q 19.042 13.632 19.2 17.12 Q 18.44 17.28 16.92 17.44 Q 17.24 15.6 17.9 11.92 A 2366.625 2366.625 0 0 0 18.191 10.296 Q 18.49 8.621 18.699 7.435 A 502.929 502.929 0 0 0 18.88 6.4 Z M 58.96 1.96 Q 58.96 3.28 57.84 5.62 A 23.895 23.895 0 0 1 57.186 6.895 Q 56.423 8.269 55.72 9 Q 55.56 9.24 55.24 9.24 A 0.833 0.833 0 0 1 54.446 8.762 Q 54.24 8.365 54.24 7.64 Q 54.24 6.332 55.176 4.169 A 25.12 25.12 0 0 1 55.64 3.16 Q 55.92 2.56 56 1.92 A 87.135 87.135 0 0 1 56.028 1.699 Q 56.077 1.32 56.095 1.209 A 0.937 0.937 0 0 1 56.1 1.18 Q 56.12 1.083 56.139 1.023 A 0.646 0.646 0 0 1 56.14 1.02 Q 56.16 0.962 56.179 0.865 A 2.622 2.622 0 0 0 56.18 0.86 Q 56.2 0.763 56.219 0.703 A 0.646 0.646 0 0 1 56.22 0.7 A 0.472 0.472 0 0 1 56.255 0.622 A 0.578 0.578 0 0 1 56.28 0.58 A 0.804 0.804 0 0 1 56.315 0.532 Q 56.338 0.503 56.36 0.48 A 0.278 0.278 0 0 1 56.435 0.448 Q 56.598 0.4 57 0.4 A 1.56 1.56 0 0 1 57.409 0.46 Q 57.785 0.562 58.24 0.84 A 1.913 1.913 0 0 1 58.604 1.123 A 1.154 1.154 0 0 1 58.96 1.96 Z"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </svg>
          </button>
          <div className="flex flex-row">
            {/* Web */}
            <div className="hidden text-lg font-semibold lg:block 2xl:text-3xl">
              <button
                className="mx-2 decoration-yellow-400 decoration-2 hover:underline 2xl:decoration-4"
                onClick={() => props.handleNavbarClick("Home")}
                name="Home"
              >
                Home
              </button>
              <button
                className="mx-2 decoration-yellow-400 decoration-2 hover:underline 2xl:decoration-4"
                onClick={() => props.handleNavbarClick("About")}
                name="About"
              >
                About
              </button>
              <button
                className="mx-2 decoration-yellow-400 decoration-2 hover:underline 2xl:decoration-4"
                onClick={() => props.handleNavbarClick("Resume")}
                name="Resume"
              >
                Resume
              </button>
              <button
                className="mx-2 decoration-yellow-400 decoration-2 hover:underline 2xl:decoration-4"
                onClick={() => props.handleNavbarClick("Projects")}
                name="Projects"
              >
                Projects
              </button>
              <button
                className="mx-2 decoration-yellow-400 decoration-2 hover:underline 2xl:decoration-4"
                onClick={() => props.handleNavbarClick("Contact")}
                name="Contact"
              >
                Contact
              </button>
            </div>
            <div className="me-2 flex items-center">
              {!props.darkMode && (
                <button
                  className="mx-2"
                  onClick={() => props.setDarkMode(true)}
                >
                  <svg
                    className={`h-6 w-6 2xl:h-10 2xl:w-10 ${colorProp.color} opacity-75`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <circle cx="12" cy="12" r="5" />{" "}
                    <line x1="12" y1="1" x2="12" y2="3" />{" "}
                    <line x1="12" y1="21" x2="12" y2="23" />{" "}
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
                    <line x1="1" y1="12" x2="3" y2="12" />{" "}
                    <line x1="21" y1="12" x2="23" y2="12" />{" "}
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </button>
              )}
              {props.darkMode && (
                <button
                  className="mx-2"
                  onClick={() => props.setDarkMode(false)}
                >
                  <svg
                    className="h-6 w-6 text-white opacity-75 2xl:h-10 2xl:w-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </button>
              )}
            </div>
            {/* Mobile */}
            <div className="block lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
              >
                <svg
                  className={`h-8 w-8 ${colorProp.color}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Drawer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            darkMode={props.darkMode}
          >
            <div>
              <button
                className="w-full py-2 text-white decoration-yellow-400 decoration-2 hover:underline"
                onClick={() => {
                  setIsOpen(false);
                  props.handleNavbarClick("Home");
                }}
                name="Home"
              >
                Home
              </button>
              <button
                className="w-full py-2 text-white decoration-yellow-400 decoration-2 hover:underline"
                onClick={() => {
                  setIsOpen(false);
                  props.handleNavbarClick("About");
                }}
                name="About"
              >
                About
              </button>
              <button
                className="w-full py-2 text-white decoration-yellow-400 decoration-2 hover:underline"
                onClick={() => {
                  setIsOpen(false);
                  props.handleNavbarClick("Resume");
                }}
                name="Resume"
              >
                Resume
              </button>
              <button
                className="w-full py-2 text-white decoration-yellow-400 decoration-2 hover:underline"
                onClick={() => {
                  setIsOpen(false);
                  props.handleNavbarClick("Projects");
                }}
                name="Projects"
              >
                Projects
              </button>
              <button
                className="w-full py-2 text-white decoration-yellow-400 decoration-2 hover:underline"
                onClick={() => {
                  setIsOpen(false);
                  props.handleNavbarClick("Contact");
                }}
                name="Contact"
              >
                Contact
              </button>
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
