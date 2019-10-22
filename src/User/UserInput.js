import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changedName} value={props.name}/>
            <input type="text" onChange={props.changedSurname} value={props.surname}/>
        </div>
    )
};

export default userInput;