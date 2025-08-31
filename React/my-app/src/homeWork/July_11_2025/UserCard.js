import React from "react";

function UserCard({name, age, email, hobby}){
    return(
        <div>
            <h1> Name: {name}</h1>
            <p> Age: {age}</p>
            <p> Email: {email}</p>
            <p> Hobby: {hobby}</p>
        </div>
    )
}

export default UserCard;