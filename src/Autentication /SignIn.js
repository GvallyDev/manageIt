import React, { useState } from 'react';
import './SignIn.css'; // Assuming you have a corresponding CSS file

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
  };

  

  return (
    <div className="signin-container">
    
      <form className="signin-form" onSubmit={handleSubmit}>
      <h2 className="signin-title">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signin-input"
        />
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
