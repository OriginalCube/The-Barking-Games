import React, { useState } from "react";
import User from "../api/User";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [register, setRegister] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (register.password !== register.confirmPassword) {
      setError("Password do not match.");
      return;
    }
    const onRegister = await User.register(register);
    if (onRegister.status === 201) {
      setError("Account created.");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-5/6 h-5/6 flex flex-col gap-8 items-center justify-center"
    >
      <fieldset className="w-full h-auto">
        <legend className="text-md font-semibold text-blue-600">
          Username
        </legend>
        <input
          type="text"
          title="username"
          onChange={(e) =>
            setRegister({ ...register, username: e.target.value })
          }
          className="outline-none border-2 border-indigo-400 p-2 
                text-md rounded-md w-full focus:border-blue-400"
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-semibold text-blue-600">Email</legend>
        <input
          type="email"
          title="username"
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
          className="outline-none border-2 border-indigo-400 p-2 
                text-md rounded-md w-full focus:border-blue-400"
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-semibold text-blue-600">
          Password
        </legend>
        <input
          type="password"
          title="username"
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
          className="outline-none border-2 border-indigo-400 p-2 
                text-md rounded-md w-full focus:border-blue-400"
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-semibold text-blue-600">
          Confirm Password
        </legend>
        <input
          type="password"
          title="username"
          onChange={(e) =>
            setRegister({ ...register, confirmPassword: e.target.value })
          }
          className="outline-none border-2 border-indigo-400 p-2 
                text-md rounded-md w-full focus:border-blue-400"
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

export default RegisterForm;
