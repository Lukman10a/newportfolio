import About from "@/components/sections/About";
import { Providers } from "./providers";
import Intro from "@/components/sections/intro";
import SectionDivider from "@/components/SectionDivider";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Providers>
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
      </Providers>
    </main>
  );
}
