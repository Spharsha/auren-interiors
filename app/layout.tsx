import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auren Interiors | Chennai (Demo)",
  description:
    "Demo interior design studio website with project gallery, services and a budget estimator. Sample content.",
};

export const viewport: Viewport = {
  themeColor: "#f7f1e6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
