import About from "@/components/sections/About";
import { Providers } from "./providers";
import Intro from "@/components/sections/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Providers>
        <Intro />
        <About />
      </Providers>
    </main>
  );
}
