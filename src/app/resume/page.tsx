import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  openGraph: {
    siteName: "Resume",
  },
};

const page = () => {
  redirect(`${process.env.NEXT_PUBLIC_DOMAIN}cv.pdf`);
};

export default page;
