import React from 'react';

export default function  User (props) {
    const {name, age} = props.data
    return (
        <>
            <h2>User Comp</h2>
            <p>{name} is {age} year old </p>
        </>
    );
};

//export default User;