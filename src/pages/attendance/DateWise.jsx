import React, { useCallback, useEffect, useState } from "react";
import EmpList from "../EmpList";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { AiOutlineReload } from "react-icons/ai";
// import { getDateWiseAttendance } from "../lib/services";

//import { getDateWiseAttendance } from "../../lib/services";
import { getDateWiseAttendance } from "../../lib/services";
import { EmojiPeopleOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const currentDate = new Date();

const DataWise = () => {
  const { RangePicker } = DatePicker;
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
  const [employeeAttendance, setEmployeeAttendance] = useState([]); // changer hobe
  const [date, setDate] = useState();

  const params = {
    date: date,
  };
  console.log("currentDate", currentDate.toString());
  console.log("params", params);

  // useEffect(() => {
  //   loadUser();
  // }, []);

  const loadUser = async () => {
    const res = await getDateWiseAttendance(`attendances`, params);
    console.log("my response is = ", res.data);
    setEmployeeAttendance(res.data);
  };

  console.log("employeeAttendance", employeeAttendance);
  console.log("date :", date);

  return (
    <>
      <EmpList>
        <div className="ml-[280Px] pt-[122px] m-8 ">
          <div className="flex float-right">
            <div>
              <Space direction="vertical" size={12}>
                <DatePicker
                  className="h-11 mt-1 ml-2"
                  defaultValue={date}
                  format={"YYYY-MM-DD"}
                  onClick={(e) => setDate(e.target.value)}
                />
              </Space>
            </div>

            <div className="mt-1 ml-2">
              <button
                onClick={() => loadUser()}
                className="font-semibold tracking-[1.25px] bg-blue-900 text-white rounded w-[150px] h-10"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
        <div className="ml-[280Px] pt-[122px]  ">
          <div className="flex flex-col -my-10">
            <div>
              <h1 className="font-bold tracking-[1.25px] text-blue-900 text-xl m-8 my-6">
                DATE WISE AVERAGE ATTENDANCE
              </h1>
            </div>
            <div>
              <div className="flex flex-col m-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border text-center">
                        <thead className="border-b">
                          <tr>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              NAME
                            </th>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              DEVICE ID
                            </th>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              IN TIME
                            </th>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              OUT TIME
                            </th>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 bg-blue-900">
                              DURATION
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {employeeAttendance?.data?.map((employee, index) => (
                            <tr key={`employee_${index}`} className="border-b">
                              <td className="px-6 py-4 text-ml font-medium text-black border-r">{employee.name}</td>
                              <td className="text-sm text-red-600 font-medium px-6 py-4  border-r">
                                {employee.emp_device_id}
                              </td>
                              <td className="text-sm text-black font-medium px-6 py-4 border-r">{employee.in_time}</td>
                              <td className="text-sm text-black font-medium px-6 py-4 ">{employee.out_time}</td>
                              <td className="text-sm text-black font-medium px-6 py-4 ">{employee.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd table  */}
        {/* 
        <div className="ml-[280Px] pt-[122px]">
          <div className="flex flex-col -my-10">
            <div>
              <h1 className="font-bold tracking-[1.25px] text-blue-900 text-xl my-6">DATA WISH ATTENDANCE DETAILS</h1>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border text-center">
                        <thead className="border-b">
                          <tr>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              DATE
                            </th>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              IN TIME
                            </th>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              OUT TIME
                            </th>
                            <th scope="col" className="text-lg font-medium text-white px-6 py-4 bg-blue-900">
                              DURATION
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-6 py-4 text-ml font-medium text-black border-r">16-10-2022</td>
                            <td className="text-sm text-red-600 font-medium px-6 py-4  border-r">10:34:48</td>
                            <td className="text-sm text-black font-medium px-6 py-4 border-r">20:39:57</td>
                            <td className="text-sm text-black font-medium px-6 py-4 ">10:05:09</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-6 py-4 text-ml font-medium text-black border-r">13-10-2022</td>
                            <td className="text-sm text-red-600 font-medium px-6 py-4  border-r">10:34:48</td>
                            <td className="text-sm text-black font-medium px-6 py-4 border-r">20:39:57</td>
                            <td className="text-sm text-black font-medium px-6 py-4 ">10:05:09</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-6 py-4 text-ml font-medium text-black border-r">12-10-2022</td>
                            <td className="text-sm text-red-600 font-medium px-6 py-4  border-r">10:34:48</td>
                            <td className="text-sm text-black font-medium px-6 py-4 border-r">20:39:57</td>
                            <td className="text-sm text-black font-medium px-6 py-4 ">10:05:09</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </EmpList>
    </>
  );
};

export default DataWise;
