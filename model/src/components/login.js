import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div className='login-container'>
        <title>Login</title>
        <h1 className='login-heading'>
          <b>Login</b>
        </h1>
        <form>
          <label className='login-label'>Username</label>
          <br />
          <input type="text" className='login-input' required />
          <br />
          <label className='login-label'>Email-ID</label>
          <br />
          <input type="email" className='login-input' required />
          <br />
          <label className='login-label'>Password</label>
          <br />
          <input type="password" className='login-input' required />
          <br />
          <br />
          <input type="submit" className='login-submit' value="SignIn"/>
          <br></br>
          <br/>
          <br/>
          <Link to='/signup' className='login-link'>Register</Link>
          <br></br>
        </form>
      </div>
    );
  }
}

export default Login;
