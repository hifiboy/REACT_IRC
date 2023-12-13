import React,{Component} from 'react';
import './createAccount.css';

const createAccount=()=>{
    return (
      <div>
        <head>
          <title>Create an Account</title>
          <link rel="stylesheet" type="text/css" href="crac.css" />
        </head>
        <body>
          <div className="box">
            <h1>Create an Account</h1>
            <form>
              <label htmlFor="first-name">First Name:</label>
              <input type="text" id="first-name" name="first-name" required />
              <label htmlFor="last-name">Last Name:</label>
              <input type="text" id="last-name" name="last-name" required />
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
              />
            </form>
            <br />
            <form>
              <a href="C:\Users\krush\w0010\create ac\project0001.html" className="creation">
                Create Account
              </a>
            </form>
          </div>
        </body>
      </div>
    );
  }

  export default createAccount;

