import React, { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

function useAuth () {
  return useContext(AuthContext);
}

export default useAuth;
