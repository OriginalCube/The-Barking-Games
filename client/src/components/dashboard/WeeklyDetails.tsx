import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface DetailsProps {
  time: number;
  points: number;
}

const WeeklyDetails = () => {
  const { value } = useSelector((state: any) => state.activity);
  const [point, setPoint] = useState(0);
  const [avg, setAvg] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let track = 0;
    let pt = 0;
    let average = 0;
    value.today.forEach((e: DetailsProps) => {
      track += e.time;
      pt += e.points;
    });
    value.week.forEach((e: any) => {
      average += e.time;
    });
    setPoint(pt);
    setAvg(average);
    setTime(track);
  }, [value]);

  return (
    <div className="h-80 w-full flex flex-col p-4 justify-center gap-4">
      <p className="text-pallete-header text-6xl font-semibold">
        Activity Details
      </p>
      <div className="flex flex-col gap-2 text-pallete-accent">
        <p className="text-2xl ">
          Daily Average :{" "}
          <span className="text-pallete-imp">{Math.floor(avg / 7)} min </span>
        </p>
        <p className="text-2xl ">
          Time :{" "}
          <span className="text-pallete-imp">
            {avg ? Math.floor(avg) : 0} min
          </span>
        </p>
        <p className="text-2xl ">
          Score: <span className="text-pallete-imp">{point} points</span>
        </p>
      </div>
    </div>
  );
};

export default WeeklyDetails;
