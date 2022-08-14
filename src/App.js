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

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeMessage = (e) => {
  let text = e.target.value.replace(/\n/g, '<br>');
  setMessage(text);
  };

  const buttonClickMessage = (e) => {
    let form = e.target.parentElement.parentElement;
    setTitle(form.childNodes[1].childNodes[1].value); // input field 1, input part is inside (the inner child 0 is the label)
    setName(form.childNodes[2].childNodes[1].value); // input field 2
    let text = form.childNodes[3].childNodes[1].value; // input field 3
    setMessage(text);
  }

  return (
    <div className="App">
      <Forms className="Forms"
        name = {name}
        handleChangeTitle = {handleChangeTitle}
        handleChangeName = {handleChangeName}
        handleChangeMessage = {handleChangeMessage}
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

