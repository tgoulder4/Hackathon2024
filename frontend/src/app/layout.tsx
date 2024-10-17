import type { Metadata } from "next";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { applicationName } from "@/app-config";
import { mainFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: applicationName,
  description: "Whackwinnerz' Warwick hackathon project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.className}`} >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
