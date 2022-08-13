import './App.css';
import React, {useState} from "react";
import { Messages } from "./Messages";
import { Forms } from "./Forms";

const INITIAL_TEXT = "";

export default function App() {
  const [name, setName] = useState(INITIAL_TEXT);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <Forms 
        name = {name}
        handleChangeName = {handleChangeName}
        initialName = { INITIAL_TEXT}
      />

      <Messages name = {name}/>
    </div>
  );
}

