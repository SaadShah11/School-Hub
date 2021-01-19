import React from 'react';
import Button from '@material-ui/core/Button';
import {InputBase} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Logo from "./SchoolHubLogo.png";
import Grid from '@material-ui/core/Grid';
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
export default function SignIn() {
    const classes=useStyles();
  return (
    <div style={{backgroundColor:'#262626', height:"768px ",color:'white',display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{backgroundColor:'#262626',width:"600px",display:'flex', flexDirection:'column', justifyItems:'center', justifyContent:'center'}}>
            <img src={Logo} height="200px" width='190px' style={{backgroundColor:'#262626',}}/>
            <text style={{backgroundColor:'#262626',fontWeight:'bold', fontSize:'30px'}}>Welcome to SCHOOLHUB</text>
            <text style={{backgroundColor:'#262626',}}>aioduqioweuioeuqwi jeirjweif ioehwui uiehwui wuirfhewui uiweb uiwef weui ewr ioe uiewf  weu weoe</text> 
        </div>
        <form style={{width:"400px",justifyContent: "center",alignItems: "center",textAlign:'center'}}>
        <div style={{backgroundColor:'#262626',}}>
            
            
            <Typography variant="h5" style={{backgroundColor:'#262626',color:'white', fontWeight:'bold', fontSize:'40px'}}>
            SIGN IN
            </Typography>
            <InputBase
                variant="outlined"
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
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.inputField}
            />
            <label style={{backgroundColor:'#262626',float:'left', marginBottom:"20px"}}>
                <input type="checkbox"
                />
                Remember me
            </label>
            <div style={{marginTop:'30px',width:'100%',backgroundColor: '#af1b1b', fontSize:'20px', padding:"5px", borderRadius:"7px", cursor:'pointer'}}>
                <text style={{marginRight:'120px',backgroundColor: '#af1b1b', fontSize:'20px', borderRadius:"7px", cursor:'pointer'}}
                >
                Sign In
                </text> 
            </div> 
            
            <Grid container  >
                <Grid item xs style={{backgroundColor:'#262626',}}>
                <Link href="#" variant="body2" style={{backgroundColor:'#262626',color:'white', float:'left'}}>
                Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link to="/" style={{backgroundColor:'#262626',color:'white'}}>
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
        </div>
        
        </form>
    </div>
  );
}