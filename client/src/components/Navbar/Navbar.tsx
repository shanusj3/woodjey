import woodjeyy_sm from "../../assets/woodjey_sm.svg";
import woodjeyy_lg from "../../assets/woodjey_lg.svg";
import { GrSearch } from "react-icons/gr";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";
import NavbarSheet from "./NavbarSheet";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import AddToCart from "./AddToCart";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      animate={hidden ? "hidden" : "visible"}
      style={{ background: "white" }}
      className="w-full fixed top-0 z-[9999] "
    >
      <div className="container px-4 ">
        <div className="w-full py-5 ">
          <div className="flex items-center justify-between md:hidden">
            <LogoForMobileScreen />
            <NavLinksForMobile />
          </div>
          <div className="hidden md:flex justify-between items-center">
            <LogoForLargScreens />
            <NavLinksForLargDevices />
            <NavLinksTwoForLargScreen />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;

// items for mobile screen

const LogoForMobileScreen = () => {
  return (
    <div className="flex gap-2 items-center">
      <NavbarSheet />
      <Link to="/" className="">
        <img src={woodjeyy_sm} className="w-8" />
      </Link>
    </div>
  );
};
const NavLinksForMobile = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg cursor-pointer">
        <GrSearch />
      </span>
      <Link to="/" className="text-lg">
        <FaRegHeart />
      </Link>
      <span className="text-lg cursor-pointer">
        <GrCart />
      </span>
    </div>
  );
};

// items for large screens

const LogoForLargScreens = () => {
  return (
    <Link to="/">
      <img src={woodjeyy_lg} className="w-[200px]" />
    </Link>
  );
};

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shope",
    path: "/shope",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavLinksForLargDevices = () => {
  return (
    <div className="lg:flex hidden items-center gap-[42px]">
      {navLinks.map((item, index) => (
        <Link key={index} to={item.path} className="font-secondary text-md">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const NavLinksTwoForLargScreen = () => {
  return (
    <div className="flex items-center gap-[42px]">
      <span className="text-lg cursor-pointer">
        <GrSearch />
      </span>
      <Link to="/profile" className="text-lg">
        <MdOutlinePersonOutline />
      </Link>
      <Link to="/" className="text-lg">
        <FaRegHeart />
      </Link>
      <AddToCart />
    </div>
  );
};
