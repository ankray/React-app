import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>The name of the user is {props.name}</p>
            <p>The surname of the user is {props.surname}</p>
        </div>
    )
};

export default userOutput;