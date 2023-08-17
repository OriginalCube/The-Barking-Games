import React from "react";

const RegisterForm = () => {
  return (
    <form className="w-5/6 h-5/6 flex flex-col gap-8 items-center justify-center">
      <fieldset className="w-full h-auto">
        <legend className="text-md font-semibold text-blue-600">
          Username
        </legend>
        <input
          type="text"
          title="username"
          className="outline-none border-2 border-indigo-400 p-2 
                text-md rounded-md w-full focus:border-blue-400"
        />
      </fieldset>
      <fieldset className="w-full h-auto">
        <legend className="text-md font-semibold text-blue-600">Email</legend>
        <input
          type="email"
          title="username"
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
          className="outline-none border-2 border-indigo-400 p-2 
                text-md rounded-md w-full focus:border-blue-400"
        />
      </fieldset>
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
