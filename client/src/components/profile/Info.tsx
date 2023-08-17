import React from "react";

interface InfoProps {
  setHasAccount: (hasAccount: boolean) => void;
  hasAccount: boolean;
}

const Info = ({ setHasAccount, hasAccount }: InfoProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center text-white justify-center">
      <p className="text-3xl font-semibold">Barking Games</p>
      <div className="h-40 w-40 border-2 rounded-full"></div>
      <p
        className="text-md cursor-pointer"
        onClick={() => setHasAccount(!hasAccount)}
      >
        Click to {hasAccount ? "create account" : "login account"}
      </p>
      <p className="text-sm font-light w-5/6 p-2 bg-slate-900 rounded-md">
        Your canine activity partner. Log walks, hikes, and playtime with your
        dog. Stay healthy and connected while creating lasting memories.
      </p>
    </div>
  );
};

export default Info;
