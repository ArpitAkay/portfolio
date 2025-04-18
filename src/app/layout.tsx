import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
  title: "Arpit Kumar",
  description:
    "I’m a backend developer specializing in Java and Spring Boot. I excel in building REST and GraphQL APIs, emphasizing efficient database design and secure implementations for seamless functionality and optimal performance",
  twitter: {
    description: "Arpit Kumar's Portfolio",
    card: "summary_large_image",
  },
  openGraph: {
    title: "Welcome to my portfolio",
    url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    description:
      "I’m a backend developer specializing in Java and Spring Boot. I excel in building REST and GraphQL APIs, emphasizing efficient database design and secure implementations for seamless functionality and optimal performance",
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
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} select-none`}>{children}</body>
    </html>
  );
}
