import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full border-t-[1px] mt-20 border-t-[#9F9F9F]">
      <div className="container px-4 ">
        <div className="w-full grid md:grid-cols-6 grid-cols-2 md:gap-8 gap-5 py-10 ">
          <div className="col-span-2 flex flex-col gap-7 font-primary">
            <h1 className="text-xl font-bold">Woodjey.</h1>
            <p className="text-sm text-[#9F9F9F] max-w-[300px] font-secondary">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="col-span-1 flex flex-col md:gap-7 gap-4">
            <p className="text-md text-[#9F9F9F] font-medium font-secondary">
              Links
            </p>
            <Link to="/" className="text-md font-medium font-secondary">
              Home
            </Link>
            <Link to="/shope" className="text-md font-medium font-secondary">
              Shope
            </Link>
            <Link to="/about" className="text-md font-medium font-secondary">
              About
            </Link>
            <Link to="/contact" className="text-md font-medium font-secondary">
              Contact
            </Link>
          </div>
          <div className="col-span-1 flex flex-col md:gap-7 gap-4">
            <p className="text-md text-[#9F9F9F] font-medium">Help</p>
            <Link to="/" className="text-md font-medium">
              Payment Options
            </Link>
            <Link to="/shope" className="text-md font-medium">
              Returns
            </Link>
            <Link to="/about" className="text-md font-medium">
              Privacy Policies
            </Link>
          </div>
          <div className="col-span-2 flex flex-col md:gap-7 gap-4">
            <p className="text-md text-[#9F9F9F] font-medium">Newsletter</p>
            <div className="w-full flex gap-3">
              <input
                type="text"
                className="w-full border-b-2 border-b-[#9F9F9F] p-1 outline-none font-secondary"
                placeholder="Enter Your Email Address"
              />
              <button className="p-1   border-b-2 border-b-[#9F9F9F] font-medium font-secondary">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:py-10 py-5 border-t-[1px] border-t-[#9F9F9F]">
          <p className="text-sm font-light max-w-[300px] font-secondary ">
            2024 woodjey. All rights reverved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
