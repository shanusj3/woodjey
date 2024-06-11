import { Link } from "react-router-dom";
import Image1 from "../../assets/Rectangle1.png";
import Image2 from "../../assets/Rectangle2.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function InspirationSection() {
  return (
    <div className=" py-8 mt-20 bg-[#FCF8F3]">
      <InspirationSectionForLargerScreen />
      <InspirationSectionForSmallerDevises />
    </div>
  );
}

export default InspirationSection;

const InspirationSectionForLargerScreen = () => {
  return (
    <div className="w-full hidden md:grid gird-cols-1 md:grid-cols-4  py-4 gap-8 container px-4">
      <div className="md:col-span-2 col-span-1 flex flex-col gap-6 justify-center">
        <h1 className="text-4xl font-bold text-[#3A3A3A] font-secondary">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="font-secondary text-md text-[#616161] max-w-[450px]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Link
          to="/products"
          className=" bg-main text-[#ffffff] p-4 w-[200px] flex items-center justify-center font-secondary"
        >
          Explore more
        </Link>
      </div>
      <div className="col-span-1 relative">
        <img src={Image1} className="w-full" />
        <div className=" flex absolute bottom-5 left-5 items-end">
          <div className="p-5 flex flex-col gap-2 bg-[#ffffff]">
            <p className="text-[#616161] font-semibold font-secondary">
              01 - Bed Room
            </p>
            <h1 className="text-2xl font-bold text-[#3A3A3A]">Inner Peace</h1>
          </div>
          <div className="p-2 bg-main text-[#ffffff]">
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
      <div className="col-span-1 hidden md:block">
        <img src={Image2} className="w-full" />
      </div>
    </div>
  );
};

const InspirationSectionForSmallerDevises = () => {
  return (
    <div className="w-full  container px-4 grid grid-cols-2 md:hidden">
      <div className="col-span-2  flex flex-col items-center gap-5 justify-center">
        <h1 className="text-3xl font-bold text-[#3A3A3A] font-secondary text-center">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="font-secondary text-md text-[#616161] text-center">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Link
          to="/products"
          className=" bg-main text-[#ffffff] p-2 w-[200px] flex items-center justify-center font-secondary"
        >
          Explore more
        </Link>
      </div>
    </div>
  );
};
