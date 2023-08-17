import React, { useState } from "react";
import Page from "../components/profile/Page";
import Register from "../components/profile/Register";

const Profile = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? <Page /> : <Register />;
};

export default Profile;
