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

  useEffect(() => {
    value.today.forEach((e: DetailsProps) => {
      setAvg(avg + e.time);
      setPoint(point + e.points);
    });
  }, [value]);

  return (
    <div className="h-80 w-full flex flex-col p-4 justify-center gap-4">
      <p className="text-pallete-header text-6xl font-semibold">
        Weekly Details
      </p>
      <div className="flex flex-col gap-2 text-pallete-accent">
        <p className="text-2xl ">
          Daily Average : {avg / Math.floor(new Date().getDay() + 1)} min
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
