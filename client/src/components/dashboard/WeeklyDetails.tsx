import React from "react";

const WeeklyDetails = () => {
  return (
    <div className="h-80 w-full flex flex-col p-4 justify-center gap-4">
      <p className="text-pallete-header text-6xl font-semibold">
        Weekly Details
      </p>
      <div className="flex flex-col gap-2 text-pallete-imp">
        <p className="text-2xl ">Daily Average :</p>
        <p className="text-2xl ">Stats</p>
        <p className="text-2xl ">Points:</p>
      </div>
    </div>
  );
};

export default WeeklyDetails;
