import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full min-h-screen ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
