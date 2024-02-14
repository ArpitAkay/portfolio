import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "version-control": "url('../../src/svg/version_control.svg')",
        "source-code": "url('../../src/svg/source_code.svg')",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(50px, 1fr))",
        "auto-fill-exp": "repeat(auto-fill, minmax(500px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
