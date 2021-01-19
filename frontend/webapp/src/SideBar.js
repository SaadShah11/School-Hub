import Logo from "./SchoolHubLogo.png";
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SchoolIcon from '@material-ui/icons/School';
import './SideBar.css'

export default function NavBarMain(){
    return <div className='main'>
                <div className='logo'>
                    <img className="img" src={Logo} height="110px" width='100px' />  
                </div>
                
                <div className='tabs'>
                    <div className='tabss'>
                        <HomeIcon fontSize='large' className='icons'/>
                        <a>Home</a>
                    </div >
                    <div className='tabss'>
                        <RoomIcon fontSize='large' className='icons'/>
                        <a>Map</a>
                    </div>
                    <div className='tabss'>
                        <SchoolIcon fontSize='large' className='icons'/>
                        <a>Schools</a>
                    </div>
                    
                    <div className='tabss'>
                        <EqualizerIcon fontSize='large' className='icons'/>
                        <a>Statistics</a>
                    </div>
                    
                </div>     
    </div>
}