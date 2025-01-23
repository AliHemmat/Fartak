import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
function Navbar() {
  return (
    <nav className="w-full relative pt-6">
      <ul className="flex bg-gray-300 items-center justify-between h-12 ">
        <div className="absolute top-6 right-20 w-0 h-0 border-l-[24px] border-l-transparent border-t-[48px] border-t-white"></div>
        <div className="flex flex-shrink-0 ml-8">
          <Image
            src={"/images/Fartak_logo.png"}
            width={80}
            height={80}
            alt="logo"
            className="pb-8 z-10  bg-white"
          />
          <li className="flex flex-col items-center justify-center text-purple-700 font-lalezar px-8 flex-shrink-0">
            <p className="absolute top-0">ایده مقصد دوم</p>
            <p className="text-5xl">فرتاک</p>
          </li>
        </div>
        <div className="flex grow items-center justify-between">
          <li>
            <Link href={"#"}>خانه</Link>
          </li>
          <li>
            <Link href={"#"}>خدمات ما</Link>
          </li>
          <li>
            <Link href={"#"}>درباره ما</Link>
          </li>
          <li className="border-b-4 border-purple-700">
            <Link href={"#"}>مقالات</Link>
          </li>
          <li>
            <Link href={"#"}>تماس با ما</Link>
          </li>
          <li className="ml-4">
            <FaWhatsapp
              fill="green"
              className="bg-white rounded-full w-8 h-8"
            />
          </li>
        </div>
        <div className="flex-shrink-0">
          <li className="flex bg-purple-700 text-white gap-x-2 px-2 items-center h-12">
            <FaMagnifyingGlass className="rotate-90 w-6 h-6" />
            <input
              type="text"
              className="bg-purple-300 rounded-full px-2 pb-1 placeholder-white"
              placeholder="جستجو"
            />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
