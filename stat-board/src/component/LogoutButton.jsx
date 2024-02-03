import React from 'react';
import Shutdown from "../assets/Shutdown.png";

const LogoutButton = () => {
  return (
    <button>
    Logout <img src={Shutdown} alt="logout" />{" "}
  </button>
  )
}

export default LogoutButton