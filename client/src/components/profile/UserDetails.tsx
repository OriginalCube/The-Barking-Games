import React from "react";
import { motion } from "framer-motion";

interface UserProps {
  username: string;
  email: string;
}

const UserDetails = ({ username, email }: UserProps) => {
  return (
    <div className="mt-10 w-full h-auto flex gap-8">
      <motion.div
        className="h-60 w-auto "
        whileHover={{ scale: 1.1, rotate: "45deg" }}
      >
        <img
          src="/assets/profile/0.png"
          className="h-full w-auto p-4 border-4 border-pallete-imp rounded-full"
          alt=""
        />
      </motion.div>
      <div className="flex flex-col gap-4">
        <p className="text-8xl text-pallete-header">{username}</p>
        <p className="text-2xl text-pallete-accent">{email}</p>
        <p className="text-2xl text-pallete-accent">Birthday</p>
      </div>
    </div>
  );
};

export default UserDetails;
