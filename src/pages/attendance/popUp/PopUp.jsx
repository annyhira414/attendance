import React, { useEffect, useState } from "react";
import { Table, Modal } from "antd";
import { getData } from "../../../lib/services";

const columns = [
  {
    title: "DATE",
    dataIndex: "date",
  },
  {
    title: "IN TIME",
    dataIndex: "in_time",
  },

  {
    title: "OUT TIME",
    dataIndex: "out_time",
  },
  {
    title: "DURATION",
    dataIndex: "duration",
  },
];

export default function PopUp({ id }) {
  console.log("popup Id ", id);
  const [details, setDetails] = useState([]);
  const params = {
    employee_id: id,
  };
  const fetchRecords = async () => {
    const res = await getData(`attendances/employee_report`, params);
    console.log("my response is = ", res?.data);

    setDetails(res?.data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  console.log("details popup : ", details);
  return (
    <>
      <Table dataSource={details} columns={columns} rowKey="id" />
    </>
  );
}
