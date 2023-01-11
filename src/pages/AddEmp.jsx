import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EmpList from "./EmpList";

const AddEmp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    city: "",
    phone: "",
  });
  let { name, city, phone } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = {
      name: user.name,
      city: user.city,
      phone: user.phone,
    };
    await axios.post("http://localhost:5000/users", formData);
    navigate("/cards");
  };
  return (
    <>
      <EmpList>
        <div className="ml-[280px] pt-[122px]">
          <form className="p-20" onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="Name">Name </label>
              <input
                className="border ml-2"
                type="text"
                name="name"
                id="name"
                size={30}
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="City">City </label>
              <input
                className="border ml-6 mt-5"
                type="text"
                name="city"
                id="city"
                size={30}
                value={city}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="Phone">Phone </label>
              <input
                className="border ml-[7px] mt-5"
                type="text"
                name="phone"
                id="phone"
                size={30}
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button
              onClick={() => onSubmit()}
              className="mt-5 ml-10 border bg-blue-300 border-black rounded-md py-1 px-2"
              to="/cards"
            >
              Submit
            </button>
          </form>
        </div>
      </EmpList>
    </>
  );
};

export default AddEmp;
