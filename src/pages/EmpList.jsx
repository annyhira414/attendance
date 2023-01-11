import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const EmpList = (props) => {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="w-[280px] fixed sidebar bg-[#F9FBFF] border border-[#E6F0FF]">
        <Sidebar />
      </div>
      <div className="ml-[280px] fixed z-10 w-full">
        <Navbar />
      </div>
      {props.children}
    </div>
  );
};

export default EmpList;
