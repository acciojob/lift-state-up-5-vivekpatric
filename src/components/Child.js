import React, { useState } from "react";

const Child = ({ isLoggedIn, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(isLoggedIn);
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login validation here
        // For simplicity, let's assume the login is successful
        onLogin();
        console.log(isLoggedIn);
      };
      if (isLoggedIn) {
        
        return <p>You are logged in!</p>;
      }


    return (
        <form onSubmit={handleSubmit}>
        
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className="username" value={username} onChange={handleUsernameChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Login</button>

            

        </form>
    )
}

export default Child;