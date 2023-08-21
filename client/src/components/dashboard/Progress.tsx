import React, { useState, useEffect } from "react";

interface ProgressProps {
  dates: [];
  index: number;
}

const Progress = ({ dates, index }: any) => {
  const [time, setTime] = useState(0);
  const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  useEffect(() => {
    if (dates.length > 0) {
      let track = 0;
      dates.forEach((e: any) => {
        if (new Date(e.createdAt).getDay() === index) {
          track += e.time;
        }
      });
      setTime(track);
    }
  }, [dates]);

  return (
    <div className="h-60 w-4 flex flex-col gap-1 items-center justify-end ">
      <div
        style={{ height: `${(time / 130) * 100}%` }}
        className="bg-pallete-accent w-1/2 rounded-full"
      ></div>
      <p className="text-md text-pallete-imp font-normal">
        {daysOfWeek[index]}
      </p>
    </div>
  );
};

export default Progress;
