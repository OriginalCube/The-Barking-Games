import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Info from "./Info";

interface RegisterProps {
  setLoggedIn: (logged: boolean) => void;
}

const Register = ({ setLoggedIn }: RegisterProps) => {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-2/3 w-1/2 border-2 border-pallete-header opacity-90 rounded-md flex shadow-xl">
        <div
          className="w-1/3 h-full bg-pallete-header
        flex flex-col items-center justify-center"
        >
          <Info setHasAccount={setHasAccount} hasAccount={hasAccount} />
        </div>
        <div className="w-2/3 h-full flex items-center justify-center">
          {hasAccount ? (
            <LoginForm setLoggedIn={setLoggedIn} />
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
