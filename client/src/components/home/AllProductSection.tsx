import { Link } from "react-router-dom";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import Image6 from "../../assets/Image6.png";
import Image7 from "../../assets/Image7.png";
import Image8 from "../../assets/Image8.png";
import ProductsCard from "./ProductsCard";

const products = [
  {
    title: "Potty",
    description: "Minimalist flower pot",
    price: 500,
    image: Image8,
  },
  {
    title: "Syltherine",
    description: "Luxury big sofa",
    price: 7000,
    image: Image3,
  },
  {
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: 5000,
    image: Image4,
  },
  {
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500,
    image: Image2,
  },
  {
    title: "Grifo",
    description: "Night lamp",
    price: 1500,
    image: Image5,
  },
  {
    title: "Muggo",
    description: "Small mug",
    price: 150,
    image: Image6,
  },
  {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500,
    image: Image1,
  },
  {
    title: "Pingky",
    description: "Cute bed set",
    price: 7000,
    image: Image7,
  },
];

function AllProductSection() {
  return (
    <div className="w-full container px-4 ">
      <div className="w-full flex flex-col justify-center items-center mt-8 md:mt-12">
        <div>
          <h1 className="md:text-4xl text-xl text-[#333333] font-bold md:py-6  py-3">
            Our Products
          </h1>
        </div>
        <AllProductForLargerScreen />
        <AllProductForSmallerScreen />
      </div>
    </div>
  );
}

export default AllProductSection;

const AllProductForLargerScreen = () => {
  return (
    <div className="w-full min-h-screen md:flex flex-col items-center hidden">
      <div className="w-full grid md:grid-cols-4 gap-8 grid-cols-2">
        {products.map((product, index) => (
          <ProductsCard
            key={index}
            description={product.description}
            image={product.image}
            index={index}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
      <Link
        to="/products"
        className=" mt-10 bg-main text-[#ffffff] p-2 w-[150px] flex items-center justify-center font-secondary"
      >
        Show more
      </Link>
    </div>
  );
};

const AllProductForSmallerScreen = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-5 md:hidden">
      {products.map((product, index) => (
        <ProductsCard
          key={index}
          description={product.description}
          image={product.image}
          index={index}
          price={product.price}
          title={product.title}
        />
      ))}
    </div>
  );
};
