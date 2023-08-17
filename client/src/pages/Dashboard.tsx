import React from "react";
import Daily from "../components/dashboard/Daily";
import Activities from "../components/dashboard/Activities";
import WeeklyProgress from "../components/dashboard/WeeklyProgress";
import WeeklyDetails from "../components/dashboard/WeeklyDetails";
import ActivityAim from "../components/dashboard/ActivityAim";

const Dashboard = () => {
  return (
    <div className="w-11/12 flex flex-col gap-8">
      <div className="w-4/6 h-auto flex items-end justify-evenly gap-4">
        <p className="w-1/2 text-6xl font-semibold mt-10">Activity Tracking</p>
        <p className="w-1/2 text-xl font-light"> {Date().toString()}</p>
      </div>
      <div className="flex items-center justify-evenly gap-4">
        <div className="flex w-4/5 items-start justify-center gap-12">
          <div className="w-1/2 h-auto flex flex-col gap-8">
            <Activities />
            <WeeklyProgress />
          </div>
          <div className="w-1/2 h-auto items-center justify-evenly gap-4">
            <WeeklyDetails />
            <ActivityAim />
          </div>
        </div>
        <div className="flex w-1/5 items-center justify-center gap-4"></div>
      </div>
    </div>
  );
};

export default Dashboard;
