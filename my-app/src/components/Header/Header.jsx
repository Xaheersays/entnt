// import React from 'react'
// import {Search} from '../index'
// import { HomeIcon,NotificationIcon,AccountIcon,HamIcon } from '../../assets/Icons/icons'
// const Header = () => {
//   return (
//     <div className=' flex justify-between p-2 items-center shadow-md '>
//       <div className='flex items-center gap-3'>
//         <div className='font-bold text-2xl py-2 text-slate-800 font-sans '>
//             ERP
//         </div>
//         <Search/>
//       </div>
//       <div className='flex gap-3'>
//         <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
//           <HomeIcon className='text-slate-800' size={25}/>
//         </div>
//         <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
//           <NotificationIcon className='text-slate-800' size={25}/>
//         </div>
//         <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
//           <AccountIcon className='text-slate-800' size={25}/>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default Header
import React, { useState } from 'react';
import { Search } from '../index';
import { HomeIcon, NotificationIcon, AccountIcon, HamIcon, CloseIcon } from '../../assets/Icons/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative z-10 flex justify-between p-2 items-center shadow-md'>
      <div className='flex items-center gap-3'>
        <div className='font-bold text-2xl py-2 text-slate-800 font-sans'>
          ERP
        </div>
        <Search />
      </div>
      <div className='flex gap-3 items-center'>
        <div className='hidden sm:flex gap-3'>
          <div className='relative'>
            <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
              <HomeIcon className='text-slate-800' size={25} />
            </div>
          </div>
          <div className='relative'>
            <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
              <NotificationIcon className='text-slate-800' size={25} />
            </div>
          </div>
          <div className='relative'>
            <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
              <AccountIcon className='text-slate-800' size={25} />
            </div>
          </div>
        </div>
        
        <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer sm:hidden m-2' onClick={toggleMenu}>
          <HamIcon className='text-slate-800' size={25} />
        </div> 
      </div>
      {isMenuOpen && (
        <div className='absolute right-2 top-2 mt-12 bg-gray-200 w-48 shadow-lg rounded z-20 md:hidden  p-2'>
         
          <div className='flex flex-col '>
            <div className='p-2  border border-black rounded-md mb-1'>
              <HomeIcon className='text-slate-800 cursor-pointer ' size={25} />
            </div>
            <div className='p-2  border border-black rounded-md my-1'>
              <NotificationIcon className='text-slate-800 cursor-pointer' size={25} />
            </div>
            <div className='p-2  border border-black rounded-md  mt-1'>
              <AccountIcon className='text-slate-800 cursor-pointer' size={25} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
