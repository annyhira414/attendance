import React from "react";
import EmpList from "../EmpList";

import { Space, Table, Tag, DatePicker, Button } from "antd";
import { useState, useEffect } from "react";
import { getDateWiseAttendance } from "../../lib/services";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Input } from "postcss";
import "./antDesignTablePagination.css";

const AntDesignTablePagination = () => {
  const { RangePicker } = DatePicker;
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
  const [employeeAttendance, setEmployeeAttendance] = useState([]); // changer hobe
  const [date, setDate] = useState();

  //const dataSource = [];
  //const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      //   key: "key",
    },
    {
      title: "DEVICE ID",
      dataIndex: "emp_device_id",
      //   key: "key",
    },
    {
      title: "IN TIME",
      dataIndex: "in_time",
      //   key: "key",
    },
    {
      title: "IN OUT",
      dataIndex: "out_time",
      //   key: "key",
    },
    {
      title: "DURATION",
      dataIndex: "duration",
      //   key: "key",
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
    // const newList = res?.data?.data?.map((item, i) => {
    //   return {
    //     key: item?.id,
    //     name: item?.name,
    //     emp_device_id: item?.emp_device_id,
    //   };
    // });

    setEmployeeAttendance(res?.data?.data);
    //setEmployeeAttendance(res.data);
  };
  // const onChange = (e) => {
  //   setDate(e.target.value);
  // };

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
                  // onChange={onChange()}
                  // onOk={onOk()}
                  // dateRender={(e) => setDate(e.target.value)}
                  onClick={(e) => setDate(e.target.value)}
                  //onChange={(e) => setDate(e.target.value)}
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

          <Table className=" m-8 my-4 ant-table-thead ant-table-cell " dataSource={employeeAttendance} columns={columns}></Table>
        </div>
      </EmpList>
    </>
  );
};

export default AntDesignTablePagination;
