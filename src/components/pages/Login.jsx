import React, { useState } from "react";
import Container from "../container/Container";
import logo from "../../assets/goodmorning.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let nav = useNavigate();
  let [secretKey, setSecretKey] = useState("");
  let [error, setError] = useState("");

  let handleLogin = () => {
    
    axios
      .post("http://localhost:8000/api/v1/auth/login", {secretKey})
      .then((res) => {
        console.log(res);
        if (res.data.error == "Login Success") {
          nav("/dashboard/home");
          setError("");
          setSecretKey("");
          localStorage.setItem("login","true")
        } else if (res.data.error == "Credential error") {
          setError(res.data.error);
        }
      });
  };

  return (
    <div>
      <div className="py-[50px] md:py-[80px] bg-[#f6f6f6]">
        <Container>
          <div className="flex flex-col justify-center items-center gap-5">
            <div>
              <img src={logo} className="w-[500px] h-auto " />
            </div>
            <div>
              <p className="center text-[31px] font-semibold text-[#5E5E5E]">
                Welcome to Admin Panel
              </p>
            </div>
            <div className="w-[436px] h-[231px] shadow-lg rounded-lg flex flex-col justify-center items-center gap-3 shadow-slate-500">
              <p className="text-center text-[#5E5E5E] text-[25px]">
                Enter Admin Secret Key
              </p>
              {error && (
                <div className="py-3 text-center text-red-500">
                  {error && error}
                </div>
              )}
              <input
                type="password"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                className="w-[229px] h-[45px] rounded-3xl shadow-lg shadow-slate-400 py-2 px-3 outline-none "
              />
              <button
                onClick={handleLogin}
                className="rounded-full bg-[#8CC84B] hover:bg-[#80b744] text-white text-[14px] w-[115px] h-[45px]"
              >
                Enter
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
