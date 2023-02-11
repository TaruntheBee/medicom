import React from 'react'
import './Header.css'
import {SearchIcon} from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { Home, SupervisorAccount,BusinessCenter,Notifications } from '@mui/icons-material';


function Header() {
  return (
    <div><div className="header">
          <div className="header_left"></div>
          <img src="" alt="" />

          <div className="header_search">
              {/*SearchIcon*/}
              <input type="text" />

          </div>
      </div>
      <div className="header_right">

              <HeaderOption Icon={Home} title="Home"/>
              <HeaderOption Icon={SupervisorAccount} title="My Network"/>
              <HeaderOption Icon={BusinessCenter} title="Recommendations"/>
              <HeaderOption Icon={Notifications} title="Notifications"/>
              <HeaderOption avatar="https://thumbs.dreamstime.com/b/smiling-young-indian-man-portrait-against-purple-background-33897262.jpg" title='me'/>
          </div>
          </div> 
          );
}

export default Header;