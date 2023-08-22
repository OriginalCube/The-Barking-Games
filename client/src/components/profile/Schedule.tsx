import React, { useEffect, useState } from "react";
import { activity } from "../../Data.json";
import { useSelector } from "react-redux";
import ScheduleActivity from "./ScheduleActivity";

interface ActivityProps {
  title: string;
  description: string;
  max: number;
  min: number;
  image: string;
  points: number;
}

const Schedule = () => {
  const { value } = useSelector((state: any) => state.activity);
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    const dailyArr: ActivityProps[] = [];
    value.daily.forEach((e: number) => {
      const createDaily = activity[e];
      dailyArr.push(createDaily);
    });
    setDaily(dailyArr);
  }, [value.daily]);

  return (
    <div className="w-full h-auto flex flex-col gap-8">
      <div className="w-full h-auto flex items-center justify-evenly gap-4">
        <div className="w-1/2 h-auto flex flex-col gap-4">
          <p className="text-4xl text-pallete-header">Current Daily Plans</p>
          <div className="w-5/6 h-60 flex flex-col gap-4 overflow-y-auto">
            {daily.map((e: ActivityProps, index: number) => (
              <ScheduleActivity
                key={index}
                index={index}
                title={e.title}
                description={e.description}
                max={e.max}
                min={e.min}
                image={e.image}
                points={e.points}
                add={true}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 h-auto flex flex-col gap-4">
          <p className="text-4xl text-pallete-header ">Available Daily Plans</p>
          <div className="w-5/6 h-60 flex flex-col gap-4 overflow-y-auto">
            {activity.map((e: ActivityProps, index: number) => (
              <ScheduleActivity
                key={index}
                index={index}
                title={e.title}
                add={false}
                description={e.description}
                max={e.max}
                min={e.min}
                image={e.image}
                points={e.points}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
