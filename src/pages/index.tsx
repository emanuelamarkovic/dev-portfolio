import { Header } from "@/components/Header";
import About from "@/components/About";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <main>
        <div>
          <Header />
          <HomeSection />
          <About />
          <ProjectSection />
        </div>
      </main>
    </>
  );
}
