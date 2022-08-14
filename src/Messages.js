import './Messages.css';
import React from "react";

//Function to create paragraphs automatically, using with dangerouslySetInnerHTML.
//https://iq.js.org/questions/react/how-to-use-innerhtml-in-react
function createMarkup(msg) {
    let html = msg.replace(/\n/g, '<br>')
    return { __html: html };
}

export const Messages =({name, title, message}) => {
    return (
        <div className="Messages">
            <h3>NAME: {name}</h3>
            <h3>TITLE:  {title}</h3>
            <h3>MESSAGE: 
                <div className="inputMessage" dangerouslySetInnerHTML={createMarkup(message)} /> 
            </h3>
        </div>
    );
};
