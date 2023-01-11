import React from "react";
import Assets from "./modals/Assets";

const EmpAssets = ({ user }) => {
  return (
    <div>
      <div>
        <div className="mt-10 flex w-[500px] h-[46px] bg-[#E6F0FF] ml-[18px]">
          <p className="ml-4 mt-2 w-[450px] h-[30px] font-bold text-xl leading-6 tracking-[-0.005em] text-[#272727]">
            Employee Assets
          </p>
          <Assets />
        </div>
        <div className="flex mt-[16px] ml-[32px]">
          <div className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-[150%] tracking-[-0.005em]">
            Device Brand
          </div>
          <div className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-[150%] tracking-[-0.005em]">
            :
          </div>
          <div className="w-[224px] h-6 text-[#1D2123] ml-[45px] text-[15px] leading-[150%] tracking-[-0.005em]">
            {user?.device}
          </div>
        </div>
        <div className="flex mt-[16px] ml-[32px]">
          <div className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-[150%] tracking-[-0.005em]">
            Model
          </div>
          <div className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-[150%] tracking-[-0.005em]">
            :
          </div>
          <div className="w-[224px] h-6 text-[#1D2123] ml-[45px] text-[15px] leading-[150%] tracking-[-0.005em]">
            {user?.model}
          </div>
        </div>
        <div className="flex mt-[16px] ml-[32px]">
          <div className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-[150%] tracking-[-0.005em]">
            Serial Number
          </div>
          <div className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-[150%] tracking-[-0.005em]">
            :
          </div>
          <div className="w-[224px] h-6 text-[#1D2123] ml-[45px] text-[15px] leading-[150%] tracking-[-0.005em]">
            {user?.serialNum}
          </div>
        </div>
        <div className="flex mt-[16px] ml-[32px]">
          <div className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-[150%] tracking-[-0.005em]">
            Accessories
          </div>
          <div className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-[150%] tracking-[-0.005em]">
            :
          </div>
          <div className="w-[224px] h-6 text-[#1D2123] ml-[45px] text-[15px] leading-[150%] tracking-[-0.005em]">
            {user?.accessories}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpAssets;
