import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/navbars/Navbar";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.otf",
      weight: "800",
      style: "normal",
    },
  ],
  // add a fallback font
});

export const metadata: Metadata = {
  title: "Your Project Name | Creative Web Solutions",
  description: "High-quality web design services optimized for conversions and SEO.",
  keywords: ["Web Design", "SEO", "Conversions", "Satoshi Font", "Next.js"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Your Project Name",
    description: "High-quality web design services optimized for conversions and SEO.",
    url: "https://yourwebsite.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Project Name",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
