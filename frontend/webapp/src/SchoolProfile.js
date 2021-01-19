import react from "react";
import NavBar from "./NavBar";
import Slider from "./Slider";
import ReactPlayer from 'react-player'
import './SchoolProfile.css'
import GoogleApiWrapper from "./schoolMap"
import Footer from "./footer/Footer"
  

export default function schoolprofile(){

    return <div>
        <NavBar/>
        <Slider/>
        <div className="intro">
                <div className='texts'>
                    <text>Welcome to <b>ROOTS INTERNATIONAL SCHOOLS and COLLEGES</b> <br /></text>
                    <text>Roots International Schools is one of the leading private institutions of Pakistan. 
                        RIS is a world class academic institution with a proud history of achievements and ambitious 
                        plans for the future. Roots International Schools provide quality education from early years 
                        till high school. It focuses on nurturing the individual holistically by implanting in them, 
                        a balanced approach towards life. Consistent with our national values, we seek to develop the 
                        hidden potentials to excel and persevere in meeting the challenges they have to encounter in 
                        life by grooming them intellectually and to make them morally strong and effective global citizens.
                    </text>
                </div>
                <div className='video'>
                    <ReactPlayer url='https://youtu.be/4NR4JOL4_2o'/>
                </div>
        </div>
        <div className='map'>
            <GoogleApiWrapper/>
        </div>
        <div className="footer"><Footer /></div>
        
        
    </div>
}