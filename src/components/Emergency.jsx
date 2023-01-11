import React from "react";
import EmergencyCont from "./modals/EmergencyCont";

const Emergency = ({ user }) => {
  return (
    <div>
      <div className="mt-10">
        <div>
          <div className="flex w-[500px] h-[46px] bg-[#E6F0FF] ml-[18px]">
            <p className="ml-[16px] mt-[8px] w-[450px] h-[30px] font-[700] text-[20px] leading-[150%] tracking-[-0.005em] text-[#272727]">
              Emergency Contact
            </p>
            <EmergencyCont />
          </div>
        </div>
        <div className="flex mt-[16px] ml-[32px]">
          <div className="w-[116px] h-[24px] text-[#4E5255] text-[15.4px] leading-[150%] tracking-[-0.005em]">
            Name
          </div>
          <div className="w-[4px] h-[24px] ml-[63px] font-semibold text-[15px] leading-[150%] tracking-[-0.005em]">
            :
          </div>
          <div className="w-[224px] h-[24px] text-[#1D2123] ml-[45px] text-[15px] leading-[150%] tracking-[-0.005em]">
            {user?.emergencyName}
          </div>
        </div>
        <div className="flex mt-[16px] ml-[32px]">
          <div className="w-[116px] h-[24px] text-[#4E5255] text-[15.4px] leading-[150%] tracking-[-0.005em]">
            Relationship
          </div>
          <div className="w-[4px] h-[24px] ml-[63px] font-semibold text-[15px] leading-[150%] tracking-[-0.005em]">
            :
          </div>
          <div className="w-[100px] h-[24px] text-[#1D2123] ml-[45px] text-[15px] leading-[150%] tracking-[-0.005em]">
            {user?.relation}
          </div>
        </div>
        <div className="flex mt-[16px] ml-[32px]">
          <div className="w-[116px] h-[24px] font-[500] text-[#4E5255] text-[15.4px] leading-[150%] tracking-[-0.005em]">
            Phone
          </div>
          <div className="w-[4px] h-[24px] ml-[63px] font-semibold text-[15px] leading-[150%] tracking-[-0.005em]">
            :
          </div>
          <div className="w-[100px] h-[24px] text-[#1D2123] ml-[45px] text-[15px] leading-[150%] tracking-[-0.005em]">
            {user?.emergencyNum}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
