import { useState } from "react"
import reactLogo from "../assets/react.svg"
import { invoke } from "@tauri-apps/api/tauri"

import "./Login.css"


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [status, setStatus] = useState("Not logged in")

    function tester(usrnm, pswd) {
        if (usrnm === "admin" && pswd === "admin") {
            setStatus("User logged in")
        } else {
            setStatus("Invalid Credentials")
        }
    }

    return (
        <div>
            <h1>Welcome to Tauri React!</h1>
            <form onSubmit={(e) => {e.preventDefault(); tester(username, password)}}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
            <p>{status}</p>
        </div>
    )
}

export default Login
