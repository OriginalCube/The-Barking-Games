import axios from "axios";

const api_url = "/api/v1/activity";
const token = localStorage.getItem("bg-token");

interface CompleteProps {
  id: number;
  points: number;
  min: number;
}

const handleComplete = async ({ id, points, min }: CompleteProps) => {
  const onComplete = await axios.post(
    `${api_url}/create`,
    { id: id, points: points, time: min },
    {
      headers: { authorization: `Bearer ${token}` },
    },
  );
  console.log(onComplete);
};

const activity = { handleComplete };

export default activity;
