import { Avatar } from '@mui/material';
import React from 'react'
//import './Sidebar.css';

function Sidebar() {

const recentItem = (topic) => {
    <div className="sidebar_recentItem">
         <span classNames="sidebar_hash">#</span>
        <p>{topic}</p>

    </div> 
}

  return (
    <div className='sidebar'>
    <div className="sidebar_top">
     <img src="https://plus.unsplash.com/premium_photo-1668447597597-33447c9e6349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
     <Avatar className='sidebar_avatar'/>
     <h2>ANKIT SHRIVASTAVA</h2>
     <h4>ankitshrivastava12@gmail.com</h4>
    </div>

    <div className="sidebar_stat"></div> 
        <div className="sidebar_stat"></div>
        <p>who viewed you</p>
    <p className="sidebar_statNumber">23456</p>
    <div></div>
    <p>views on post</p>
    <p className="sidebar_statNumber">2567</p>
    <div> 
    </div>
     <div className="sidebar_bottom ">
     <p>Recent</p>
     {recentItem('MentalWellbeing')}
     {recentItem('StopAlcohol')}
     {recentItem('CureCancer')}
     {recentItem('TheDoctors')}
     {recentItem('SaveGirlChild')}
     
     </div>
     </div>
  )
}

export default Sidebar;