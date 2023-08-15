import React from "react";

const Daily = () => {
  return (
    <div
      className="w-40 h-full flex flex-col items-center justify-center gap-4 
    border-2 border-slate-300 rounded-md shadow-md"
    >
      <p className="text-xl font-semibold">Walk</p>
      <p className="text-md"> 30 minutes</p>
      <p className="text-md"> 25 bark points</p>
    </div>
  );
};

export default Daily;
