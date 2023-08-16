import React from "react";
import RecentActivity from "./RecentActivity";
import WeeklyAim from "./WeeklyAim";

const ActivityAim = () => {
  return (
    <div className="flex flex-col gap-4">
      <RecentActivity />
      <WeeklyAim />
    </div>
  );
};

export default ActivityAim;
