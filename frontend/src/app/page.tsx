import Header from "@/components/header";
import HeroSubPage from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="col bg-bg">
      <Header/>
      <HeroSubPage/>
    </div>
  );
}
