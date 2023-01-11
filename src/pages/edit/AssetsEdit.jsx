import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AssetsEdit = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    emid: "",
    jd: "",
    sick: "",
    casual: "",
    total: "",
    bd: "",
    nid: "",
    gender: "",
    father: "",
    othernum: "",
    personalmail: "",
    preAdd: "",
    emergencyName: "",
    relation: "",
    emergencyNum: "",
    device: "",
    model: "",
    serialNum: "",
    accessories: "",
  });
  let {
    name,
    email,
    phone,
    emid,
    jd,
    sick,
    casual,
    total,
    bd,
    nid,
    gender,
    father,
    othernum,
    personalmail,
    preAdd,
    emergencyName,
    relation,
    emergencyNum,
    device,
    model,
    serialNum,
    accessories,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      emid: user.emid,
      jd: user.jd,
      sick: user.sick,
      casual: user.casual,
      total: user.total,
      bd: user.bd,
      nid: user.nid,
      gender: user.gender,
      father: user.father,
      othernum: user.othernum,
      personalmail: user.personalmail,
      preAdd: user.preAdd,
      emergencyName: user.emergencyName,
      relation: user.relation,
      emergencyNum: user.emergencyNum,
      device: user.device,
      model: user.model,
      serialNum: user.serialNum,
      accessories: user.accessories,
    };
    await axios.put(`http://localhost:5000/users/${id}`, formData);
    props.handleClose();
    navigate(0);
  };
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(res.data);
  };
  return (
    <div>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mt-5">
            <label className="font-semibold" htmlFor="device">
              Device Brand
            </label>
            <input
              className="ml-3 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="device"
              id="device"
              value={device}
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mt-5">
            <label className="font-semibold" htmlFor="model">
              Model
            </label>
            <input
              className="ml-3 mr-6 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="model"
              id="model"
              value={model}
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mt-5">
            <label className="font-semibold" htmlFor="serialNum">
              Serial Number
            </label>
            <input
              className="ml-3 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="serialNum"
              id="serialNum"
              value={serialNum}
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mt-5">
            <label className="font-semibold" htmlFor="accessories">
              Accessories
            </label>
            <input
              className="ml-3 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="accessories"
              id="accessories"
              value={accessories}
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <button
              className="mt-8 ml-3 border bg-blue-500 text-white border-gray-400 hover:bg-blue-600 hover:border-white p-1 px-6 rounded-sm"
              type="submit"
              onClick={() => onSubmit()}
              // to={`/details/${user.id}`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetsEdit;
