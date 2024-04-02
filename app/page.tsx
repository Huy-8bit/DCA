
import Backer from "@/components/backers";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HighLight from "@/components/highlight";
import JoinUs from "@/components/joinus";
import WhyChooseUs from "@/components/whychooseus";
import PortfolioSlide from "@/app/portfolio/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Banner />
      <HighLight />
      <WhyChooseUs />
      <Backer />
      <PortfolioSlide />
      <JoinUs />
      <Footer isAbsolute />
    </main>
  );
}
