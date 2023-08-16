import React from "react";
import Progress from "./Progress";

const WeeklyProgress = () => {
  const id = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full h-80 flex gap-2 flex-col justify-evenly">
      <p className="p-2 text-xl font-semibold">Weekly Activity</p>
      <div className="w-full flex items-center justify-evenly">
        {id.map((e: number, index: number) => (
          <Progress key={index} activity={e * 10} />
        ))}{" "}
      </div>
    </div>
  );
};

export default WeeklyProgress;
