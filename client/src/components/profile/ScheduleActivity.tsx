import React, { useState } from "react";
import { motion } from "framer-motion";
import api from "../api/Activity";

interface ActivityProps {
  title: string;
  description: string;
  max: number;
  min: number;
  index: number;
  image: string;
  points: number;
  add: boolean;
}

const ScheduleActivity = ({
  title,
  description,
  max,
  min,
  image,
  points,
  index,
  add,
}: ActivityProps) => {
  const [desc, setDesc] = useState(false);

  const handlDailyActivity = async () => {
    if (add) {
      //removes clicked activity
    } else {
      const onDailyActivity = await api.handleDailyActivity(index);
    }
    //redux add daily
  };

  return (
    <div className="w-full px-2 h-auto flex flex-col items-start justify-center gap-4">
      <div className="flex w-full items-center justify-start gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-1/2 h-auto flex items-center justify-start gap-4 cursor-pointer"
          onClick={() => setDesc(!desc)}
        >
          <div className="h-12 w-auto">
            <img
              src={`/assets/icons/${image}`}
              className="h-full w-auto"
              alt=""
            />
          </div>
          <div className="w-auto h-auto flex flex-col gap-1">
            <p className="text-2xl font-medium text-pallete-accent">{title}</p>
            <p className="text-md font-medium text-pallete-imp">
              Points : {points}
            </p>
            <p className="text-md font-medium text-pallete-imp">
              Time : {min}min - {max}min
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: `${add ? "45deg" : "0"}` }}
          className="h-8 w-auto cursor-pointer"
          onClick={handlDailyActivity}
        >
          <img src="/assets/icons/p.png" className="h-full w-auto" alt="" />
        </motion.div>
      </div>
      {desc ? (
        <p className={`w-5/6 text-left text-xl text-pallete-imp`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default ScheduleActivity;
