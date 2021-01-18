import React from 'react';
import Button from '@material-ui/core/Button';
import {TextField, InputBase} from '@material-ui/core'; 
import Logo from "./SchoolHubLogo.png";
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles'; 


const  useStyles = makeStyles(theme =>({
    inputField:{
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
        <div style={{width:"600px",display:'flex', flexDirection:'column', justifyItems:'center', justifyContent:'center'}}>
            <img src={Logo} height="200px" width='190px'/>
            <text style={{fontWeight:'bold', fontSize:'30px'}}>Welcome to SCHOOLHUB</text>
            <text>aioduqioweuioeuqwi jeirjweif ioehwui uiehwui wuirfhewui uiweb uiwef weui ewr ioe uiewf  weu weoe</text> 
        </div>
        <form style={{ width:"400px",textAlign:'center'}}>
        <div >
            <Typography variant="h5" style={{color:'white',fontWeight:'bold', fontSize:'40px' }}>
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

            <Button
                style={{ marginBottom:"20px"}}
                type="submit"
                fullWidth
                variant="contained"
                color="white"
            >
                Sign UP
            </Button>

            <Link to="/signin" style={{color:'white'}}>
                {"Already have an account? Sign In"}
            </Link>
                
        </div>
        
        </form>
    </div>
  );
}