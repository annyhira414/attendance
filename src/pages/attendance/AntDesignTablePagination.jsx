import React from "react";
import EmpList from "../EmpList";

import { Space, Table, DatePicker, Button } from "antd";
import { useState } from "react";
import { getDateWiseAttendance } from "../../lib/services";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "./antDesignTablePagination.css";

const AntDesignTablePagination = () => {
  const { RangePicker } = DatePicker;
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
  const [employeeAttendance, setEmployeeAttendance] = useState([]);
  const [date, setDate] = useState();

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
    },
    {
      title: "DEVICE ID",
      dataIndex: "emp_device_id",
    },
    {
      title: "IN TIME",
      dataIndex: "in_time",
    },
    {
      title: "IN OUT",
      dataIndex: "out_time",
    },
    {
      title: "DURATION",
      dataIndex: "duration",
    },
  ];

  const params = {
    date: date,
  };

  //   useEffect(() => {
  //     fetchRecords();
  //   }, [date]);

  const fetchRecords = async () => {
    const res = await getDateWiseAttendance(`attendances`, params);
    console.log("my response is = ", res.data.data);
    setEmployeeAttendance(res?.data?.data);
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
                  type="date"
                  onClick={(e) => setDate(e.target.value)}
                />
              </Space>
            </div>
            <div className="mt-1 ml-2">
              <Button
                onClick={() => fetchRecords()}
                className="font-semibold tracking-[1.25px] bg-blue-900 text-white rounded w-[150px] h-10"
              >
                SEARCH
              </Button>
            </div>
          </div>
          {/* <Table dataSource={dataSource} columns={columns}></Table> */}

          <div>
            <h1 className="font-bold tracking-[1.25px] text-blue-900 text-xl m-8 my-4">DATE WISE AVERAGE ATTENDANCE</h1>
          </div>

          <Table
            className=" m-8 my-4 ant-table-thead ant-table-cell "
            dataSource={employeeAttendance}
            columns={columns}
            rowKey="id"
          ></Table>
        </div>
      </EmpList>
    </>
  );
};

export default AntDesignTablePagination;
