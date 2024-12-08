import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import "../lib/fontawesome"
import Header1 from "./components1/header1";
import StickyBar from "./components1/stickybar";
import Footer1 from "./components1/footer1";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <StickyBar/>
        <Header1/>
        <main>
        {children}
        </main>
        <Footer1/>
      </body>
    </html>
  );
}