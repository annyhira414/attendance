import React from "react";
import PersonalData from "./modals/PersonalData";
import Contact from "./modals/Contact";

const PersonalInfo = ({ user }) => {
  return (
    <div>
      <div>
        <div>
          <div className="flex w-[500px] h-[46px] bg-[#E6F0FF] ml-[18px]">
            <p className="ml-4 mt-2 w-[450px] h-[30px] font-bold text-xl leading-6 tracking-[-0.005em] text-[#272727]">
              Personal Data
            </p>
            <PersonalData />
          </div>
        </div>
        <div className="flex mt-4 ml-8">
          <p className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-6 tracking-[-0.005em]">
            Date of Birth
          </p>
          <p className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-6 tracking-[-0.005em]">
            :
          </p>
          <p className="w-[90px] h-6 text-[#1D2123] ml-[43px] text-[15px] leading-6 tracking-[-0.005em]">
            {user?.bd}
          </p>
        </div>
        <div className="flex mt-4 ml-8">
          <p className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-6 tracking-[-0.005em]">
            NID Number
          </p>
          <p className="w-1 h-6 ml-[63px] text-[15px] font-semibold leading-6 tracking-[-0.005em]">
            :
          </p>
          <p className="w-[90px] h-6 text-[#1D2123] ml-[43px] text-[15px] leading-6 tracking-[-0.005em]">
            {user?.nid}
          </p>
        </div>
        <div className="flex mt-4 ml-8">
          <p className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-6 tracking-[-0.005em]">
            Gender
          </p>
          <p className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-6 tracking-[-0.005em]">
            :
          </p>
          <p className="w-[90px] h-6 text-[#1D2123] ml-[45px] text-[15px] leading-6 tracking-[-0.005em]">
            {user?.gender}
          </p>
        </div>
        <div className="flex mt-4 ml-8">
          <p className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-6 tracking-[-0.005em]">
            Father's Name
          </p>
          <p className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-6 tracking-[-0.005em]">
            :
          </p>
          <p className="w-[135px] h-6 text-[#1D2123] ml-[45px] text-[15px] leading-6 tracking-[-0.005em]">
            {user?.father}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div>
          <div className="flex w-[500px] h-[46px] bg-[#E6F0FF] ml-[18px]">
            <p className="ml-4 mt-2 w-[450px] h-[30px] font-bold text-xl leading-6 tracking-[-0.005em] text-[#272727]">
              Contact Details
            </p>
            <Contact />
          </div>
        </div>
        <div className="flex mt-4 ml-8">
          <p className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-6 tracking-[-0.005em]">
            Phone
          </p>
          <p className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-6 tracking-[-0.005em]">
            :
          </p>
          <p className="w-56 h-6 text-[#1D2123] ml-[45px] text-[15px] leading-6 tracking-[-0.005em]">
            {user?.othernum}
          </p>
        </div>
        <div className="flex mt-4 ml-8">
          <p className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-6 tracking-[-0.005em]">
            Personal E-mail
          </p>
          <p className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-6 tracking-[-0.005em]">
            :
          </p>
          <p className="w-[128px] h-6 text-[#1D2123] ml-[45px] text-[15px] leading-6 tracking-[-0.005em]">
            {user?.personalmail}
          </p>
        </div>
        <div className="flex mt-4 ml-8">
          <p className="w-[116px] h-6 text-[#4E5255] text-[15.4px] leading-6 tracking-[-0.005em]">
            Present Address
          </p>
          <p className="w-1 h-6 ml-[63px] font-semibold text-[15px] leading-6 tracking-[-0.005em]">
            :
          </p>
          <p className="w-[280px] h-6 text-[#1D2123] ml-[45px] text-[15px] leading-6 tracking-[-0.005em]">
            {user?.preAdd}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
