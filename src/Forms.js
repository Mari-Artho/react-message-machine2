import './Forms.css';
import React from "react";

export const Forms = ({ name, handleChangeTitle, handleChangeName, handleChangeMessage}) => {
    return (
        <div className="Forms">
            <p className='name'> Hello, {name} </p>
            <div className='inputField'>
                <label>NAME:</label>
                <input type="text" onChange={handleChangeName} maxlength="15"></input>
            </div>
            <div className='inputField'>
                <label>TITLE: </label>
                <input type="text" onChange={handleChangeTitle} maxlength="20"></input>
            </div>
            <div className='inputField'>
                <label>MESSAGE: </label>
                <textarea type="text" onChange={handleChangeMessage}></textarea>
           
            </div>
        </div>
    );
    };