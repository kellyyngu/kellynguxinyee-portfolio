import Header from "@/components/header"; // @ is easier than using dot dot dot or slash which is complicated
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import BackgroundEffects from "@/components/background-effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kelly Ngu | Personal Portfolio",
  description:
    "Kelly Ngu — Computer Science with AI student at the University of Nottingham. Interested in full-stack development, machine learning, and research-driven projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative min-h-screen pt-20`}
      >
        <BackgroundEffects />
        <div className="bg-[#ffd8b9] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div
          className="bg-[#ffcebc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
                        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "
        ></div>

        <ActiveSectionContextProvider>
          <Header />
          <main className="pt-6">{children}</main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
