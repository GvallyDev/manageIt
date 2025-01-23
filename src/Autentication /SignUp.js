import React, { useState } from 'react';
import './SignUp.css'
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrIiVOqbgC3CYYkY02Z-s0zd-Id8e14ug`,
    {
method:'POST',
body: JSON.stringify({ 
  email: email,
  password: password,
  returnSecureToken: true
})
    }
    )
    // Perform form submission logic here
  };

 

  
  return (
    <div className="signup-container">
      <form  className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-heading">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="signup-input"
        />


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="signup-input"
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="signup-input"
        />

        
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
