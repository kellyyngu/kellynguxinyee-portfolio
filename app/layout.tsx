import Header from "@/components/header"; // @ is easier than using dot dot dot or slash which is complicated
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import BackgroundEffects from "@/components/background-effects";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Kelly Ngu Xin Yee | Personal Portfolio",
  description:
    "Kelly Ngu Xin Yee — Computer Science with AI student at the University of Nottingham. Interested in full-stack development, machine learning, and research-driven projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="!scroll-smooth">
      <body
        className={`${manrope.variable} ${playfair.variable} font-sans relative min-h-screen pt-20 text-slate-900`}
      >
        <BackgroundEffects />

        <ActiveSectionContextProvider>
          <Header />
          <main className="pt-6">{children}</main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
