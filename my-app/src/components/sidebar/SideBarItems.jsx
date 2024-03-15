import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const SideBarItems = memo(({ itemName, children }) => {
  return (
    <NavLink to={'/'+ (itemName.toLowerCase()!=='dashboard'? itemName.toLowerCase():'') }  className='block'  style={({ isActive }) => {
      return isActive ? { color: "green" ,  } : {};
      }}>
      <div className={`transform hover:scale-105 transition-transform duration-300 bg-slate-200 flex items-center border gap-2 p-2 cursor-pointer hover:shadow-md hover:bg-gray-200 ease-in-out rounded-md my-2`}>
        <div>{children}</div>
        <div>{itemName}</div>
      </div>
    </NavLink>
  );
})

export default SideBarItems;

