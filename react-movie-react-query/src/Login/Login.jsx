import React from "react";
import { getRequestToken } from "../../utils/login";

const Login = () => {
  return (
    <>
      <div>Login</div>
      <button onClick={getRequestToken}>login</button>
    </>
  );
};

export default Login;
