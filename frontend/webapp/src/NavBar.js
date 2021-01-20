import react, {useState} from "react";
import Logo from "./SchoolHubLogo.png";
import './NavBar.css';

export default function NavBar(){
    return <div>
        <nav>
            <div style={{backgroundColor:"#262626", display:'flex', alignItems:'center'}}>
                <img className="img" src={Logo} height="50px" width='40px' />  
                <text style={{paddingLeft:'10px', backgroundColor:"#262626",}}>ROOTS INTERNATIONAL SCHOOL</text>
            </div>
            
            <ul className="nav-links" id="myTopnav">
                <li><a>Home</a></li>
                <li><a>Faculty</a></li>
                <li><a>Academic</a></li>
                <li><a>Fee Structure</a></li>
                <li><a>Contact</a></li>  
            </ul>
            <i className="fas fa-bars menu"></i>  
        </nav> 
    </div>
}
