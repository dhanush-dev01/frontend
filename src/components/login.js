import React from 'react';
import './login.css'; // Import the CSS file

const Login = () => {
  return (
    <div>
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
    <form className='login'>
      <h3>Login Here</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" id="password" />

      <a className='login1' href='/'>Log In</a>
    </form>
    </div>
  );
}

export default Login;
