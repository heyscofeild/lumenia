import React, { useState } from 'react'
import eye from '../assets/eye-close.png'
import eyeOpen from '../assets/eye-open.png'
import { Link } from 'react-router-dom'
const SignIn = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="container">
            <div className="login-box">
                <h1 className="logo">Lumenia</h1>
                <h4>Welcome to Lumenia..!</h4>

                <div className="tabs">
                    <button className="tab-btn active">sign in</button>
                  <Link to='/logIn'>  <button className="tab-btn">
                        <a href="login.html">Login</a>
                    </button></Link>
                </div>

                <p className="subtitle">Please enter your credentials to sign in.</p>

                <form>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter your Email Address" />
                    </div>

                    <div className="input-group">
                        <label>User name</label>
                        <input type="text" placeholder="Enter your User name" />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-wrapper">
                            <input
                                type={visible ? "text" : "password"}
                                id="pwd"
                                className="password"
                                placeholder="Enter your Password"
                            />
                            <img
                                src={visible ? eyeOpen : eye}
                                alt="Toggle visibility"
                                id="eye"
                                onClick={() => setVisible(prev => !prev)}
                                className="eyeicon"
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
