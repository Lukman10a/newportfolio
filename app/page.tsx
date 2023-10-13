import About from "@/components/sections/About";
import { Providers } from "./providers";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Providers>
        <About />
      </Providers>
    </main>
  );
}
