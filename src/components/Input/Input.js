import React from 'react';
import "./Input.css"

const Input = (onChange, onClick) => {
    return (
        <div>
            <input className="input" type="text"/>
            <button className="submit" type="submit">Submit</button>
        </div>
    );
};

export default Input;
