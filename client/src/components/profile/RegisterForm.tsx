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
    const onRegister = await User.handleRegister(register);
    if (onRegister) {
      setError("Account created...");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-5/6 h-5/6 flex flex-col gap-8 items-center justify-center"
    >
      <fieldset className="w-full h-auto">
        <legend className="text-md font-medium text-pallete-header">
          Username
        </legend>
        <input
          type="text"
          title="username"
          onChange={(e) =>
            setRegister({ ...register, username: e.target.value })
          }
          className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-medium text-pallete-header">
          Email
        </legend>
        <input
          type="email"
          title="username"
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
          className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-medium text-pallete-header">
          Password
        </legend>
        <input
          type="password"
          title="username"
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
          className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-medium text-pallete-header">
          Confirm Password
        </legend>
        <input
          type="password"
          title="username"
          onChange={(e) =>
            setRegister({ ...register, confirmPassword: e.target.value })
          }
          className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
        />
      </fieldset>
      {error.length > 0 ? (
        <p className="text-sm text-red-400 font-medium">{error}</p>
      ) : null}
      <button
        className="border-2 font-semibold hover:bg-pallete-background 
        hover:text-pallete-himp
        rounded-md text-pallete-background bg-pallete-himp p-2 px-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
