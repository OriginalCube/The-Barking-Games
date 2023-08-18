import React, { useState, useEffect } from "react";
import Page from "../components/profile/Page";
import Register from "../components/profile/Register";

interface ProfileProps {
  loggedIn: boolean;
}

const Profile = ({ loggedIn }: ProfileProps) => {
  return loggedIn ? <Page /> : <Register />;
};

export default Profile;
