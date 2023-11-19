import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./Login.css";

function Login() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  const [pwsd, setPwsd] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greett", { name: name, password: pwsd }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri React!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet(name, pwsd); // Call greet with current values of name and pwsd
        }}
      >
        <input
          id="name-input"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <input
          id="pwsd-input"
          value={pwsd}
          onChange={(e) => setPwsd(e.currentTarget.value)}
          placeholder="Enter a password..."
        />
        <button type="submit">Greet</button>
      </form>


      <p>{greetMsg}</p>
    </div>
  );
}

export default Login;
