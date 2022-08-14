import './Messages.css';
import React from "react";

export const Messages =({name, title, message}) => {
    return (
        <div className="Messages">
            <h3>NAME: {name}</h3>
            <h3>TITLE:  {title}</h3>
            <h3 className="inputMessage">MESSAGE: {message}</h3>
        </div>
    );
};