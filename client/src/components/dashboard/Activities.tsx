import React from "react";
import { activity } from "../../Data.json";
import Daily from "./Daily";

interface DailyProps {
  title: string;
  description: string;
  max: number;
  min: number;
  points: number;
}

const Activities = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <p className="p-2 text-xl font-semibold">Today's Random Activity</p>
      <div className="w-auto h-72 flex flex-wrap gap-4 justify-around items-center overflow-y-scroll">
        {activity.map((e: DailyProps, index: number) => (
          <Daily
            index={index}
            key={index}
            title={e.title}
            max={e.max}
            min={e.min}
            points={e.points}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
