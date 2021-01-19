import React, { Component } from 'react';
import classes from './Footer.module.css';
import Fb from './facebook.png';
import Twitter from './twitter.png';
import Insta from './instagram.png';
import Mail from './email.png';
import Phone from './phone.png';
import Whatsapp from './whatsapp.png';
import Logoo from './logoo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className={classes.rootCont}>
                <div className={classes.div1}>
                    <img className={classes.logo} src={Logoo}/>
                    <p className={classes.abtText}>Roots International Schools & Colleges is one of the leading private institutions of Pakistan. RISC is a world class academic institution with a proud history of achievements and ambitious plans for the future.</p>
                    
                </div>
                <div className={classes.div2}>
                    <p className={classes.abtHead}>Quick Links</p>
                    <div className={classes.linksCont}>
                        <a href="/home" className={classes.links}> Home</a>
                        <a href="/research" className={classes.links}> Faculty</a>
                        <a href="/calendar" className={classes.links}> Academic</a>
                        <a href="/" className={classes.links}> Fee Structure</a>
                        <a href="/about" className={classes.links}> About Us</a>
                    </div>
                </div>

                <div className={classes.div4}>
                    <p className={classes.abtHead2}>Get In Touch</p>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Phone} />
                        <p className={classes.contactText}>(+92)-323-2344242</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Mail} />
                        <p className={classes.contactText}>rootsinter@gmail.com</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                        <p className={classes.contactText}>(+92)-323-2344242</p>
                    </div>
                    <div className={classes.accCont}>
                        <img alt="icon" className={classes.accIcon} src={Fb} />
                        <img alt="icon" className={classes.accIcon} src={Twitter} />
                        <img alt="icon" className={classes.accIcon} src={Insta} />
                    </div>
                </div>
            </div>
        );
    }
}