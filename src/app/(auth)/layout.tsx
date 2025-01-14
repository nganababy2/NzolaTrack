import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { MainNavigation, Footer } from "@/components/";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-[12px_80px]`}
      >
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
