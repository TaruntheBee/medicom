import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import { Home, SupervisorAccount } from '@mui/icons-material';
function Header() {
  return (
    <><div className="header">
          <div className="header_left"></div>
          <img src="" alt="" />

          <div className="header_search">
              {/*SearchIcon*/}
              <input type="text" />

          </div>
      </div>
      <div className="header_right">

              <HeaderOption Icon={Home} title='Home'/>
              <HeaderOption Icon={SupervisorAccount} title='My Network'/>
              
          </div></> 

   
  )
}

export default Header