import axios from "axios";

const api_url = "/api/v1/user";
interface LoginProps {
  username: string;
  password: string;
}

const login = async ({ username, password }: LoginProps) => {
  const logging = await axios.post(api_url + "/login", {
    username,
    password,
  });
  console.log(logging);
};

const user = { login };

export default user;
