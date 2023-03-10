import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AddEmp from "../pages/AddEmp";
import PersonalDataEdit from "../pages/edit/PersonalDataEdit";
import ContactEdit from "../pages/edit/ContactEdit";
import EmergencyEdit from "../pages/edit/EmergencyEdit";
import AssetsEdit from "../pages/edit/AssetsEdit";
import Details from "../pages/Details";
import LeaveForm from "../pages/LeaveForm";
import LeaveList from "../pages/LeaveList";
import Cards from "../pages/Cards";
import LoginForm from "../components/LoginForm";
import LeaveDetails from "../pages/LeaveDetails";
// import Attendance from "../pages/attendance/Attendance";
import DataWise from "../pages/attendance/DateWise";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/addEmp" element={<AddEmp />} />
        <Route path="/personalDataEdit/:id" element={<PersonalDataEdit />} />
        <Route path="/contactEdit/:id" element={<ContactEdit />} />
        <Route path="/emergencyEdit/:id" element={<EmergencyEdit />} />
        <Route path="/assetsEdit/:id" element={<AssetsEdit />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/leaveform" element={<LeaveForm />} />
        <Route path="/leaveList" element={<LeaveList />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/leaveDetails/:id" element={<LeaveDetails />} />
        {/* <Route path="/attendance" element={<Attendance />} /> */}
        <Route path="/DataWise" element={<DataWise />} />
      </Routes>
    </div>
  );
};

export default Index;
