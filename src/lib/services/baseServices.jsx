import axios from "axios";
import _ from "lodash";
import { getAllCookies, ADMIN_API_BASE_URL } from "../helpers";

export const getData = async (url, params) => {
  try {
    const { authToken } = getAllCookies();
    const response = await axios.get(`${ADMIN_API_BASE_URL}/${url}`, {
      params,
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  } catch (err) {
    return {
      success: false,
      data: [],
      status: err?.response?.status,
      message: err?.response?.data?.message,
    };
  }
};

 

export const getPaginatedData = async (url, params) => {
  try {
    const { authToken } = getAllCookies();
    const response = await axios.get(`${ADMIN_API_BASE_URL}/${url}`, {
      params,
      headers: {
        Authorization: authToken,
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const getDetails = async (url, id) => {
  try {
    const modifiedUrl = id ? `${ADMIN_API_BASE_URL}/${url}/${id}` : `${ADMIN_API_BASE_URL}/${url}`;
    const { authToken } = getAllCookies();
    const response = await axios.get(modifiedUrl, {
      headers: {
        Authorization: authToken,
      },
    });
    return response?.data;
  } catch (err) {
    console.log(err);
    return {
      success: false,
      // data: {},

    
      status: err?.response?.status,
      message: err?.response?.data?.message,
    };
  }
};



export const postData = async (url, data, lang) => {
  try {
    const { authToken } = getAllCookies();
    const response = await axios.post(`${ADMIN_API_BASE_URL}/${url}`, data, {
      headers: {
        Authorization: authToken,
      },
    });

    return response.data;
  } catch (err) {
    return {
      success: false,
      data: err?.response?.data?.data,
      status: err?.response?.status,
      message: err?.response?.data?.message,
    };
  }
};

export const updateData = async (url, data, id) => {
  try {
    const { authToken } = getAllCookies();
    const putUrl = id ? `${url}/${id}` : `${url}`;
    const response = await axios.put(`${ADMIN_API_BASE_URL}/${putUrl}`, data, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  } catch (err) {
    return {
      success: false,
      data: {},
      status: err?.response?.status,
      message: err?.response?.data?.message,
    };
  }
};

export const deleteData = async (url, id) => {
  try {
    const modifiedUrl = id ? `${ADMIN_API_BASE_URL}/${url}/${id}` : `${ADMIN_API_BASE_URL}/${url}`;
    const { authToken } = getAllCookies();
    const response = await axios.delete(modifiedUrl, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  } catch (err) {
    return {
      success: false,
      data: {},
      status: err?.response?.status,
      message: err?.response?.data?.message,
    };
  }
};

export const patchData = async (url, data, id) => {
  try {
    const { authToken } = getAllCookies();
    const putUrl = id ? `${url}/${id}` : `${url}`;
    const response = await axios.patch(`${ADMIN_API_BASE_URL}/${putUrl}`, data, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data;
  } catch (err) {
    return {
      success: false,
      data: {},
      status: err?.response?.status,
      message: err?.response?.data?.message,
    };
  }
};

// new

export const getDateWiseAttendance = async (url, params) => {
  try {
    const { authToken } = getAllCookies();
    const response = await axios.get(`${ADMIN_API_BASE_URL}/${url}`, {
      params,
      headers: {
        Authorization: authToken,
      },
    });
    return response;
  } catch (err) {
    return {
      success: false,
      data: [],
      status: err?.response?.status,
      message: err?.response?.data?.message,
    };
  }
};
