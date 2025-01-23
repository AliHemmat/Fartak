import Image from "next/image";
import Hero from "./_components/hero";
import About from "./_components/about";
import Universities from "./_components/universities";
import Services from "./_components/services";
import Testimonials from "./_components/testimonials";
import Card from "./_components/card";
import Carousel from "./_components/carousel";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Universities />
      <Services />
      <div className="grid grid-cols-2 grid-rows-2">
        <Testimonials />
        <Card variation="simple" />
        <Card variation="simple" />
      </div>
      <div className="flex">
        <Card variation="essays" />
      </div>
      <div className="flex">
        <Carousel />
        <Carousel />
      </div>
    </div>
  );
}
