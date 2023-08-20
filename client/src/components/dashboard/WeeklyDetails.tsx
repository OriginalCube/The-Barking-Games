import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const WeeklyDetails = () => {
  const { value } = useSelector((state: any) => state.activity);
  const [points, setPoints] = useState(0);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="h-80 w-full flex flex-col p-4 justify-center gap-4">
      <p className="text-pallete-header text-6xl font-semibold">
        Weekly Details
      </p>
      <div className="flex flex-col gap-2 text-pallete-imp">
        <p className="text-2xl ">Daily Average :</p>
        <p className="text-2xl ">Stats :</p>
        <p className="text-2xl ">Points :</p>
      </div>
    </div>
  );
};

export default WeeklyDetails;
