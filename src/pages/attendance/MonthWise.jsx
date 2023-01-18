import React from "react";
import EmpList from "../EmpList";

import { Space, Table, DatePicker, Button, Modal } from "antd";
import { useState } from "react";
import { getData } from "../../lib/services";
import { EyeOutlined } from "@ant-design/icons";
import PopUp from "./popUp/PopUp";

const MonthWise = () => {
  const { RangePicker } = DatePicker;
  const [employeeAttendance, setEmployeeAttendance] = useState([]);
  const [date, setDate] = useState();
  const [params, setParams] = useState();
  const [infoDetails, setInfoDetails] = useState(false);
  const [report, setReport] = useState();

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
    },
    {
      title: "AVG IN TIME",
      dataIndex: "avg_in_time",
    },
    {
      title: "AVG OUT TIME",
      dataIndex: "avg_out_time",
    },
    {
      title: "AVG DURATION",
      dataIndex: "avg_duration",
    },
    {
      title: "ACTION",
      render: (record) => {
        return (
          <>
            <EyeOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
          </>
        );
      },
    },
  ];

  const fetchRecords = async () => {
    const res = await getData(`attendances/month_wise_list`, params);
    console.log("my response is = ", res?.data);

    setEmployeeAttendance(res?.data);
  };

  console.log("employeeAttendance", employeeAttendance);
  console.log("date :", date);

  const onOpenChange = (open) => {
    const input1 = open[0].format("YYYY-MM-DD");
    const input2 = open[1].format("YYYY-MM-DD");
    setParams({ start_date: input1, end_date: input2 });

    console.log("input1", input1);
    console.log("input2", input2);
  };

  const onEditStudent = (record) => {
    setInfoDetails(true);
    setReport(record);
  };
  console.log("id: ", report?.id);
  return (
    <>
      <EmpList>
        <div className="ml-[280Px] pt-[122px] m-8 ">
          <div className="flex float-right">
            <div>
              <Space direction="vertical" size={12}>
                <RangePicker
                  defaultValue={date}
                  format={["YYYY/MM/DD", "YYYY/MM/DD"]}
                  onCalendarChange={(val) => setDate(val)}
                  onChange={(val) => onOpenChange(val)}
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

          <div>
            <h1 className="font-bold tracking-[1.25px] text-blue-900 text-xl m-8 my-4">
              MONTH WISE AVERAGE ATTENDANCE
            </h1>
          </div>
          <Table
            className=" m-8 my-4 ant-table-thead ant-table-cell "
            dataSource={employeeAttendance}
            columns={columns}
            rowKey="id"
          ></Table>
          <Modal
            title={report?.name}
            okType="danger"
            open={infoDetails}
            onCancel={() => {
              setInfoDetails(false);
            }}
            onOk={() => {
              setInfoDetails(false);
            }}
          >
            <PopUp id={report?.id} />
          </Modal>
        </div>
      </EmpList>
    </>
  );
};

export default MonthWise;
