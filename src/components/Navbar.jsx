import React from 'react'
import { Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className=" w-full bg-black  items-center p-4 flex justify-between gap-4">
      <Link to="/" className="text-white">
        LOGO
      </Link>
      <div className="flex gap-5">
        <Link className="bg-green-400 py-3 px-5 hover:opacity-90" to="/signUp">
          SignUp
        </Link>
        <Link className="bg-green-400 py-3 px-5 hover:opacity-90" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar