import { GoogleTagManager } from "@next/third-parties/google";

import { Roboto } from "next/font/google";
import "./globals.css";

import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Globetek",
  description:
    "Bite Sized articles for Marketing and Nodejs, NextJs Enthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-RS68JLD91M" />
      <body className={roboto.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
