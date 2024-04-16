import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <button
      className="font- py-2 px-6 bg-customgreen-500 text-white font-medium text-sm rounded"
      onClick={() => loginWithPopup()}
    >
      Sign in
    </button>
  );
};

export default LoginButton;
