import './Forms.css';
import React from "react";

export const Forms = ({ name, buttonClickMessage}) => {
    return (
        <div className="Forms">
            <p className='name'> Hello, {name} </p>
            <div className='inputField'>
                <label>NAME:</label>
                <input type="text" maxLength="15"></input>
            </div>
            <div className='inputField'>
                <label>TITLE: </label>
                <input type="text" maxLength="20"></input>
            </div>
            <div className='inputField'>
                <label>MESSAGE: </label>
                <textarea type="text"></textarea>
            </div>
            <div className='button'>
                <button type='button' onClick={buttonClickMessage}>SEND</button>
            </div>
        </div>
    );
    };