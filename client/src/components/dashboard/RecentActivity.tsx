import React from "react";
import { useSelector } from "react-redux";
import RecentActivities from "./RecentActivities";

interface ActivityProps {
  item_id: number;
  points: number;
  time: number;
  createdAt: Date;
}

const RecentActivity = () => {
  const RecentActivity = useSelector((state: any) => state.activity);
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <p className="text-xl font-semibold text-pallete-header">
        Recent Activities
      </p>
      <div
        className="w-full h-48 flex flex-col gap-4 items-center 
      justify-evenly overflow-auto p-4"
      >
        {RecentActivity
          ? RecentActivity.value.activity.map(
              (e: ActivityProps, index: number) => (
                <RecentActivities
                  key={index}
                  item_id={e.item_id}
                  date={e.createdAt}
                  points={e.points}
                  time={e.time}
                />
              ),
            )
          : null}
      </div>
    </div>
  );
};

export default RecentActivity;
