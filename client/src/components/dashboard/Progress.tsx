import React from "react";

const Progress = ({ activity }: any) => {
  return (
    <div className="h-60 w-4 flex flex-col gap-1 items-center justify-end ">
      <div
        style={{ height: `${activity}%` }}
        className="bg-red-300 w-1/2 rounded-full"
      ></div>
      <p className="text-md font-thin">M</p>
    </div>
  );
};

export default Progress;
