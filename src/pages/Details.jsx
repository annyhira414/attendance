import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Employee from "/src/assets/images/emp.svg";
import EmpDetails from "../components/EmpDetails";
import { RiPhoneFill } from "react-icons/ri";
import DeleteUser from "../components/modals/DeleteUser";
import EmpList from "./EmpList";

const Details = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(res.data);
  };
  return (
    <>
      <EmpList>
        <div className="ml-[280px] pt-[122px]">
          <div className="flex justify-between mt-[32px] ml-[64px]">
            <p className="w-[278px] h-[48px] font-bold text-[#1D2123] text-[32px] leading-[48px] tracking-[-0.005em]">
              Employee Details
            </p>
            <Link>
              <DeleteUser />
            </Link>
          </div>
          <div className="pb-10 gap-[20px] flex ml-[64px] mt-[18px]">
            <div className="flex w-[400px] h-[548px] bg-[#FFFFFF] border rounded-[6px] border-[#EAEAEB] ">
              <img
                className="ml-[16px] mt-[24px] w-[120px] h-[120px] border border-[#E6F0FF] rounded-[6px]"
                src={Employee}
                alt="emp"
              />
              <div>
                <p className="ml-[16px] mt-[28px] text-[#1D2123] w-[224px] font-[700] text-[18px] tracking-[-0.005em] leading-[150%]">
                  {user?.name}
                </p>
                <p className="w-[224px] h-[21px] ml-[16px] mt-[8px] font-[400] text-[15px] leading-[150%] tracking-[-0.005em] text-[#4E5255]">
                  {user?.email}
                </p>
                <div className="flex">
                  <RiPhoneFill className="ml-[19px] mt-[12px] text-[#0065FF]" />
                  <p className="w-[198px] h-[21px] text-[#4E5255] font-[500] text-[14px] leading-[150%] translate-[-0.005em] mt-[8px] ml-[8px]">
                    {user?.phone}
                  </p>
                </div>
                <div>
                  <div className="w-[368px] -ml-[120px] h-[46px] mt-[36px] bg-[#E6F0FF] flex">
                    <p className="ml-[16px] mt-[8px] text-[#272727] w-[308px] h-[30px] font-[700] text-[20px] leading-[150%] tracking-[-0.005em]">
                      Job Information
                    </p>
                  </div>
                  <div className="mt-[16px]">
                    <div className="-ml-[110px] flex">
                      <p className="w-[99px] h-[24px] font-[500] text-[16px] leading-[150%] tracking-[-0.005em] text-[#4E5255]">
                        Employee ID
                      </p>

                      <p className="ml-[26px] w-[4px] h-[24px] font-[500] text-[16px] leading-[150%]">
                        :
                      </p>
                      <p className="w-[94px] h-[24px] ml-[26px] font-[500] text-[16px] leading-[150%] text-[#1D2123]">
                        {user?.emid}
                      </p>
                    </div>
                    <div className="flex mt-[16px] -ml-[110px]">
                      <p className="w-[99px] h-[24px] font-[500] text-[16px] leading-[150%] tracking-[-0.005em] text-[#4E5255]">
                        Joining Date
                      </p>
                      <p className="ml-[26px] w-[4px] h-[24px] font-[500] text-[16px] leading-[150%]">
                        :
                      </p>
                      <p className="w-[94px] h-[24px] ml-[26px] font-[500] text-[16px] leading-[150%] text-[#1D2123]">
                        {user?.jd}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[32px]">
                  <div className="flex w-[368px] h-[46px] bg-[#E6F0FF] -ml-[120px]">
                    <p className="w-[336px] h-[30px] mt-[8px] ml-[16px] font-[700] text-[#272727] text-[20px] leading-[150%] tracking-[-0.005em] ">
                      Leaves
                    </p>
                  </div>
                  <div className="-ml-[110px] mt-[16px]">
                    <div className="flex">
                      <p className="w-[99px] h-[24px] font-[500] text-[#4E5255] text-[16px] leading-[150%] tracking-[-0.005em] ">
                        Sick
                      </p>
                      <p className="ml-[26px] w-[4px] h-[24px] font-[500] text-[16px] leading-[150%]">
                        :
                      </p>
                      <p className="w-[94px] h-[24px] ml-[45px] font-[500] text-[16px] leading-[150%] text-[#1D2123]">
                        {user?.sick}
                      </p>
                    </div>
                    <div className="flex mt-[24px]">
                      <p className="w-[99px] h-[24px] font-[500] text-[#4E5255] text-[16px] leading-[150%] tracking-[-0.005em] ">
                        Casual
                      </p>
                      <p className="ml-[26px] w-[4px] h-[24px] font-[500] text-[16px] leading-[150%]">
                        :
                      </p>
                      <p className="w-[94px] h-[24px] ml-[45px] font-[500] text-[16px] leading-[150%] text-[#1D2123]">
                        {user?.casual}
                      </p>
                    </div>
                    <div className="flex mt-[24px]">
                      <p className="w-[99px] h-[24px] font-[500] text-[#4E5255] text-[16px] leading-[150%] tracking-[-0.005em] ">
                        Total
                      </p>
                      <p className="ml-[26px] w-[4px] h-[24px] font-[500] text-[16px] leading-[150%]">
                        :
                      </p>
                      <p className="w-[94px] h-[24px] ml-[45px] font-[500] text-[16px] leading-[150%] text-[#1D2123]">
                        {user?.total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[540px] h-[548px] bg-[#FFFFFF] rounded-[6px] ">
              <EmpDetails user={user} />
            </div>
          </div>
        </div>
      </EmpList>
    </>
  );
};

export default Details;
