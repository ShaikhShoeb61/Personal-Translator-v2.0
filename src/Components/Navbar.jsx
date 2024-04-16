import React from "react";
import LoginButton from "./UI/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Profile from "./UI/Profile";
import LogoutButton from "./UI/LogoutButton";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const [loginState, setLoginState] = useState(false);

  const handleLogout = () => {
    setLoginState((loginState) => !loginState);
  };

  return (
    <div className="h-[68px] w-full border border-customgray-300 border-opacity-50 flex items-center px-12 justify-between">
      <img src="./Icons/logo.svg" alt="logo" />
      {isAuthenticated ? (
        <Profile handleLogout={handleLogout} />
      ) : (
        <LoginButton />
      )}
      {loginState ? <LogoutButton /> : null}
    </div>
  );
};

export default Navbar;
