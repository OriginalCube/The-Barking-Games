import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const imageAddress = "/assets/icons/";
  return (
    <nav className="w-1/6 h-screen bg-slate-200">
      <div className="w-full h-40 flex flex-col gap-4">
        <div className="h-24 w-full flex items-center justify-center">
          <img
            src={imageAddress + "barkingGames.gif"}
            className="h-24 w-auto"
            alt=""
          />
          <p className="text-2xl font-semibold">Barking Games</p>
        </div>
        <Link to={"/"} className="flex items-center justify-evenly">
          <img src="" alt="" />
          <p className="text-xl font-light">Dashboard</p>
        </Link>
        <Link to={"/profile"} className="flex items-center justify-evenly">
          <img src="" alt="" />
          <p className="text-xl font-light">Profile</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
