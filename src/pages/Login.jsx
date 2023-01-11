import { useState } from "react";
import { CgClose } from "react-icons/cg";
import LoginForm from "../components/LoginForm";


const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const closeErrorMsg = () => {
    setErrorMsg("");
  };
  return (
    <div className="bg-[#E6F0FF]">
      <div className="bg-local">
        <div className="bg-image-2 h-full">
          <div className="flex justify-center items-center">
            <div className="card">
              <h2 className="text-gray-700 text-4xl font-semibold text-center mt-24 uppercase">
                Welcome to Misfit Admin Panel
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[470px]">
        <div className="mt-20 flex justify-center items-center">
          <div className="bg-[#F9FBFF] p-20 border border-[#EAEAEB] rounded-lg">
            {errorMsg && (
              <div className="bg-red-200 text-red-800 px-8 py-4 rounded-lg absolute -top-24 w-full flex justify-between ">
                <p className="text-lg"> {capitalize(errorMsg)}</p>
                <CgClose
                  className="cursor-pointer relative top-0.5"
                  size={24}
                  onClick={closeErrorMsg}
                />
              </div>
            )}
            <h2 className="text-sky-700 font-semibold text-3xl uppercase text-center">
              Admin Login
            </h2>
            <LoginForm errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
