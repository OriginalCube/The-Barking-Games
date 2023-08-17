import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Info from "./Info";

const Register = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="h-2/3 w-1/2 border-2 border-slate-400 rounded-md flex p-2 shadow-md">
        <div className="w-1/3 h-full bg-slate-800 flex flex-col rounded-md items-center justify-center">
          <Info setHasAccount={setHasAccount} hasAccount={hasAccount} />
        </div>
        <div className="w-2/3 h-full flex items-center justify-center">
          {hasAccount ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Register;
