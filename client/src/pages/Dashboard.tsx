import React from "react";
import Daily from "../components/dashboard/Daily";
import { activity } from "../Data.json";

interface DailyProps {
  title: string;
  description: string;
  max: number;
  min: number;
  points: number;
}

const Dashboard = () => {
  return (
    <div className="w-11/12 flex flex-col gap-8">
      <div className="w-4/6 h-auto flex items-end justify-evenly gap-4">
        <p className="w-1/2 text-6xl font-medium mt-10">Activity Tracking</p>
        <p className="w-1/2 text-xl font-light"> {Date().toString()}</p>
      </div>
      <div className="flex items-center justify-evenly gap-4">
        <div className="flex w-4/5 items-center justify-center gap-4">
          <div className="w-1/2 h-80 flex flex-col gap-2">
            <p className="p-2 text-xl">Today's Random Activity</p>
            <div className="w-auto h-72 flex flex-wrap gap-4 justify-around items-center overflow-y-scroll">
              {activity.map((e: DailyProps, index: number) => (
                <Daily
                  key={index}
                  title={e.title}
                  max={e.max}
                  min={e.min}
                  points={e.points}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 h-80 bg-blue-100 rounded-md"></div>
        </div>
        <div className="flex w-1/5 items-center justify-center gap-4"></div>
      </div>
    </div>
  );
};

export default Dashboard;
