import logo from "../assets/Images/Koinx_logo.svg"
import Hamburger from "./Hamburger"

function Header() {
  return (
     <nav>
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <div className="menu">
             <ul>
                <li>Features</li>
                <li>Exchanges</li>
                <li>How it Works?</li>
                <li>Blog</li>
                <li>About us</li>
             </ul>
             <div className="hamburger">
            <Hamburger />
             </div>
             <button>Sign in</button>
         </div>

     </nav>
  )
}

export default Header