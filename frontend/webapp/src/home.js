import "intersection-observer";
import React, { Component } from "react";
import { ScrollView } from "@cantonjs/react-scroll-view";
import './home.css'
import PhotoIcon from '@material-ui/icons/Photo';
import { TextField } from "@material-ui/core";
import pic1 from './school1.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 
export default class App extends Component {
  handleEndReached = () => {
    console.log("load more");
  };
 
  render() {
    return (
      <ScrollView className='main' onEndReached={this.handleEndReached} style={{ height: '50vh' }}>
        <div className='post'>
            <div>
                <TextField className='postField' placeholder='post a querry here'></TextField>
                <PhotoIcon fontSize='large' className='icon'/>
            </div>
            <text className='postButton'>
               Post
            </text>
        </div>
        <div className='posts'>
            <div>
                <AccountCircleIcon fontSize='large'/>
                <text>Muahmmad Usama</text>
            </div>
            <text>Hello this is soem text</text>
            <img className='photo' src={pic1} />
        </div>
        

      </ScrollView>
    );
  }
}