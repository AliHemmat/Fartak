import Image from "next/image";

function Hero() {
  return (
    <section className="w-full h-96 relative">
      <Image
        src={"/images/hero2.jpg"}
        fill
        className="object-cover z-10"
        alt="hero"
      />
      <div
        className="absolute top-0 right-0 filter bg-black opacity-80 h-full w-2/5 z-20"
        style={{
          clipPath: "polygon(20% 00%, 100% 00%, 100% 100%, 20% 100%,00% 50%)",
        }}
      ></div>
      <div className="z-30 absolute text-justify top-1/4 pr-16">
        <h1 className="z-30 text-white text-5xl h-full font-vazir font-light mb-8">
          یک
          <span className="text-purple-700 font-semibold"> مشاور خوب </span>
          <br />
          <span className="text-lime-500  font-semibold"> ارزشــمند </span>
          است.
        </h1>
        <div
          className="relative bg-purple-800 text-white font-bold w-48 h-32 flex items-end justify-center rounded-lg pb-8 text-lg"
          style={{
            clipPath: "polygon(15% 00%, 100% 00%, 100% 100%, 15% 100%,00% 50%)",
          }}
        >
          مشاوره و ارزیابی &#187;
        </div>
      </div>
    </section>
  );
}

export default Hero;
