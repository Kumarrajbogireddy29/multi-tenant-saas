import { api } from "../api";

export default function Login() {
  const login = async () => {
    const res = await api.post("/auth/login");
    localStorage.setItem("token", res.data.token);
    alert("Login successful");
  };

  return <button onClick={login}>Login</button>;
}
