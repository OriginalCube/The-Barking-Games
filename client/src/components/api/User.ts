import axios from "axios";

const api_url = "/api/v1/user";

interface LoginProps {
  username: string;
  password: string;
}

interface RegisterProps {
  username: string;
  password: string;
  email: string;
}

const login = async ({ username, password }: LoginProps) => {
  const onLogin = await axios.post(api_url + "/login", {
    username,
    password,
  });
  localStorage.setItem("bg-token", onLogin.data.token);
  return onLogin;
};

const register = async ({ username, password, email }: RegisterProps) => {
  const onRegister = await axios.post(api_url + "/register", {
    username,
    password,
    email,
  });
  return onRegister;
};

const user = { login, register };

export default user;
