import Hero from "./lib/home/hero";
import HowItWorks from "./lib/home/howItWorks";
import OurCollection from "./lib/home/ourCollection";
import WhyChooseUs from "./lib/home/whyChooseUs";

export default function Home() {
  return (
    <main>

      <Hero/>
      <OurCollection/>
      <WhyChooseUs/>
      <HowItWorks/>

    </main>
  );
}
