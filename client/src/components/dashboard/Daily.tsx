import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../api/Activity";
import { addActivity } from "../../redux/reducers/activitySlice";
import { useSelector, useDispatch } from "react-redux";

interface DailyProps {
  title: string;
  max: number;
  min: number;
  points: number;
  index: number;
}

const Daily = ({ index, title, max, min, points }: DailyProps) => {
  const [completed, isCompleted] = useState(false);

  const { value } = useSelector((state: any) => state.activity);
  const dispatch = useDispatch();

  const handleComplete = async () => {
    if (!completed) {
      const onComplete = await api.handleComplete({ id: index, points, min });
      dispatch(addActivity(onComplete));
    }
  };

  useEffect(() => {
    value.today.forEach(({ item_id, createdAt }: any) => {
      if (
        new Date().getDate() === new Date(createdAt).getDate() &&
        item_id === index
      ) {
        isCompleted(true);
      }
    });
  }, [value.today]);

  return (
    <div className="w-40 h-full flex flex-col justify-center gap-4 p-2">
      <p className="text-2xl font-semibold text-pallete-accent">{title}</p>
      <div className="w-full h-auto flex items-center gap-2">
        <img src="/assets/icons/time.png" className="h-5 w-auto" alt="" />
        <p className="text-pallete-imp text-md font-medium w-full text-left">
          {min} - {max} minutes
        </p>
      </div>
      <div className="w-full h-auto flex items-center gap-2">
        <img src="/assets/icons/points.png" className="h-5 w-auto" alt="" />
        <p className="text-pallete-imp font-medium text-md">{points} points</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={handleComplete}
        className={`${
          !completed
            ? "bg-pallete-accent text-pallete-background"
            : "border-2 border-pallete-accent text-pallete-accent bg-pallete-background"
        } py-2 rounded-xl`}
      >
        {completed ? "completed" : "complete"}
      </motion.button>
    </div>
  );
};

export default Daily;
