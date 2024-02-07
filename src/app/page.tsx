import About from "@/components/About";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import version_control from "../svg/version_control.svg";

export default function Home() {
  return (
    <div className="h-svh w-svw overflow-y-scroll bg-slate-900">
      {/* Navbar */}
      <section className="fixed left-0 top-0 h-16 w-full overflow-hidden md:h-20 lg:h-24 xl:h-28 2xl:h-32">
        <Navbar />
      </section>
      {/* Home */}
      <section
        id="homepage"
        className="background mt-28 flex w-full flex-row justify-center bg-center bg-no-repeat opacity-90 md:bg-top xl:h-[40%] 2xl:h-[95%] 2xl:bg-cover 2xl:bg-center"
        style={{
          backgroundImage: `url(${version_control.src})`,
        }}
      >
        <HomePage />
      </section>
      {/* About */}
      <section className="mt-20 flex w-full flex-row justify-center">
        <About />
      </section>
    </div>
  );
}
