import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    
    path: '/location',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    
    path: '/product',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    
    
    icon: <FaIcons.FaPowerOff />,
    cName: 'nav-text'
  },
 
];

export default SidebarData