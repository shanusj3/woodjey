import Banner_img from "../../assets/hero_img.png";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    <>
      <HeroSectionForLargDivices />
      <HeroSectionForMobileDivices />
    </>
  );
}

export default HeroSection;

const HeroSectionForLargDivices = () => {
  return (
    <div
      className="hidden w-full h-screen md:flex items-center justify-end px-10"
      style={{
        backgroundImage: `url(${Banner_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-rpeat",
      }}
    >
      <div className="py-10 md:max-w-[643px] w-full bg-[#ffeed9] mt-[90px] p-10 flex flex-col gap-3">
        <p className="text-md font-secondary text-[#333333] font-medium tracking-wider">
          New Arrival
        </p>
        <h1 className="text-[52px] font-secondary leading-[60px] font-bold text-main">
          Discover Our <br /> New Collection
        </h1>
        <p className="font-secondary text-md text-third max-w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Button className="mt-7 text-[#ffffff] rounded-none bg-main w-[222px] h-[55px] font-secondary hover:bg-main">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

const HeroSectionForMobileDivices = () => {
  return (
    <div className="w-full md:hidden">
      <div className="px-4 mt-28 relative">
        <img src={Banner_img} className="w-full rounded-lg" />
        <div className="absolute bottom-4  rounded-lg left-8 p-3 bg-[#ffeed9]">
          <p className="text-xs font-secondary text-[#333333] font-medium tracking-wider">
            New Arrival
          </p>
          <h1 className="text-2xl font-secondary  font-bold text-main mt-1">
            Discover Our <br /> New Collection
          </h1>
        </div>
      </div>
      <div className="w-full px-4 mt-5">
        <Button className="w-full bg-main font-secondary hover:bg-main rounded-none">
          Buy Now
        </Button>
      </div>
    </div>
  );
};
