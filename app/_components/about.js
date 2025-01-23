import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

function About() {
  return (
    <div className="bg-black text-white h-40 px-16 pt-2 flex gap-8">
      <div>
        <h3 className="relative border-b-4 border-lime-500 text-lg w-fit">
          درباره ما:
          <span className="absolute bg-indigo-700 top-7 -right-4 h-1 w-4"></span>
        </h3>
      </div>
      <div className="w-3/5 pt-4">
        <p className="text-justify text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است. <br />{" "}
          از زمانی که صنعت چاپ و با استفاده از طراحان گرافیک به وجود آمد،
          استفاده از متن‌های ساختگی رایج شد. هدف از استفاده از لورم ایپسوم، پر
          کردن صفحات با متن آزمایشی است. <br />
          این متن کمک می‌کند تا توجه مخاطب به طراحی جلب شود و نه محتوای متنی.
          بنابراین، لورم ایپسوم همچنان پرکاربرد باقی مانده است.
        </p>
        <Link href={"#"} className="flex items-center gap-2 text-lime-500">
          {" "}
          <FaAngleLeft />
          بیشتر بخوانید{" "}
        </Link>
      </div>
      <div className="h-full w-1/5 relative">
        <Image
          src={"/images/Fartak_about_logo.png"}
          alt="Fartak"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default About;
