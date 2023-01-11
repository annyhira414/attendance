import { useState, FC } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { postData } from "../lib/services";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const LoginForm = ({ errorMsg, setErrorMsg }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await postData("login", data);
    if (res?.success) {
      toast.success(res?.message);
      Cookies.set("token", res?.data?.token);
      Cookies.set("name", res?.data?.name);
      navigate("/");
    } else {
      toast.error(res?.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex mt-10">
        <div className="mr-2">
          <BiUserCircle
            className={`${
              errors.email?.message || errorMsg
                ? "text-red-600"
                : "text-sky-700"
            }`}
            size={32}
          />
        </div>
        <input
          type="text"
          className={`border border-gray-400 rounded pl-1  ${
            errors.email?.message || errorMsg ? "login-error" : " login-success"
          }`}
          placeholder="Email"
          {...register("email")}
        />
        <p className="text-red-500 absolute mt-9">{errors.email?.message}</p>
      </div>
      <div className="relative flex mt-10">
        <div className=" mr-2">
          <AiOutlineLock
            className={`${
              errors.password?.message || errorMsg
                ? "text-red-600"
                : "text-sky-700"
            }`}
            size={32}
          />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          className={`border border-gray-400 rounded pl-1  ${
            errors.password?.message || errorMsg
              ? "login-error"
              : " login-success"
          }`}
          placeholder="password"
          {...register("password")}
        />
        <p className="text-red-500 absolute mt-9">{errors.password?.message}</p>
        <div
          className="flex absolute inset-y-0 -right-8  items-center pl-3 "
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <IoEyeOutline
              className="text-sky-700 hover:text-sky-600 cursor-pointer"
              size={24}
            />
          ) : (
            <IoEyeOffOutline
              className="text-sky-700 hover:text-sky-600 cursor-pointer"
              size={24}
            />
          )}
        </div>
      </div>
      <div className="mt-10">
        <button
          className="border font-semibold border-blue-700 py-1 px-5 rounded text-blue-600"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
