import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {

    const navigate=useNavigate();

    const handleSubmit = ()=>{
        console.log("Registration Successful.");
        navigate('/');
    }
    return (
        <div className="Contain1">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <br/>
                <input id="lo1" type="text" required placeholder="   Username"/><br/><br/>
                <input id='lo1' type="email" required placeholder="   Email-ID" /><br/><br/>
                <input id="lo1" type="password" required placeholder="   Password"/><br/><br/>
                <input id="lo1" type="number" required placeholder="   Mobile No"/><br/><br/>
                <input id="lo3" type="text" required placeholder="   Address"/><br/><br/><br/>
                <label><input type="checkbox" required />I accept the Terms and Conditions</label><br></br><br></br>
                <input id="lo2" type="submit"  value="Register"/>
            </form>
        </div>
    )
}

export default Register