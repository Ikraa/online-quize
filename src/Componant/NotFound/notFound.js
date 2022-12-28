import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl pt-10 pb-4 text-red-600 font-bold">404!!!</h1>
      <p className="text-black-400 text-3xl">Page not found</p>
      <p className="text-black-400 text-xl pt-4">
        The page you are looking for doesn't exist or another error occurred.
      </p>
      

      <Link to="/home" className="text-black text-3xl text-blue-400">
        GO Back
      </Link>
    </div>
  );
};

export default NotFound;
