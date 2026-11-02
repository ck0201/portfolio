import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Chandan Gupta | Senior Full-Stack .NET & AI Systems Engineer",
  description:
    "Portfolio of Chandan Gupta (Software Engineer III). Architecting high-throughput .NET Core microservices, real-time voice streaming with WebRTC, and LLM-powered enterprise workflows.",
  keywords: [
    "Chandan Gupta",
    ".NET Developer",
    "Senior .NET Developer",
    "AI Systems Engineer",
    "Full Stack .NET Developer",
    "Angular",
    "C#",
    "ASP.NET Core",
    "LiveKit",
    "WebRTC",
    "RAG",
    "LLM Integration",
    "SQL Server",
  ],
  authors: [{ name: "Chandan Gupta" }],
  openGraph: {
    title: "Chandan Gupta | Senior Full-Stack .NET & AI Systems Engineer",
    description:
      "Architecting high-throughput distributed microservices, real-time voice streaming platforms, and LLM-powered backend workflows.",
    type: "website",
    url: "https://ck0201.github.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#030712] text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
