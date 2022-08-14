export const Forms = ({ name, handleChangeTitle, handleChangeName, handleChangeMessage}) => {
    return (
        <div className="App">
            <h1>これは Forms.js コンポーネントです。</h1>
            <p> Hello, {name} </p>
            <div>
                <label>TITLE:
                <input type="text" onChange={handleChangeTitle}></input>
                </label>
            </div>
            <div>
                <label>NAME:
                <input type="text" onChange={handleChangeName}></input>
                </label>
            </div>
            <div>
                <label>MESSAGE:
                <textarea type="text" onChange={handleChangeMessage}></textarea>
            </label>
            </div>
        </div>
    );
    };