import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmpList from "./EmpList";
import axios from "axios";

const LeaveList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };

  return (
    <>
      <EmpList>
        <div className="ml-[280px] pt-[122px]">
          <div>
            <p className="leading-10 tracking-[-0.005em] mt-[32px] ml-16 font-bold text-[32px] text-[#1D2123]">
              Leave List
            </p>
            <div className="w-[960px] border border-[#EAEAEB] pt-2 bg-white mt-9 ml-16 rounded-md">
              <table className="mt-4 w-11/12 ml-10">
                <thead>
                  <tr className="h-10 text-white font-Roboto bg-sky-900">
                    <th className="w-14 border">ID</th>
                    <th className="w-48 text-left p-2 border">NAME</th>
                    <th className="w-56 text-left p-2 border">DATE-RANGE</th>
                    <th className="text-left p-2 border">TOTAL DAYS</th>
                    <th className="w-44 text-left p-2 border">PHONE</th>
                    <th className="text-left p-2 border">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => {
                    return (
                      <tr
                        className="hover:bg-slate-50 border font-Roboto text-left h-14"
                        key={index}
                      >
                        <td className="p-2 border text-center">{user?.id}</td>
                        <td className="p-2 border">{user?.name}</td>
                        <td className="p-2 border">{user?.daterange}</td>
                        <td className="p-4 border ">{user?.totaldays}</td>
                        <td className="p-2 border">{user?.phone}</td>
                        <td className="p-2 border">
                          <Link
                            className="flex justify-center items-center border border-slate-300 rounded-sm w-11 ml-1 py-2 hover:border-blue-400 hover:duration-400"
                            // to={`/LeaveApplication/details/${user.id}`}
                            to={`/leaveDetails/${user.id}`}
                          >
                            <svg
                              class="w-3.8 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </EmpList>
    </>
  );
};

export default LeaveList;
