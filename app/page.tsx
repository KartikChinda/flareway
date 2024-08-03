import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clock from "./components/Clock";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="bg-white h-[100vh]">
      <Navbar />
      <section className="w-full flex flex-col  justify-center items-center gap-4">
        {/* hero section */}
        <div className="flex justify-between w-[95%] border-2 p-2 mt-10 flex-col xl:flex-row h-[70vh]">
          <div className="w-[60%] border-2">
            <Hero />
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <Clock />
          </div>
        </div>

        {/* Features section */}
        <div className="w-full">
          <Features />
        </div>
      </section>

    </main>
  );
}
