import axios from "axios";

const api_url = "/api/v1/user";
const token = localStorage.getItem("bg-token");

interface LoginProps {
  username: string;
  password: string;
}

interface RegisterProps {
  username: string;
  password: string;
  email: string;
}

//Check if credentials is true, and if true will return the token to react
const handleLogin = async ({ username, password }: LoginProps) => {
  const onLogin = await axios.post(api_url + "/login", {
    username,
    password,
  });
  if (onLogin.status === 200) {
    localStorage.setItem("bg-token", onLogin.data.token);
    return true;
  } else {
    return false;
  }
};

//Check if user already exist then creates account, will only return string if error exists
const handleRegister = async ({ username, password, email }: RegisterProps) => {
  const onRegister = await axios.post(api_url + "/register", {
    username,
    password,
    email,
  });
  return onRegister;
};

//Initial checker if user token is valid and if true store in redux
const auth = async () => {
  if (!token) {
    return false;
  } else {
    const getUserInfo = await axios.get(api_url + "/info", {
      headers: { authorization: `Bearer ${token}` },
    });

    if (getUserInfo.status === 200) {
      return getUserInfo;
    } else {
      return null;
    }
  }
};

const user = { handleLogin, handleRegister, auth };

export default user;
