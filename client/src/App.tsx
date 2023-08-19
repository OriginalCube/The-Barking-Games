import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Rankings from "./pages/Rankings";
import Tracker from "./pages/Tracker";
import Navigation from "./Navigation";
import api from "./components/api/User";
import { login } from "./redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);

  const userAuth = async () => {
    const checkAuth = (await api.auth()) || null;
    if (checkAuth) {
      dispatch(login(checkAuth.data));
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    userAuth();
  }, []);

  return (
    <div className="flex">
      <p className="text-4xl font-bold text-red-500 absolute hidden">
        {JSON.stringify(userData)}
      </p>
      <BrowserRouter>
        <Navigation />
        <div className="flex justify-center w-full">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile loggedIn={loggedIn} />} />
            <Route path="rankings" element={<Rankings />} />
            <Route path="tracker" element={<Tracker />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
