import React from "react";

export default function loginRegister(){
    return (
        <div className="login">
            <input type="Text" name="username" />
            <input type="password" name="userpass" />
            <div>
            <button className="buttondec">Login</button>
            <button className="buttonemp">Register</button>
            </div>

        </div>
    )

}