import React from "react";
import EmpList from "../EmpList";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { AiOutlineReload } from "react-icons/ai";

const Attendance = () => {
  const { RangePicker } = DatePicker;
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";

  return (
    <>
      <EmpList>
        <div className="ml-[280Px] pt-[122px]">
          <div className="flex float-right">
            <div>
              <Space direction="vertical" size={12}>
                <RangePicker
                  className="h-11"
                  defaultValue={[dayjs("2019-09-03", dateFormat), dayjs("2019-11-22", dateFormat)]}
                  disabled={[false]}
                />
              </Space>
            </div>
            <div className="mt-1 ml-3">
              <button className=" font-semibold  bg-blue-900 text-white h-10 w-[50px] rounded-sm">
                <AiOutlineReload className="w-[50px]" />
              </button>
            </div>
            <div className="mt-1 ml-2">
              <button
                // onClick={(e) => handleFormSubmit(e)}
                className="font-semibold tracking-[1.25px] bg-blue-900 text-white rounded w-[150px] h-10"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
        <div className="ml-[280Px] pt-[122px]">
          <div className="flex flex-col -my-10">
            <div>
              <h1 className="font-bold tracking-[1.25px] text-blue-900 text-xl my-6">DATA WISH AVERAGE ATTENDANCE</h1>
            </div>
            <div>
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full border text-center">
                        <thead class="border-b">
                          <tr>
                            <th scope="col" class="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              NAME
                            </th>
                            <th scope="col" class="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              AVG IN TIME
                            </th>
                            <th scope="col" class="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              AVG OUT TIME
                            </th>
                            <th scope="col" class="text-lg font-medium text-white px-6 py-4 bg-blue-900">
                              AVG DURATION
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b">
                            <td class="px-6 py-4 text-ml font-medium text-black border-r">Debashish</td>
                            <td class="text-sm text-red-600 font-medium px-6 py-4  border-r">10:34:48</td>
                            <td class="text-sm text-black font-medium px-6 py-4 border-r">20:39:57</td>
                            <td class="text-sm text-black font-medium px-6 py-4 ">10:05:09</td>
                          </tr>
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

        <div className="ml-[280Px] pt-[122px]">
          <div className="flex flex-col -my-10">
            <div>
              <h1 className="font-bold tracking-[1.25px] text-blue-900 text-xl my-6">DATA WISH ATTENDANCE DETAILS</h1>
            </div>
            <div>
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full border text-center">
                        <thead class="border-b">
                          <tr>
                            <th scope="col" class="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              DATE
                            </th>
                            <th scope="col" class="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              IN TIME
                            </th>
                            <th scope="col" class="text-lg font-medium text-white px-6 py-4 border-r bg-blue-900">
                              OUT TIME
                            </th>
                            <th scope="col" class="text-lg font-medium text-white px-6 py-4 bg-blue-900">
                              DURATION
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b">
                            <td class="px-6 py-4 text-ml font-medium text-black border-r">16-10-2022</td>
                            <td class="text-sm text-red-600 font-medium px-6 py-4  border-r">10:34:48</td>
                            <td class="text-sm text-black font-medium px-6 py-4 border-r">20:39:57</td>
                            <td class="text-sm text-black font-medium px-6 py-4 ">10:05:09</td>
                          </tr>
                          <tr class="border-b">
                            <td class="px-6 py-4 text-ml font-medium text-black border-r">13-10-2022</td>
                            <td class="text-sm text-red-600 font-medium px-6 py-4  border-r">10:34:48</td>
                            <td class="text-sm text-black font-medium px-6 py-4 border-r">20:39:57</td>
                            <td class="text-sm text-black font-medium px-6 py-4 ">10:05:09</td>
                          </tr>
                          <tr class="border-b">
                            <td class="px-6 py-4 text-ml font-medium text-black border-r">12-10-2022</td>
                            <td class="text-sm text-red-600 font-medium px-6 py-4  border-r">10:34:48</td>
                            <td class="text-sm text-black font-medium px-6 py-4 border-r">20:39:57</td>
                            <td class="text-sm text-black font-medium px-6 py-4 ">10:05:09</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EmpList>
    </>
  );
};

export default Attendance;
