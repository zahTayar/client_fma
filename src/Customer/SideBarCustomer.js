import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import  {SideBarData } from './SideBarData';
import { IconContext } from 'react-icons';
import "./Style.css";


export default function SideBar() {
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const refresh = (title) => {
    if (title == 'התנתקות') {
      window.location.reload(false);
      window.location.assign("/")
    }
  }

  return (
    <div>
    <div style={{zIndex:100}}>
      <IconContext.Provider value={{ color: 'rgba(106, 196, 255)'}}>
        <div >
          <Link to='#' className='menu-bars' >
            <FiIcons.FiMenu onClick={showSidebar} style={{ marginTop: '15px', float: 'right'}}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              
              <Link to='#' className='menu-bars'>
                <RiIcons.RiCloseFill />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} style={{direction:'rtl'}}>
                  <Link to={item.path} onClick={() => {refresh(item.title)}}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
   
    </div>
  );
}

