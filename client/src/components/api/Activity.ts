import axios from "axios";

const api_url = "/api/v1/activity";
const token = localStorage.getItem("bg-token");

interface CompleteProps {
  id: number;
  points: number;
  min: number;
}

//Saves progress of user
const handleComplete = async ({ id, points, min }: CompleteProps) => {
  const onComplete = await axios.post(
    `${api_url}/create`,
    { id: id, points: points, time: min },
    {
      headers: { authorization: `Bearer ${token}` },
    },
  );
  //React with redux
  return onComplete.data;
};

//Initial, collects activity done in the same day
const handleActivity = async () => {
  const onActvity = await axios.get(`${api_url}/collect`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return onActvity;
};

const handleActivityLogin = async (token: number) => {
  const onActvity = await axios.get(`${api_url}/collect`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return onActvity;
};

const handleDailyActivity = async (id: number) => {
  const onDailyActivity = await axios.get(`${api_url}/add/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return onDailyActivity;
};

const handleRetrieveDaily = async () => {
  const onDailyActivity = await axios.get(`${api_url}/daily`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return onDailyActivity;
};

const activity = {
  handleComplete,
  handleActivity,
  handleActivityLogin,
  handleDailyActivity,
  handleRetrieveDaily,
};

export default activity;
