import React from "react";
import { DateRangePicker } from "react-date-range";
import { Link } from "react-router-dom";
import { addDays } from "date-fns";
import format from "date-fns/format";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PhoneInput from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { toast } from "react-toastify";
import { AiOutlineUnorderedList } from "react-icons/ai";
import EmpList from "./EmpList";

//phone number input
import "react-phone-number-input/style.css";

//toastify Css
import "react-toastify/dist/ReactToastify.css";
//date range CSS
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const LeaveForm = () => {
  const [open, setOpen] = useState();
  const [totalDays, setTotalDays] = useState("");
  const [notes, setNotes] = useState("");
  const [alignment, setAlignment] = useState("inside dhaka");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [availability, setAvailability] = useState([]);
  const [id, setId] = useState("");
  const [category, setCategory] = useState();
  const [errorNote, setErrorNote] = useState({});
  const [errorName, setErrorName] = useState({});
  const [errorPhone, setErrorPhone] = useState({});
  const [errorRelation, setErrorRelation] = useState({});
  const [errorId, setErrorId] = useState({});
  const [errorTotalDays, setErrorTotalDays] = useState({});
  const [errorCategory, setErrorCategory] = useState({});

  //date state(Date-range)
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const handleSelect = (e) => {
    setId(e.target.value);
  };

  //get the target element(date-range)
  const refOne = useRef(null);
  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press(date-range)
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click(date-range)
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  //Checkbox Selection(Availability)
  const handleCheckAvailability = (e) => {
    const avails = [...availability];
    const index = avails.findIndex((avail) => avail === e.target.value);
    if (index === -1) {
      avails.push(e.target.value);
    } else {
      avails.splice(index, 1);
    }
    setAvailability(avails);
  };
  //ToggleButton
  const handleChange = (e) => {
    setAlignment(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (id && totalDays && category && notes && name && relation && phone) {
      // console.log("note", notes.length > 20 && "max length is 20");
      console.log("Employee ID:", id);
      console.log("Range:", range);
      console.log("Total Days:", totalDays);
      console.log("Category:", category);
      console.log("Notes:", notes);
      console.log("Availability:", availability);
      console.log("Available:", alignment);
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Relation:", relation);
    } else {
      toast.warn("Required field is empty !", {
        theme: "dark",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
    if (!id) {
      const errors = { ...errorId };
      errors["idErrorId"] = " Employee ID is required";
      setErrorId(errors);
    } else {
      const errors = { ...errorId };
      errors["idErrorId"] = "";
      setErrorId(errors);
    }
    if (!totalDays) {
      const errors = { ...errorTotalDays };
      errors["totalDaysErrorTotalDays"] = "Total days is required";
      setErrorTotalDays(errors);
    } else {
      const errors = { ...errorTotalDays };
      errors["totalDaysErrorTotalDays"] = "";
      setErrorTotalDays(errors);
    }
    if (!category) {
      const errors = { ...errorCategory };
      errors["categoryErrorCategory"] = "Category is required";
      setErrorCategory(errors);
    } else {
      const errors = { ...errorCategory };
      errors["categoryErrorCategory"] = "";
      setErrorCategory(errors);
    }
    if (!notes) {
      const errors = { ...errorNote };
      errors["noteErrorNote"] = "Reasons to approve the leave  is required";
      setErrorNote(errors);
    } else {
      const errors = { ...errorNote };
      errors["noteErrorNote"] = "";
      setErrorNote(errors);
    }
    if (!name) {
      const errors = { ...errorName };
      errors["nameErrorName"] = "Name is required";
      setErrorName(errors);
    } else {
      const errors = { ...errorName };
      errors["nameErrorName"] = "";
      setErrorName(errors);
    }
    if (!phone) {
      const errors = { ...errorPhone };
      errors["phoneErrorPhone"] = "Phone number is required";
      setErrorPhone(errors);
    } else {
      const errors = { ...errorPhone };
      errors["phoneErrorPhone"] = "";
      setErrorPhone(errors);
    }
    if (!relation) {
      const errors = { ...errorRelation };
      errors["relationErrorRelation"] = "Relation is required";
      setErrorRelation(errors);
    } else {
      const errors = { ...errorRelation };
      errors["relationErrorRelation"] = "";
      setErrorRelation(errors);
    }
  };
  return (
    <>
      <EmpList>
        <div className="ml-[280px] pt-[122px]">
          <div>
            <div className="flex justify-between">
              <p className="leading-10 tracking-[-0.005em] mt-[32px] ml-16 font-bold text-[32px] text-[#1D2123]">
                Leave Form
              </p>
              <Link
                to={"/leaveList"}
                className="flex rounded-[4px] mt-[34px] items-center w-[168px] h-[44px] border-2 border-[#0065FF] mr-[46px]"
              >
                <AiOutlineUnorderedList className="w-[18px] h-[18px] text-[#0065FF] ml-5" />
                <p className="leading-4 tracking-[1.30px] text-[#0065FF] ml-3 text-base font-[600]">
                  Leave List
                </p>
              </Link>
            </div>
            <div className="bg-[#FFFFFF] w-[960px] border border-[#EAEAEB] ml-16 rounded-md mt-8">
              <div className="ml-6 flex pt-8">
                <div className="flex">
                  <p className=" font-semibold text-[#4E5255] text-[17px] mt-1">
                    Employee ID
                  </p>
                  <p className="font-semibold text-red-600">*</p>
                </div>
                <div className="flex ml-28">
                  <p className="text-xl ml-[9px]">:</p>
                  <div className="ml-[80px] -mt-2">
                    <FormControl variant="standard" sx={{ minWidth: 207 }}>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={id}
                        onChange={handleSelect}
                        label="Id"
                        className="text-center"
                      >
                        <MenuItem value={1}>01</MenuItem>
                        <MenuItem value={2}>02</MenuItem>
                        <MenuItem value={3}>03</MenuItem>
                        <MenuItem value={4}>04</MenuItem>
                        <MenuItem value={5}>05</MenuItem>
                        <MenuItem value={6}>06</MenuItem>
                        <MenuItem value={7}>07</MenuItem>
                        <MenuItem value={8}>08</MenuItem>
                        <MenuItem value={9}>09</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <p className="mt-2 ml-[228px] pl-3 text-sm text-red-600">
                    {errorId?.idErrorId && errorId?.idErrorId}
                  </p>
                </div>
              </div>
              <div onSubmit={handleFormSubmit}>
                <div className="ml-6 flex mt-7">
                  <div className="flex">
                    <p className="text-[#4E5255] text-[17px] font-semibold">
                      Date-Range
                    </p>
                    <p className="font-semibold text-red-600">*</p>
                  </div>
                  <div className="flex ml-28 pl-3">
                    <p className="text-xl ml-[3px]">:</p>
                    <div className="ml-[79px]">
                      <input
                        value={`${format(
                          range[0].startDate,
                          "dd/MM/yyyy"
                        )} - ${format(range[0].endDate, "dd/MM/yyyy")}`}
                        readOnly
                        className="w-52 h-8 cursor-pointer font-semibold text-[#1D2123] text-[17px] text-center border-slate-700 border rounded-md"
                        onClick={() => setOpen((open) => !open)}
                      />
                      <div ref={refOne}>
                        {open && (
                          <DateRangePicker
                            onChange={(item) => setRange([item.selection])}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            showSelectionPreview={true}
                            preventSnapRefocus={true}
                            ranges={range}
                            months={1}
                            direction="horizontal"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-5">
            <label className="font-semibold">
              Model
            </label>
            <input
              className="ml-3 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="model"
              id="model"
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div> */}
                <div className="flex ml-6 mt-4">
                  <div className="flex">
                    <p className="font-semibold text-[#4E5255] text-[17px] mt-2">
                      Total Days
                    </p>
                    <p className="font-semibold text-red-600 mt-2">*</p>
                  </div>
                  <div className="flex ml-32">
                    <p className="ml-[11px] text-xl mr-20 mt-1">:</p>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { width: "23.5ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        className="font-semibold text-justify"
                        onChange={(e) => setTotalDays(e.target.value)}
                        id="standard-basic"
                        type="number"
                        label="Days"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <p className="mt-1 ml-60 text-sm text-red-600">
                      {errorTotalDays?.totalDaysErrorTotalDays &&
                        errorTotalDays?.totalDaysErrorTotalDays}
                    </p>
                  </div>
                </div>
                <div className="flex ml-6 mt-5 font-semibold">
                  <label
                    className="text-[#4E5255] text-[17px] flex"
                    htmlFor="category"
                  >
                    Leave Category
                    <p className="text-red-600 text-sm">*</p>
                    <p className="text-xl font-normal  ml-[100px]">:</p>
                  </label>
                  <div className="-mt-2 ml-9">
                    <input
                      type="radio"
                      className="align-sub w-5 h-5 ml-10 mt-3 cursor-pointer"
                      name="category"
                      id="medical"
                      value={"medical"}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                    <label
                      className="p-1 text-[#1D2123] text-[17px] cursor-pointer"
                      htmlFor="medical"
                    >
                      Medical
                    </label>
                    <input
                      type="radio"
                      className="align-sub w-5 h-5 ml-8 cursor-pointer"
                      name="category"
                      id="parental"
                      value={"parental"}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                    <label
                      className="p-1 text-[#1D2123] text-[17px] cursor-pointer"
                      htmlFor="parental"
                    >
                      Parental
                    </label>
                    <input
                      type="radio"
                      className="align-sub w-5 h-5 ml-8 cursor-pointer"
                      name="category"
                      id="casual"
                      value={"casual"}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                    <label
                      className="p-1 text-[#1D2123] text-[17px] cursor-pointer"
                      htmlFor="casual"
                    >
                      Casual
                    </label>
                    <input
                      type="radio"
                      className="align-sub w-5 h-5 ml-8 cursor-pointer"
                      name="category"
                      id="others"
                      value={"others"}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                    <label
                      className="p-1 text-[#1D2123] text-[17px] cursor-pointer"
                      htmlFor="others"
                    >
                      Others
                    </label>
                  </div>
                  <p className=" ml-5 mt-1 text-red-600 font-normal text-sm">
                    {errorCategory?.categoryErrorCategory &&
                      errorCategory?.categoryErrorCategory}
                  </p>
                </div>
                <div className="mt-6  ml-6">
                  <div className="flex">
                    <p className="font-semibold text-[#4E5255] text-[17px]">
                      Notes For Taking Leave
                    </p>
                    <p className="font-semibold text-red-600">*</p>
                    <p className="text-xl ml-10 -mt-1">:</p>
                  </div>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { mt: 1, width: "106ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      onChange={(e) => setNotes(e.target.value)}
                      id="outlined-multiline-flexible"
                      multiline
                      label="Reasons to approve the leave"
                      rows={3}
                      variant="outlined"
                      size="medium"
                    />
                  </Box>
                  <p className="mt-1 text-sm text-red-600">
                    {errorNote?.noteErrorNote && errorNote?.noteErrorNote}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="ml-6 font-semibold flex">
                    <label
                      htmlFor="availability"
                      className="flex font-semibold text-[#4E5255] text-[17px]"
                    >
                      <p className="">Availability</p>
                      <p className="text-xl font-normal ml-[141px] -mt-1">:</p>
                    </label>
                    <div className="-mt-1 ml-20">
                      <input
                        type="checkbox"
                        className="align-text-bottom mt-3 w-4 h-4 cursor-pointer"
                        name="availability"
                        value="phones"
                        id="phones"
                        onChange={handleCheckAvailability}
                      />
                      <label
                        htmlFor="phones"
                        className="cursor-pointer ml-2 text-[#1D2123] text-[17px]"
                      >
                        Phone
                      </label>

                      <input
                        type="checkbox"
                        className="align-text-bottom ml-12 mt-2 h-4 w-4 cursor-pointer"
                        name="availability"
                        id="whatsApp"
                        value="whatsApp"
                        onChange={handleCheckAvailability}
                      />
                      <label
                        htmlFor="whatsApp"
                        className="cursor-pointer ml-2 text-[#1D2123] text-[17px] "
                      >
                        WhatsApp
                      </label>

                      <input
                        type="checkbox"
                        className="align-text-bottom ml-12 mt-2 h-4 w-4 cursor-pointer"
                        name="availability"
                        id="slack"
                        value={"slack"}
                        onChange={handleCheckAvailability}
                      />
                      <label
                        htmlFor="slack"
                        className="cursor-pointer ml-2 text-[#1D2123] text-[17px]"
                      >
                        Slack
                      </label>

                      <input
                        type="checkbox"
                        className="align-text-bottom ml-12 mt-2 h-4 w-4 cursor-pointer"
                        name="availability"
                        id="email"
                        value={"email"}
                        onChange={handleCheckAvailability}
                      />
                      <label
                        htmlFor="email"
                        className="cursor-pointer ml-2 text-[#1D2123] text-[17px]"
                      >
                        Email
                      </label>

                      <input
                        type="checkbox"
                        className="align-text-bottom ml-12 mt-2 h-4 w-4 cursor-pointer"
                        name="availability"
                        id="internet"
                        value={"internet"}
                        onChange={handleCheckAvailability}
                      />
                      <label
                        htmlFor="internet"
                        className="cursor-pointer ml-2 text-[#1D2123] text-[17px]"
                      >
                        Internet
                      </label>
                    </div>
                  </div>
                  <div className="ml-[335px]  mt-6">
                    <ToggleButtonGroup
                      className="border border-gray-400"
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      aria-label="Platform"
                    >
                      <ToggleButton value="inside dhaka">
                        Inside Dhaka
                      </ToggleButton>
                      <ToggleButton value="outside dhaka">
                        Outside Dhaka
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>
                <div className="ml-6 mt-7 flex">
                  <div className="flex">
                    <p className="font-semibold text-[#4E5255] text-[17px]">
                      Emergency Contact
                    </p>
                    <p className="font-semibold text-red-600">*</p>
                    <p className="ml-[65px] pl-1 text-xl -mt-1">:</p>
                  </div>
                  <div>
                    <div>
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { ml: 10, width: "70ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          onChange={(e) => setName(e.target.value)}
                          id="outlined-multiline-flexible"
                          label="Name"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <p className="text-sm ml-20 mt-1 text-red-600">
                        {errorName?.nameErrorName && errorName?.nameErrorName}
                      </p>
                    </div>
                    <div className="mt-3">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": {
                            ml: 10,
                            width: "66ch",
                            height: "4.5ch",
                            background: "white",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <PhoneInput
                          className="pl-3 font-normal border rounded-sm border-gray-400 text-[#4E5255] text-[17px] hover:border-black"
                          value={phone}
                          defaultCountry="BD"
                          placeholder="Phone"
                          onChange={(phone) => setPhone(phone)}
                          maxLength={12}
                        />
                        {/* <TextField
                    onChange={(e) => setPhone(e.target.value)}
                    id="outlined-multiline-flexible"
                    type="number"
                    label="Phone"
                    variant="outlined"
                    maxLength={2}
                    size="small"
                  /> */}
                      </Box>
                      <p className="ml-20 mt-1 text-sm text-red-600">
                        {phone && !isValidPhoneNumber(phone)
                          ? "Invalid phone number"
                          : ""}
                      </p>
                      <p className="text-sm ml-20 mt-1 text-red-600">
                        {errorPhone?.phoneErrorPhone &&
                          errorPhone?.phoneErrorPhone}
                      </p>
                    </div>
                    <div></div>
                    <div className="mt-3">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { ml: 10, width: "70ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          onChange={(e) => setRelation(e.target.value)}
                          id="outlined-multiline-flexible"
                          label="Relation"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <p className="text-sm ml-20 mt-1 text-red-600">
                        {errorRelation?.relationErrorRelation &&
                          errorRelation?.relationErrorRelation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-16 pb-10">
                  <Link
                    to={"/"}
                    className="mr-4 font-semibold border-2 text-center border-[#0065FF] tracking-[1.25px] bg-[#FFFFFF] text-[#0065FF] rounded w-[200px] h-12"
                  >
                    <p className="mt-[10px]">Cancel</p>
                  </Link>
                  <button
                    onClick={(e) => handleFormSubmit(e)}
                    className="font-semibold tracking-[1.25px] bg-[#0065FF] text-white rounded w-[200px] h-12"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EmpList>
    </>
  );
};
export default LeaveForm;
