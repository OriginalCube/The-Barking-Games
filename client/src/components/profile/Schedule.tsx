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
  item_id?: number;
}

const Schedule = () => {
  const { value } = useSelector((state: any) => state.activity);
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    const dailyArr: ActivityProps[] = [];
    console.log("changes");
    if (value.daily) {
      value.daily.forEach((e: number) => {
        const createDaily = {
          title: activity[e].title,
          description: activity[e].description,
          max: activity[e].max,
          min: activity[e].min,
          image: activity[e].image,
          points: activity[e].points,
          item_id: e,
        };
        dailyArr.push(createDaily);
      });
    }
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
                item_id={e.item_id}
                description={e.description}
                max={e.max}
                min={e.min}
                image={e.image}
                points={e.points}
                add={false}
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
                item_id={0}
                title={e.title}
                add={true}
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
