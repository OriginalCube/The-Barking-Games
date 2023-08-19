import React from "react";
import { useSelector } from "react-redux";
import { activity } from "../../Data.json";

interface ActivityProps {
  item_id: number;
  points: number;
  time: number;
  date: Date;
}
const RecentActivity = () => {
  const RecentActivity = useSelector((state: any) => state.activity);
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <p className="text-xl font-semibold text-pallete-header">
        Recent Activities
      </p>
      <div className="w-full h-48 flex flex-wrap gap-4 items-center justify-evenly overflow-y-auto"></div>
    </div>
  );
};

export default RecentActivity;
