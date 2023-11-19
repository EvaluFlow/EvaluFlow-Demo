import { useState } from "react";
import { setAuthToken } from "./tokenService"
import { invoke } from "@tauri-apps/api/tauri";
import { useHistory } from 'react-router-dom'
import "./Login.css";

function Login() {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginSuccess, setLoginSuccess] = useState(false)
  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setLoginSuccess(true)
      history.push('/home')
    }
  }

  return (
    <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;
