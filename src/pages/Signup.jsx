import axios from "../axios";
import { useState } from "react";
Link;
import { Link } from "react-router-dom";

function Signup() {
  const [loginData, setLogindata] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogindata({ ...loginData, [name]: value });
  };

  // useEffect(() => {
  //   console.log(loginData);
  // }, [loginData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("first");
    // console.log(loginData);
    try {
      const res = await axios.post(
        "/create-user",
        {
          name: loginData.name,
          country_id: loginData.countryCode,
          mobile_number: loginData.phone,
          password: loginData.password,
          email: loginData.email,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex p-6 justify-center items-center">
      <div>
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mt-8 bg-gray-600 p-4 w-96">
          <div className="flex flex-col my-6 gap-1">
            <h2>Name:</h2>
            <input
              type="text"
              className=" outline-none rounded-full p-3 "
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="flex flex-col my-6 gap-1">
            <h2>Country Code:</h2>
            <input
              type="text"
              className=" outline-none rounded-full p-3 "
              onChange={handleChange}
              name="countryCode"
            />
          </div>
          <div className="flex flex-col my-6 gap-1">
            <h2>Phone:</h2>
            <input
              type="phone"
              className=" outline-none rounded-full p-3 "
              onChange={handleChange}
              name="phone"
            />
          </div>
          <div className="flex flex-col my-6 gap-1">
            <h2>Email address:</h2>
            <input
              type="email"
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
      <Link to="/admin" className="bg-red-600 px-5 py-2">
        Admin Page
      </Link>
    </div>
  );
}

export default Signup;
