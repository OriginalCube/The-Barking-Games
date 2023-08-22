import React, { useState, useEffect } from "react";
import Page from "../components/profile/Page";
import Register from "../components/profile/Register";

interface ProfileProps {
  loggedIn: boolean;
  setLoggedIn: (logged: boolean) => void;
}

const Profile = ({ loggedIn, setLoggedIn }: ProfileProps) => {
  return loggedIn ? <Page /> : <Register setLoggedIn={setLoggedIn} />;
};

export default Profile;
