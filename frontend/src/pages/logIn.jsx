import { useState } from "react"
import eye from '../assets/eye-close.png'
import '../css/login.css'
import { Link } from "react-router-dom"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible,setVisible] = useState(false)
    return (
        <div className="container">
            <div className="login-box">
                <h2 className="logo">Lumenia</h2>
                <h4>Welcome to Lumenia..!</h4>

                <div className="tabs">

                    <button className="tab-btn active">login</button>
                   <Link to= '/signup'> <button className="tab-btn"> <a href="signin.html">Sign in</a></button></Link>
                </div>

                <p className="subtitle">Please enter your credentials to login.</p>

                <form>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter your Email Address" />
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

                  <Link to= '/profil'>  <button type="submit" className="submit-btn">Login</button></Link>
                </form>
            </div>
        </div>
    )
}
export default Login