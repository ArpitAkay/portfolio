import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  openGraph: {
    siteName: "LinkedIn",
  },
};

const page = () => {
  redirect("https://www.linkedin.com/in/arpit-kumar-5a26201b4/");
};

export default page;
