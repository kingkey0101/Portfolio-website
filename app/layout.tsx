import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keylanking.dev"),
  title: "Keylan King — Frontend Developer",
  description:
    "Modern, performant web experiences built with Next.js, React, TypeScript, and Tailwind.",
  icons: {
    icon: [{ url: "/kklogo.png", type: "image/png" }],
    apple: "/kklogo.png",
  },
  openGraph: {
    type: "website",
    url: "https://keylanking.dev/",
    title: "Keylan King — Frontend Developer",
    description:
      "Modern, performant web experiences built with Next.js, React, TypeScript, and Tailwind.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Keylan King — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keylan King — Frontend Developer",
    description:
      "Modern, performant web experiences built with Next.js, React, TypeScript, and Tailwind.",
    images: ["/twitter-image.png"],
    creator: "@keylanking",
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
        <link rel="icon" href="/kklogo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
