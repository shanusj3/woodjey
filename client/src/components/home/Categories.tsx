import Catergory_1 from "../../assets/category_1.png";
import Catergory_2 from "../../assets/category_2.png";
import Catergory_3 from "../../assets/category_3.png";

function Categories() {
  return (
    <div className="w-full container px-4   flex flex-col items-center justify-center mt-8 md:mt-12">
      <div>
        <h1 className="md:text-4xl text-xl text-[#333333] font-bold md:py-6  py-3">
          Categories
        </h1>
      </div>
      <CategoriesSectionForLargDevices />
      <CategoriesSectionForMobileDevices />
    </div>
  );
}

export default Categories;

const CategoriesSectionForLargDevices = () => {
  return (
    <div className="w-full md:grid grid-col-1 md:grid-cols-3 gap-8 hidden">
      <div>
        <div className="col-span-1 rounded-lg overflow-hidden cursor-pointer">
          <img src={Catergory_1} className="w-full" />
        </div>
        <h1 className="text-center mt-3 text-lg font-bold text-[#3A3A3A]">
          Dining
        </h1>
      </div>
      <div>
        <div className="col-span-1  rounded-lg overflow-hidden cursor-pointer">
          <img src={Catergory_2} className="w-full" />
        </div>
        <h1 className="text-center mt-3 text-lg font-bold text-[#3A3A3A]">
          Living
        </h1>
      </div>
      <div>
        <div className="col-span-1  rounded-lg overflow-hidden cursor-pointer">
          <img src={Catergory_3} className="w-full" />
        </div>
        <h1 className="text-center mt-3 text-lg font-bold text-[#3A3A3A]">
          Bedroom
        </h1>
      </div>
    </div>
  );
};

const CategoriesSectionForMobileDevices = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-3 md:hidden">
      <div>
        <div className="col-span-1 rounded-lg overflow-hidden">
          <img src={Catergory_1} className="w-full" />
        </div>
        <h1 className="text-center mt-1 text-md font-medium text-[#333333]">
          Dining
        </h1>
      </div>
      <div>
        <div className="col-span-1 rounded-lg overflow-hidden">
          <img src={Catergory_2} className="w-full" />
        </div>
        <h1 className="text-center mt-1 text-md font-medium text-[#333333]">
          Living
        </h1>
      </div>
      <div>
        <div className="col-span-1 rounded-lg overflow-hidden">
          <img src={Catergory_3} className="w-full" />
        </div>
        <h1 className="text-center mt-1 text-md font-medium text-[#333333]">
          Bedroom
        </h1>
      </div>
    </div>
  );
};
