import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import { useSelector } from "react-redux";

const WeeklyProgress = () => {
  const { value } = useSelector((state: any) => state.activity);
  const [dates, setDates] = useState([]);
  const days = [0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {
    setDates(value.week);
  }, [value.week]);

  return (
    <div className="w-full h-80 flex gap-2 flex-col justify-evenly">
      <p className="p-2 text-xl font-semibold text-pallete-header">
        Weekly Activity
      </p>
      <div className="w-full flex items-center justify-evenly">
        {days.map((e: number, index: number) => (
          <Progress key={index} dates={dates ? dates : null} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyProgress;
