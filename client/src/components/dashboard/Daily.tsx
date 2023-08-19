import React from "react";
import { motion } from "framer-motion";
import api from "../api/Activity";

interface DailyProps {
  title: string;
  max: number;
  min: number;
  points: number;
  index: number;
}

const Daily = ({ index, title, max, min, points }: DailyProps) => {
  const handleComplete = async () => {
    const onComplete = api.handleComplete({ id: index, points, min });
  };
  return (
    <div className="w-40 h-full flex flex-col justify-center gap-4 p-2">
      <p className="text-2xl font-semibold">{title}</p>
      <div className="w-full h-auto flex items-center gap-2">
        <img src="/assets/icons/time.png" className="h-5 w-auto" alt="" />
        <p className="text-md w-full text-left">
          {min} - {max} minutes
        </p>
      </div>
      <div className="w-full h-auto flex items-center gap-2">
        <img src="/assets/icons/points.png" className="h-5 w-auto" alt="" />
        <p className="text-md">{points} points</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={handleComplete}
        className="bg-slate-800 py-2 text-white rounded-xl"
      >
        Complete
      </motion.button>
    </div>
  );
};

export default Daily;
