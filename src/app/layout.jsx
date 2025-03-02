import { Geist, Geist_Mono, Roboto } from "next/font/google";


import "./globals.css";
import Header from "./components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });


export const metadata = {
  title: "Portfolio",
  description: "A portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <div className="bg-gray-900 w-full h-full lg:h-screen">
          <Header />
        {children}
        </div>
      </body>
    </html>
  );
}
