import Features from "@/components/home/Featured";
import Gallery from "@/components/home/Gallary";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/NewsLetter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Gallery />
      <Newsletter />
    </div>
  );
}
