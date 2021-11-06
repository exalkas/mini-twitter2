import React from "react";
import "./logincss.css"

export default function loginRegister(){
    return (
        <div className="background">
            <h1>Welcome to Mini...witter</h1>
        <div className="login">
            <input type="Text" name="username" />
            <input type="password" name="userpass" />
            <div>
            <button className="buttondec">Login</button>
            <button className="buttonemp">Register</button>
            </div>

        </div></div>
    )

}