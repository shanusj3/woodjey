import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { IoShareSocial } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

type ProductCardProps = {
  index: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

const divAnim = {
  rest: {
    display: "none",
    opacity: 0,
  },
  hover: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function ProductsCard({
  description,
  image,
  index,
  price,
  title,
}: ProductCardProps) {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [isWhishList, _setIsWhishList] = useState(false);
  return (
    <div
      key={index}
      className="col-span-1 bg-[#F4F5F7] relative"
      onMouseEnter={() => setVisibleIndex(index)}
      onMouseLeave={() => setVisibleIndex(null)}
    >
      <motion.div
        variants={divAnim}
        initial="rest"
        animate={visibleIndex === index ? "hover" : "rest"}
        className="absolute bg-[#3a3a3abb] w-full h-full flex flex-col gap-6 items-center justify-center p-2 md:p-4"
      >
        <Button className="bg-[#ffffff] text-main font-secondary p-2 px-4 md:px-8 font-semibold rounded-none hover:bg-[#ffffff]">
          Add to cart
        </Button>
        <div className="flex items-center gap-6 justify-center">
          <span className="flex items-center text-sm font-semibold font-secondary text-[#ffffff] gap-1 ">
            <span className="text-md font-medium text-[#ffffff]">
              <IoShareSocial />
            </span>
            Share
          </span>
          <span className="flex items-center text-sm font-semibold font-secondary text-[#ffffff] gap-1 ">
            {isWhishList ? (
              <span className="text-md font-medium text-[#de2b2b]">
                <FaHeart />
              </span>
            ) : (
              <span className="text-md font-medium text-[#ffffff]">
                <FaRegHeart />
              </span>
            )}
            Whishlist
          </span>
        </div>
      </motion.div>

      <img src={image} className="w-full" />
      <div className="px-4 pt-2 pb-4 flex flex-col gap-1">
        <h1 className="font-primary font-bold text-[#3A3A3A]">{title}</h1>
        <p className="text-xs text-[#898989] group-hover:text-[#d51d1d]">
          {description}
        </p>
        <p className="text-md font-bold tex-[#3A3A3A]">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductsCard;
