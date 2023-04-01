import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link to="/login" className="cursor-pointer">
        Login
      </Link>
      <Link to="/register" className="cursor-pointer">
        Register
      </Link>
      <Link to="/chats" className="cursor-pointer">
        Chats
      </Link>
    </div>
  );
};

export default LandingPage;
