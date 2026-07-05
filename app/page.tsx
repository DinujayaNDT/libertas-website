import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { WhyLibertas } from "@/components/sections/WhyLibertas";
import { Expertise } from "@/components/sections/Expertise";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { HomePreviews } from "@/components/sections/HomePreviews";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <Benefits />
      <WhyLibertas />
      <Expertise />
      <Industries />
      <Process />
      <HomePreviews />
      <CTA />
    </main>
  );
}
