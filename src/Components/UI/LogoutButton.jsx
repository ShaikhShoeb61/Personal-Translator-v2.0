import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="flex justify-center items-center bg-white w-20 h-8 border border-customgray-300 border-opacity-50 absolute right-12 top-14 font-medium text-sm text-customgrey-400"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Logout
    </button>
  );
};

export default LogoutButton;
