import { Vazirmatn } from "next/font/google";
import { Lalezar } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
  display: "swap",
});
const lalezar = Lalezar({
  variable: "--font-lalezar",
  subsets: ["arabic"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "ایده مقصد دوم فرتاک",
  description: "این پروژه آزمایشی علی همت میباشد",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={` ${vazirmatn.variable} ${lalezar.variable} font-vazir antialiased  container mx-auto`}
      >
        <header className=" mt-8 max-w-7xl mx-auto">
          <Navbar />
        </header>
        <main className="">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
