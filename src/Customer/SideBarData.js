import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as FiIcons from "react-icons/fi";

export const SideBarData = [
 
  {
    title: 'פרטים אישיים',
    path: '/dashboard/PersonalInfo',
    icon: <IoIcons.IoPersonOutline />,
    cName: 'nav-text'
  },
  {
    title: 'התנתקות',
    path:'/',
    icon: <FiIcons.FiLogOut />,
    cName: 'nav-text'
  }
];