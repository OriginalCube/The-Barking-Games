import React from "react";
import Activities from "../components/dashboard/Activities";
import WeeklyProgress from "../components/dashboard/WeeklyProgress";
import WeeklyDetails from "../components/dashboard/WeeklyDetails";
import ActivityAim from "../components/dashboard/ActivityAim";

const Dashboard = () => {
  return (
    <div className="w-11/12 flex flex-col gap-8">
      <div className="w-full md:w-4/6 h-auto flex flex-col md:flex-row items-center justify-center md:items-end md:justify-evenly gap-4">
        <p className="text-pallete-header md:w-1/2 text-4xl md:text-6xl font-semibold mt-10">
          Activity Tracking
        </p>
        <p className="text-emerald-400 md:w-1/2 text-sm md:text-xl font-normal text-pallete-header">
          {new Date().toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-4">
        <div className="flex flex-col md:flex-row w-full md:w-4/5 items-start justify-center gap-12">
          <div className="w-full md:w-1/2 h-auto flex flex-col gap-8">
            <Activities />
            <WeeklyProgress />
          </div>
          <div className="w-full md:w-1/2 h-auto items-center justify-evenly gap-4">
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
