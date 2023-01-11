import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PersonalDataEdit = (props) => {
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
            <label className="font-semibold" htmlFor="bd">
              Date of Birth
            </label>
            <input
              className="ml-3 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="bd"
              id="bd"
              value={bd}
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mt-5">
            <label className="font-semibold" htmlFor="nid">
              NID Number
            </label>
            <input
              className="ml-3 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="nid"
              id="nid"
              value={nid}
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mt-5">
            <label className="font-semibold" htmlFor="gender">
              Gender
            </label>
            <input
              className="ml-3 mr-4 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="gender"
              id="gender"
              value={gender}
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mt-5">
            <label className="font-semibold" htmlFor="father">
              Father's Name
            </label>
            <input
              className="ml-3 mt-1 border rounded-sm h-10 pl-2 border-gray-500"
              type="text"
              name="father"
              id="father"
              value={father}
              size={30}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div>
            <button
              className="mt-8 ml-3 border bg-blue-500 text-white border-gray-400 p-1 px-6 rounded-sm hover:bg-blue-600 hover:border-white"
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

export default PersonalDataEdit;
