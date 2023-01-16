import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";

const DatePickerCreate = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs("2015-06-06", dateFormat)} disabled />
    <DatePicker picker="month" defaultValue={dayjs("2015-06", "YYYY-MM")} disabled />
    <RangePicker defaultValue={[dayjs("2015-06-06", dateFormat), dayjs("2015-06-06", dateFormat)]} disabled />
    <RangePicker
      defaultValue={[dayjs("2019-09-03", dateFormat), dayjs("2019-11-22", dateFormat)]}
      disabled={[false, true]}
    />


    
  </Space>
);

export default DatePickerCreate;


//amni rakchi . akhon bolo aitai koy nibo . 


// export const getDateWiseAssignment = async (url, params) => {
//   try {
//     const { authToken } = getAllCookies();
//     const response = await axios.get(`${ADMIN_API_BASE_URL}/${url}`, {
//       params,
//       headers: {
//         Authorization: authToken,
//       },
//     });
//     return response.data;
//   } catch (err) {
//     return {
//       success: false,
//       data: [],
//       status: err?.response?.status,
//       message: err?.response?.data?.message,
//     };
//   }
// };
