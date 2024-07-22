import React, { useEffect, useState } from "react";
import axios from "../axios";
import useAuth from "../components/hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLogindata] = useState({});
  const { setAuth } = useAuth()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogindata({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = loginData;
      const res = await axios.post(
        "/email-login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      const data = res?.data?.data
      console.log(data)
      setAuth(data);
      navigate(from,{replace:true})
    } catch (error) {
      console.log(error);
      switch (true) {
        case !error.response.status:
          console.log("No Server Response");
          break;
        case error.response.status == 422:
          console.log("Enter All Input Field");
          break;
        case error.response.status == 401:
          console.log("This user is unauthorized");
          break;
        case error.response.status == 400:
          console.log("Invalid Username or password");
          break;

        default:
          console.log("first")
          break;
      }
      
    }
  };
  return (
    <div className="flex p-6 justify-center items-center">
      <div>
        <h2 className="text-center">Login</h2>
        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-8 bg-gray-600 p-4 w-96"
        >
          <div className="flex flex-col my-6 gap-1">
            <h2>Email address:</h2>
            <input
              type="text"
              className=" outline-none rounded-full p-3 "
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="flex flex-col my-6 gap-1">
            <h2>Password:</h2>
            <input
              type="text"
              className=" outline-none rounded-full p-3 "
              onChange={handleChange}
              name="password"
            />
          </div>
          <button className="bg-red-600 px-5 py-2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
