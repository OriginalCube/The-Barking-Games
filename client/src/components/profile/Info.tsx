import React from "react";
import { motion } from "framer-motion";

interface InfoProps {
  setHasAccount: (hasAccount: boolean) => void;
  hasAccount: boolean;
}

const Info = ({ setHasAccount, hasAccount }: InfoProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center text-white justify-center">
      <p className="text-3xl font-semibold">Barking Games</p>
      <motion.div
        whileHover={{ scale: 1.1, rotate: "45deg" }}
        className="h-40 w-40 border-2 rounded-full"
      >
        <img
          src={`/assets/icons/${hasAccount ? "login" : "register"}.png`}
          className="w-full h-full"
          alt=""
        />
      </motion.div>
      <p
        className="text-md cursor-pointer border-2 p-2 px-3 rounded-xl"
        onClick={() => setHasAccount(!hasAccount)}
      >
        Click to {hasAccount ? "create account" : "login account"}
      </p>
      <p className="text-sm font-base w-5/6 p-3 shadow-md bg-yellow-300 text-blue-900 rounded-md">
        Your canine activity partner. Track walks, hikes, and playtime with your
        dog. Stay healthy and connected while creating lasting memories.
      </p>
    </div>
  );
};

export default Info;
