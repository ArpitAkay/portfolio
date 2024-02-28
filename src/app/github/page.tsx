import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  openGraph: {
    siteName: "Github",
  },
};

const page = () => {
  redirect("https://github.com/ArpitAkay");
};

export default page;
