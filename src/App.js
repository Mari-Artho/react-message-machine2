import './App.css';
import React, {useState} from "react";
import { Messages } from "./Messages";
import { Forms } from "./Forms";

const INITIAL_TEXT = "";

export default function App() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState(INITIAL_TEXT);
  const [message, setMessage] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="App">
      <Forms 
        name = {name}
        handleChangeTitle = {handleChangeTitle}
        handleChangeName = {handleChangeName}
        handleChangeMessage = {handleChangeMessage}
      />

      <Messages 
        title = {title}
        name = {name}
        message = {message}
      />
    </div>
  );
}

