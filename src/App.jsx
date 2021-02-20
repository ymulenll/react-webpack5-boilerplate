import { useState } from "react";
import logo from "./react.svg";
import "./App.css";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="app">
      <h1>
        Hola React
        <img src={logo} width="25" alt="react logo" />
      </h1>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
