import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Rankings from "./pages/Rankings";
import Tracker from "./pages/Tracker";
import Navigation from "./Navigation";
import api from "./components/api/User";
import apiActivity from "./components/api/Activity";
import { login } from "./redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { upadateActivity, addDaily } from "./redux/reducers/activitySlice";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const userAuth = async () => {
    const checkAuth = (await api.auth()) || null;
    if (checkAuth) {
      dispatch(login(checkAuth.data));
      setLoggedIn(true);
      //Now checks if there's activity done in the same day
      const checkActivity = (await apiActivity.handleActivity()) || null;
      if (checkActivity) {
        dispatch(upadateActivity(checkActivity.data));
      }

      const checkDaily = await apiActivity.handleRetrieveDaily();
      if (checkDaily) {
        dispatch(addDaily(checkDaily.data.item_id));
      }
    } else {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    userAuth();
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row bg-pallete-background">
      <BrowserRouter>
        <Navigation />
        <div className="flex justify-center w-full">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route
              path="profile"
              element={
                <Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              }
            />
            <Route path="rankings" element={<Rankings />} />
            <Route path="tracker" element={<Tracker />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
