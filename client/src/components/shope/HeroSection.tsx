import { Link } from "react-router-dom";
import Shope_banner from "../../assets/shope_banner.png";

function HeroSection() {
  return (
    <div className="w-full">
      <div
        className="h-[316px] w-full mt-[90px] flex flex-col items-center justify-center gap-5"
        style={{
          backgroundImage: `url(${Shope_banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-2xl font-bold font-secondary">Shope</h1>
        <span className="flex gap-5 items-center">
          <Link to="/" className="font-secondary font-medium">
            Home
          </Link>
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
