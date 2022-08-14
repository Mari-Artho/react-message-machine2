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

//   function createMarkup(msg) {
//     //console.log(msg);
//     return { __html: msg };
// }

  const buttonClickMessage = (e) => {
    //console.log(handleChangeMessage);
    //setMessage(e.target.value);
    return (
     <>
      {/* <div className="inputMessage" dangerouslySetInnerHTML={createMarkup(message)} />  */}
      <div>{handleChangeMessage}</div>
      </>
    )
  }

  return (
    <div className="App">
      <Forms className="Forms"
        name = {name}
        message = {message}
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

