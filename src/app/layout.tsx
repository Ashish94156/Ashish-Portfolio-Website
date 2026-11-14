import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  themeColor: "#070a12",
};

export const metadata: Metadata = {
  title: "Ashish Singh — Data Analyst & Search Quality Specialist",
  description:
    "Portfolio of Ashish Singh — Data Analyst specializing in SQL, Python, Power BI, Excel, and search quality evaluation for AI & machine learning workflows.",
  keywords: [
    "Ashish Singh",
    "Data Analyst",
    "Search Quality Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Data Cleaning",
    "EDA",
    "RWS Group",
    "LPU",
  ],
  authors: [{ name: "Ashish Singh" }],
  openGraph: {
    title: "Ashish Singh — Data Analyst & Search Quality Specialist",
    description:
      "Data Analyst with expertise in SQL, Python, Excel, and Power BI, specializing in search quality evaluation, data cleaning, and actionable visualization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-[#070a12] text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
