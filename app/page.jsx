import Hero from "./lib/home/hero";
import HowItWorks from "./lib/home/howItWorks";
import OurCollection from "./lib/home/ourCollection";
import WhyChooseUs from "./lib/home/whyChooseUs";
import MarginWrapper from "./lib/layout/marginWrapper";

export default function Home() {
  return (
    <main>
      <MarginWrapper>
        <Hero/>
        <OurCollection/>
        <WhyChooseUs/>
        <HowItWorks/>
      </MarginWrapper>
    </main>
  );
}
