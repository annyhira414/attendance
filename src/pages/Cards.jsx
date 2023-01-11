import React from "react";
import { Link } from "react-router-dom";
import Plus from "/src/assets/logo/plus.svg";
import PP from "/src/assets/images/pp.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { RiPhoneFill } from "react-icons/ri";
import Pagination from "@mui/material/Pagination";
import EmpList from "./EmpList";
import Cookies from "js-cookie";
import { getData } from "../lib/services";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, [page]);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/users?_page=${page} &_limit=30`);
    setUsers(res.data.reverse());
  };

  return (
    <>
      <EmpList>
        <div className="ml-[280px] pt-[122px]">
          <div className="flex justify-between">
            <p className="leading-10 tracking-[-0.005em] mt-[32px] ml-[60px] font-bold text-[32px] text-[#1D2123]">
              Employee List
            </p>
            <Link
              to={"/addEmp"}
              className="flex rounded-[4px] mt-[34px] items-center w-[168px] h-[44px] border-2 border-[#0065FF] mr-[22px]"
            >
              <img className="w-[14px] h-[14px] ml-[13px]" src={Plus} alt="plus" />
              <p className="leading-4 tracking-[1.30px] text-[#0065FF] ml-[11px] text-[14px] font-[600]">
                Add Employee
              </p>
            </Link>
          </div>
          <div className="normal ml-[60px] flex flex-wrap gap-[20px] mt-[32px]">
            {users?.map((user, index) => {
              return (
                <Link key={index} to={`/details/${user.id}`}>
                  <div className="group">
                    <div className="flex rounded-[6px] bg-[#F9FBFF] border border-[#EAEAEB] w-[316px] h-[127px] text-[#1D2123] hover:bg-[#0065FF] group-hover:text-[#FFFFFF]">
                      <div className="w-[48px] h-[48px] rounded-full mt-[24px] ml-[16px] bg-gray-300">
                        <img src={PP} alt="profile" />
                      </div>
                      <div className="ml-[9px]">
                        <p className="mt-[24px] text-[18px] font-bold">{user?.name}</p>
                        <p className="group-hover:text-[#FFFFFF] font-[400] text-[14px] text-[#4E5255]">
                          {user?.email}
                        </p>
                        <div className="flex">
                          <div className="ml-[1px] mr-[8px] mt-[4px] ">
                            <RiPhoneFill className="group-hover:text-[#FFFFFF] text-[#0065FF] w-[18px] h-[18px]" />
                          </div>
                          <p className="group-hover:text-[#FFFFFF] mt-[2px] font-[600] text-[14px] text-[#4E5255]">
                            {user?.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
            <Pagination
              className="ml-[60px] mt-[20px] mb-[20px]"
              size="large"
              count={10}
              color="primary"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) => setPage(value)}
            />
          </div>
        </div>
      </EmpList>
    </>
  );
};

export default Cards;
