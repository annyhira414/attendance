import React from "react";
import { Link, NavLink } from "react-router-dom";
import Misfit from "/src/assets/logo/Misfit.svg";
import { HiViewGrid } from "react-icons/hi";
import { MdGroup } from "react-icons/md";

// for Dropdown
//import { DownOutlined } from "@ant-design/icons";
//import type { MenuProps } from 'antd';
//import { Dropdown, Space } from "antd";

const sidebar = () => {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto pb-10">
      {activeMenu && (
        <>
          <div>
            <img className="h-[42px] ml-[65px] mt-[60px]" src={Misfit} />
          </div>
          <div className="mt-[100px]">
            <NavLink to={"/"}>
              <div className="group flex w-[252px] h-14 hover:bg-[#E6F0FF]">
                <HiViewGrid className="ml-[58px] mt-[15px] group-hover:text-[#0065FF] text-[#4E5256] w-6 h-6" />
                <p className="mt-3.5 ml-2 font-semibold text-[#4E5256] mb-[35px] text-[18px] group-hover:text-[#0065FF]">
                  Dashboard
                </p>
              </div>
            </NavLink>
            <NavLink to={"/cards"}>
              <div className="group flex w-[252px] h-14 hover:bg-[#E6F0FF]">
                <MdGroup className="ml-[58px] mt-[15px] group-hover:text-[#0065FF] text-[#4E5256] w-6 h-6" />
                <p className="mt-3.5 ml-2 font-semibold text-[#4E5256] mb-[35px] text-[18px] group-hover:text-[#0065FF]">
                  Employee List
                </p>
              </div>
            </NavLink>
            <NavLink to={"/attendances"}>
              <div className="group flex w-[252px] h-14 hover:bg-[#E6F0FF]">
                <HiViewGrid className="ml-[58px] mt-[15px] group-hover:text-[#0065FF] text-[#4E5256] w-6 h-6" />
                <p className="mt-3.5 ml-2 font-semibold text-[#4E5256] mb-[35px] text-[18px] group-hover:text-[#0065FF]">
                  Attendance
                  {/* <Dropdown.Button
                    icon={<DownOutlined />}
                    // loading={loadings[1]}
                    // menu={{ items }}
                    //onClick={() => enterLoading(1)}
                  >
                    Submit
                  </Dropdown.Button> */}
                </p>
              </div>
            </NavLink>
            <NavLink to={"/leaveform"}>
              <div className="group flex w-[252px] h-14 hover:bg-[#E6F0FF]">
                <HiViewGrid className="ml-[58px] mt-[15px] group-hover:text-[#0065FF] text-[#4E5256] w-6 h-6" />
                <p className="mt-3.5 ml-2 font-semibold text-[#4E5256] mb-[35px] text-[18px] group-hover:text-[#0065FF]">
                  Leave
                </p>
              </div>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default sidebar;
