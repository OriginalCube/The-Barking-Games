import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Rankings from "./pages/Rankings";
import Tracker from "./pages/Tracker";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Navigation />
        <div className="flex justify-center w-full">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="rankings" element={<Rankings />} />
            <Route path="tracker" element={<Tracker />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
