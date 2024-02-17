import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
  title: "Arpit Kumar",
  description: "Arpit Kumar's Portfolio",
  twitter: {
    description: "Arpit Kumar's Portfolio",
    card: "summary_large_image",
  },
  openGraph: {
    title: "Welcome to my portfolio",
    description: "Arpit Kumar's Portfolio",
    images: [
      {
        url: new URL(
          "/assets/images/og-image.jpg",
          `${process.env.NEXT_PUBLIC_DOMAIN}`,
        ).toString(),
        width: 1200,
        height: 630,
        alt: "Arpit Kumar's Portfolio",
      },
    ],
    siteName: "Arpit Kumar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} select-none`}>{children}</body>
    </html>
  );
}
