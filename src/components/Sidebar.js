import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';



function Sidebar() {
  
  return (
    <>
      <IconContext.Provider value={{ color: '#6CA501' }}>
        <div className='navbar'>
        <div className="container">
        <div className="ui grid container">
        <div class="ui six column grid">
            <div class="row">
            <div class="column">
        <div class="ui left icon input">
            <input type="text" placeholder="Type to Search" style={{width:'600px',height:'40px', marginRight:'200px', backgroundColor:'#F3F7EC'}}></input>
            <i class="search large icon"></i>
            <img src="images/01.png" class="rounded-circle" style={{width:'50px', height:'50px', borderRadius:50/2}}/>
           
        </div>
        </div>
            </div>
            </div>
        </div>
        </div>
        
        
        <nav className='nav-menu active'>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiFillInfoCircle />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;