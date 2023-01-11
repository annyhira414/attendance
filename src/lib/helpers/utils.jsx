import dayjs from "dayjs";
import moment from "moment";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const capitalize = (str = "") => {
  const lower = str?.toLocaleLowerCase();
  return str?.charAt(0).toUpperCase() + lower?.slice(1);
};

export const titleCase = (str) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const getFormattedDate = (date, format) => {
  return date ? moment(date).utcOffset("+0600")?.format(format) : "";
};

export const commaRemover = (value) => {
  return value.replace(/\,/g, "");
};

export const getDate = (date) => {
  return moment(date).utcOffset("+0600");
};

export const refreshPage = (url, callback) => {
  setTimeout(() => {
    callback();
    window.location.replace(url);
  }, 1000);
};

export const humanize = (str) => {
  let humanizedStr = "";
  if (str) {
    humanizedStr = str
      .replace(/^[\s_]+|[\s_]+$/g, "")
      .replace(/[_\s]+/g, " ")
      .replace(/^[a-z]/, function (m) {
        return m.toUpperCase();
      });
  }
  return humanizedStr;
};

export const objectToFormData = (obj) => {
  let formData = new FormData();
  Object.keys(obj).forEach((key) => formData.append(key, obj[key]));
  return formData;
};

export const obj2FormData = (obj) => {
  let formData = new FormData();
  const createFormData = function (obj, subKeyStr = "") {
    for (let i in obj) {
      let value = obj[i];
      let subKeyStrTrans = subKeyStr ? subKeyStr + "[" + i + "]" : i;

      if (typeof value === "string" || typeof value === "number") {
        formData.append(subKeyStrTrans, obj[i]);
      } else if (typeof value === "object") {
        createFormData(value, subKeyStrTrans);
      }
    }
  };
  createFormData(obj);

  return formData;
};

export const setHeaderTitle = (title) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSeletedPage(title));
  }, [title]);
};

export const getAllCookies = () => {
  const authToken = Cookies.get("token") || "";
  const roles = Cookies.get("permission_codes")?.split(",");
  return { authToken, roles };
};

export const avatarFormatter = (name = "AD") => {
  let formattedStr = "";
  const strArr = name.split(" ");
  if (strArr.length === 1) {
    formattedStr = strArr[0].slice(0, 2).toUpperCase();
  } else if (strArr.length > 1) {
    formattedStr =
      strArr[0].slice(0, 1).toUpperCase() + strArr[1].slice(0, 1).toUpperCase();
  } else {
    formattedStr = "AD";
  }
  return formattedStr ? formattedStr : "N/A";
};

export const generateNrcNo = (region, township, id_type, digits) => {
  let nrc_no = "";
  if (region && township && id_type && digits) {
    nrc_no = region + "/" + township + "(" + id_type + ")" + digits;
  }

  return nrc_no;
};

export const splitedNrcNo = (nrc_no) => {
  if (!nrc_no && !/[/()]/.test(nrc_no || "")) {
    return { region: null, township: null, id_type: null, digits: null };
  }

  const splitedString = nrc_no?.split(/[/()]/);
  if (!splitedString) {
    return { region: null, township: null, id_type: null, digits: null };
  } else {
    return {
      region: splitedString[0] || null,
      township: splitedString[1] || null,
      id_type: splitedString[2] || null,
      digits: splitedString[3] || null,
    };
  }
};

export const getRole = (role) => {
  switch (role) {
    case 0:
      return "Member";
    case 1:
      return "Admin";
    case 2:
      return "Super Admin";
    case 3:
      return "Manager";
    default:
      return "";
  }
};

export const getFilteredRoles = (roles, moduleWiseRoles) => {
  const filteredRoles =
    moduleWiseRoles && moduleWiseRoles?.filter((item) => roles?.includes(item));
  return filteredRoles;
};

export const isValidUrl = (val) => {
  let url;
  try {
    url = new URL(val);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

export const splitedForeignData = (value) => {
  const splitedList = value.split("-");
  return splitedList[0];
};

export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const checkRoleBasedPermission = (mode, roles, allowRole) => {
  const result = roles?.some((role) => allowRole && allowRole.includes(role));
  return mode === "ROUTE" ? result : !result;
};

export const getUserPermissions = (permissionCodeList) => {
  const { roles } = getAllCookies();
  const isAuthorized = permissionCodeList?.some((code) =>
    roles?.includes(code)
  );
  return { isAuthorized };
};

export const checkImage = (imageSrc) => {
  var img = new Image();
  try {
    img.src = imageSrc;
    return true;
  } catch (err) {
    return false;
  }
};

export const checkMsisdn = (data) => {
  const msisdnPattern = /^(09|9|\+?950?9|\+?95950?9)\d{7,9}$/;
  return !msisdnPattern.test(data);
};

export const validDate = (date, format) => {
  return dayjs(date, format, true).isValid();
};
