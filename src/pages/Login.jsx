import React, { useEffect, useState } from "react";
import axios from "../axios";

function Login() {
  const [loginData, setLogindata] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogindata({ ...loginData, [name]: value });
  };

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      const res = await axios.post(
        "/email-login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(res)
    } catch (error) {console.log(error);}
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
