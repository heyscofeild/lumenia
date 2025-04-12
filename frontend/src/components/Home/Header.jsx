import { Link } from "react-router-dom";

export default function Header(){
return(
    <header className="navbar">
        <h1 className="logo">Luminia</h1>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Communities</a>
          <a href="#">Experts</a>
          <a href="#">About Us</a>
        </nav>
        <div className="nav-buttons">
         <Link to='/logIn'> <button className="btn outline">Login</button></Link>
          <button className="btn filled">Sign Up</button>
        </div>
      </header>
)
}
