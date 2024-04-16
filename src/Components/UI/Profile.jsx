import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = ({ handleLogout }) => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <img
        onClick={() => handleLogout()}
        className="cursor-pointer w-9 rounded-full"
        src={user?.picture}
        alt={user?.name}
      />
    </div>
  );
};

export default Profile;
