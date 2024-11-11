import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BPCL Geolocation Form",
  description:
    "This is a custom form used for BPCL's assets' location tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
