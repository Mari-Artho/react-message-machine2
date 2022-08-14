import './App.css';
import React, {useState} from "react";
import { Messages } from "./Messages";
import { Forms } from "./Forms";
//eslint-disable-next-line
var parse = require('html-react-parser');

const INITIAL_TEXT = "";

export default function App() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState(INITIAL_TEXT);
  const [message, setMessage] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const buttonClickMessage = (e) => {
    let form = e.target.parentElement.parentElement;
    setName(form.childNodes[1].childNodes[1].value); // input field 1, input part is inside (the inner child 0 is the label)
    setTitle(form.childNodes[2].childNodes[1].value); // input field 2
    let text = form.childNodes[3].childNodes[1].value; // input field 3
    setMessage(text);
  }

  return (
    <div className="App">
      <Forms className="Forms"
        name = {name}
        handleChangeName = {handleChangeName}
        buttonClickMessage = {buttonClickMessage}
      />

      <Messages className="Messages"
        title = {title}
        name = {name}
        message = {message}
      />
    </div>
  );
}

