import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WallClock from "./components/WallClock";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <section className="w-full flex flex-col  justify-center items-center gap-4">
        {/* hero section */}
        <div className="flex justify-between w-[95%] p-2 mt-10 flex-col xl:flex-row xl:h-[70vh]">
          <div className="xl:w-[60%] ">
            <Hero />
          </div>
          <div className="xl:w-[40%] flex justify-center items-center p-2">
            <WallClock />
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
