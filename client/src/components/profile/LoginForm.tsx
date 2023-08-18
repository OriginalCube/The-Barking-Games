import React, { useState } from "react";
import api from "../api/User";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const success = await api.login(login);
    if (success.status === 200) {
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-5/6 h-5/6 flex flex-col gap-8 items-center justify-center "
    >
      <fieldset className="w-full h-auto">
        <legend className="text-md font-semibold text-blue-600">
          Username
        </legend>
        <input
          type="text"
          title="username"
          className="outline-none border-2 border-indigo-400 p-2 
                text-md rounded-md w-full focus:border-blue-400"
          onChange={(e) => setLogin({ ...login, username: e.target.value })}
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-semibold text-blue-600">
          Password
        </legend>
        <input
          type="password"
          title="username"
          className="outline-none border-2 border-indigo-400 p-2 
                text-md rounded-md w-full focus:border-blue-400"
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
        />
      </fieldset>
      {error.length > 0 ? (
        <p className="text-sm text-red-400 font-medium">{error}</p>
      ) : null}
      <button
        className="border-2 font-medium hover:bg-white hover:text-indigo-600 border-indigo-600 rounded-md text-white bg-indigo-600 p-2 px-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
