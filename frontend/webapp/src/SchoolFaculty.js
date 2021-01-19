import NavBar from "./NavBar";
import './SchoolFaculty.css'
import Footer from "./footer/Footer"
import DP from "./osama.jpeg"

export default function schoolprofile(){

    return <div className='main'>
        <div>
            <NavBar/>
        </div>
        <div className="profiles">
            <img src={DP} className='pic'/>
            <div className='info'>
                <text className='Text'>Muhammad Osama </text>
                <text className='Text'>Professor </text>
                <text className='Text'>Faculty of Sciences</text>
            </div>
            <div className='contact'>
                <text className='Text'>osama@comsats.com</text>
                <text className='Text'>(+92)-333-8478473</text>
            </div>
        </div>
        <div className="footer"><Footer /></div>
        
        
    </div>
}