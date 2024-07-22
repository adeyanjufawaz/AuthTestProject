import React from "react";
import useAuth from "../components/hooks/useAuth";

function Admin() {
  const data = useAuth()
  const {mobile_number, name } = data?.auth;
  console.log(data)

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Admin</h2>
      <h3>Name: {name}</h3>
      <h3>
        Phone: { mobile_number}
      </h3>
    </div>
  );
}

export default Admin;
