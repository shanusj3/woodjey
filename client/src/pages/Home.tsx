import AllProductSection from "@/components/home/AllProductSection";
import Categories from "@/components/home/Categories";
import HeroSection from "@/components/home/HeroSection";
import InspirationSection from "@/components/home/InspirationSection";
import ShareSection from "@/components/home/ShareSection";

function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <Categories />
      <AllProductSection />
      <InspirationSection />
      <ShareSection />
    </div>
  );
}

export default Home;
