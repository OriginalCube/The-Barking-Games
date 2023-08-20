import React from "react";
import { activity } from "../../Data.json";

interface ActivityProps {
  item_id: number;
  points: number;
  time: number;
  date: Date;
}

const RecentActivities = ({ item_id, points, time, date }: ActivityProps) => {
  return new Date(date).getDate() === new Date().getDate() ? (
    <div className="w-full flex items-center justify-start gap-8">
      <img
        src={`/assets/icons/${activity[item_id].image}`}
        className="h-8 w-auto"
        alt=""
      />
      <div className="flex flex-col gap-1">
        <p className="text-xl font-medium text-pallete-accent">
          {activity[item_id].title}
        </p>
        <p className="text-sm font-medium text-pallete-imp">
          Points : {points}
        </p>
        <p className="text-sm font-medium text-pallete-imp">Time : {time}</p>
      </div>
    </div>
  ) : null;
};

export default RecentActivities;
