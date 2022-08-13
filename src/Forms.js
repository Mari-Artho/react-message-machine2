export const Forms = ({ name, handleChangeName}) => {
    return (
        <div className="App">
            <h1>これは Forms.js コンポーネントです。</h1>
            <p> Hello, {name} </p>

            <input type="text" onChange={handleChangeName}></input>
        </div>
    );
    };