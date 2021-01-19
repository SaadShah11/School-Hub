import React from 'react';
import Button from '@material-ui/core/Button';
import {InputBase} from '@material-ui/core'; 
import Logo from "./SchoolHubLogo.png";
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'; 


const  useStyles = makeStyles(theme =>({
    inputField:{
        backgroundColor:'#262626',
        borderBottom: "2px solid red",
        marginBottom:"20px",
        
        color:"white",
        height:"6vh",
    },
    
}));
export default function SignUp() {
    const classes=useStyles();
  return (
    <div style={{backgroundColor:'#262626', height:"768px ",color:'white',display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{backgroundColor:'#262626',width:"600px",display:'flex', flexDirection:'column', justifyItems:'center', justifyContent:'center'}}>
            <img src={Logo} height="200px" width='190px' style={{backgroundColor:'#262626',}}/>
            <text style={{backgroundColor:'#262626',fontWeight:'bold', fontSize:'30px'}}>Welcome to SCHOOLHUB</text>
            <text style={{backgroundColor:'#262626',}}>aioduqioweuioeuqwi jeirjweif ioehwui uiehwui wuirfhewui uiweb uiwef weui ewr ioe uiewf  weu weoe</text> 
        </div>
        <form style={{ width:"400px",textAlign:'center'}}>
        <div style={{backgroundColor:'#262626',}}>
            <Typography variant="h5" style={{backgroundColor:'#262626',color:'white',fontWeight:'bold', fontSize:'40px' }}>
            SIGN UP
            </Typography>
            <InputBase
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.inputField}
            />
            <InputBase
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Username"
                name="username"
                className={classes.inputField}
            />
            <InputBase
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Phone number"
                placeholder="Phone Number"
                name="Phone number"
                autoFocus
                className={classes.inputField}
            />
            <InputBase
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.inputField}
            />
            <div style={{width:'100%',backgroundColor: '#af1b1b', fontSize:'20px', padding:"5px", borderRadius:"7px", cursor:'pointer'}}>
                <text style={{backgroundColor: '#af1b1b', fontSize:'20px', padding:"5px", borderRadius:"7px", cursor:'pointer'}}
                >
                    Sign UP
                </text> 
            </div>
            

            <Link to="/signin" style={{ backgroundColor:'#262626',color:'white'}}>
                {"Already have an account? Sign In"}
            </Link>
                
        </div>
        
        </form>
    </div>
  );
}