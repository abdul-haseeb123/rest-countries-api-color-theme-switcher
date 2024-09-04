import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import "./globals.css";

const myFont = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor Project",
  description: "rest countries api, frontend mentor project with dark mode",
  openGraph: {
    title: "Frontend Mentor Project",
    description: "rest countries api, frontend mentor project with dark mode",
    siteName: "REST Countries API | Frontend Mentor Project",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-background text-foreground ${myFont.className}`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
