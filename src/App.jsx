import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import ErrorBoundary from "./pages/ErrorBoundary";
import Admin from "./pages/Admin";
import Unauthorized from "./pages/Unauthorized";
import RequireAuth from "./components/RequireAuth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* Protect Routes */}
          <Route element={<RequireAuth/>}>
            <Route path="admin" element={<Admin />} />
          </Route>

          {/* Error Boundary */}
          <Route path="*" element={<ErrorBoundary />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
