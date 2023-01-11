import React from "react";
import EmpList from "./EmpList";

const Dashboard = () => {
  return (
    <>
      <EmpList>
        <div className="ml-[280px] pt-[122px]">
          <div className="w-96 ml-96 border-4 border-gray-400 p-10">
            <p className="text-xl font-bold -mt-5 mb-5 ml-24">Dashboard</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            possimus quibusdam eius necessitatibus libero error tempora hic!
            Autem, incidunt aliquid!
          </div>
        </div>
      </EmpList>
    </>
  );
};

export default Dashboard;
