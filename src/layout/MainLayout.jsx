import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Menyu from "../components/Menyu";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <div className="flex justify-between w-full">
        <Navbar />
        <div className="px-[250px] bg-[#121212] min-h-[100vh] w-full">
        <Outlet />
        </div>
        <Menyu />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
