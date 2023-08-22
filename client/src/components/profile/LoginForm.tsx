import React, { useState, useEffect } from "react";
import api from "../api/User";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../redux/reducers/userSlice";
import { upadateActivity } from "../../redux/reducers/activitySlice";
import apiActivity from "../api/Activity";

interface LoginProps {
  setLoggedIn: (logged: boolean) => void;
}

const LoginForm = ({ setLoggedIn }: LoginProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value } = useSelector((state: any) => state.user);
  const [error, setError] = useState("");
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const success = await api.handleLogin(login);
    if (success.status === 200) {
      localStorage.setItem("bg-token", success.data.token);
      dispatch(userSlice.actions.login(success.data.profile));
      setLoggedIn(true);
      const checkActivity =
        (await apiActivity.handleActivityLogin(success.data.token)) || null;
      if (checkActivity) {
        dispatch(upadateActivity(checkActivity.data));
      }
    } else {
      setError("Invalid Credentials.");
    }
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <form
      onSubmit={handleLogin}
      className="w-5/6 h-5/6 flex flex-col gap-8 items-center justify-center "
    >
      <fieldset className="w-full h-auto">
        <legend className="text-md font-medium text-pallete-header">
          Username
        </legend>
        <input
          type="text"
          title="username"
          className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-medium text-pallete-header">
          Password
        </legend>
        <input
          type="password"
          title="username"
          className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
      </fieldset>
      {error.length > 0 ? (
        <p className="text-sm text-red-400 font-medium">{error}</p>
      ) : null}
      <button
        className="border-2 font-semibold bg-pallete-background 
        text-pallete-himp
        rounded-md hover:text-pallete-background hover:bg-pallete-himp p-2 px-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
