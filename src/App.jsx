import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from "./pages/Login"
import SignUp from "./pages/Signup"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className=" w-full bg-black  items-center p-4 flex justify-between gap-4">
        <Link to="/" className="text-white">LOGO</Link>
        <div className="flex gap-5">
          <Link
            className="bg-green-400 py-3 px-5 hover:opacity-90"
            to="/signUp"
          >
            SignUp
          </Link>
          <Link className="bg-green-400 py-3 px-5 hover:opacity-90" to="/login">
            Login
          </Link>
        </div>
      </nav>
      
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App
