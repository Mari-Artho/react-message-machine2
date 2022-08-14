import './Forms.css';
import React from "react";

export const Forms = ({ name, handleChangeName, handleChangeTitle, handleChangeMessage,  buttonClickMessage}) => {
    return (
        <div className="Forms">
            <p className='name'> Hello, {name} </p>
            <div className='inputField'>
                <label>NAME:</label>
                <input type="text" onChange={handleChangeName} maxLength="15"></input>
            </div>
            <div className='inputField'>
                <label>TITLE: </label>
                <input type="text" onChange={handleChangeTitle} maxLength="20"></input>
            </div>
            <div className='inputField'>
                <label>MESSAGE: </label>
                <textarea type="text" onChange={handleChangeMessage} ></textarea>
            </div>
            <div className='button'>
                <button type='button' onClick={buttonClickMessage}>SEND</button>
            </div>
        </div>
    );
    };