import { useState } from "react"
import reactLogo from "../assets/react.svg"
import { invoke } from "@tauri-apps/api/tauri"

import "./Login.css"


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function tester() {
        
    }

    function onLoginClick(e) {
        e.preventDefault()
        console.log("Login button clicked!")
    }
1
    return (
        <div>
            <h1>Welcome to Tauri React!</h1>
            <form onSubmit={(e) => {e.preventDefault(); tester(username, password)}}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login
