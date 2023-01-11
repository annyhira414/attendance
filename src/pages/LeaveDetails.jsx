import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import EmpList from "./EmpList";

const LeaveDetails = () => {
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
          <div className="bg-white m-4 rounded-md pb-10">
            <p className="font-medium text-sky-700 text-base ml-32 pt-5">
              DETAILS OF
            </p>
            <div className="shadow-2xl ml-32 w-3/4 mt-2 border text-base">
              <ul>
                <li className="uppercase text-white p-2 text-lg font-medium bg-sky-900">
                  <p>{user?.name}</p>
                </li>
              </ul>
              <div className="flex">
                <div className="w-1/4"></div>
                <ul className="w-2/4">
                  <li className="flex mt-4 justify-between">
                    <p>Employee ID :</p>
                    <p className="ml-2">{user?.id}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>Start Date:</p>
                    <p>{user?.startdate}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>End Date:</p>
                    <p>{user?.enddate}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>Total Days:</p>
                    <p>{user?.totaldays}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>Reason:</p>
                    <p>{user?.reason}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>Availability :</p>
                    <p>{user?.available}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>Location:</p>
                    <p>{user?.dhaka}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>Emergency Contact:</p>
                    <p>{user?.emPhone}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>Name:</p>
                    <p>{user?.emName}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                  <li className="flex justify-between">
                    <p>Relation:</p>
                    <p>{user?.emRelation}</p>
                  </li>
                  <Divider className="h-4"></Divider>
                </ul>
                <div className="w-1/4"></div>
              </div>
              <div className="p-10 flex justify-center space-x-10">
                <Link
                  className="font-Roboto bg-blue-600 text-white rounded-xl py-2 px-6 hover:bg-blue-500 hover:text-white"
                  to="/leaveList"
                >
                  Return
                </Link>
              </div>
            </div>
          </div>
        </div>
      </EmpList>
    </>
  );
};

export default LeaveDetails;
