import React from 'react'
import {Search} from '../index'
import { HomeIcon,NotificationIcon,AccountIcon } from '../../assets/Icons/icons'
const Header = () => {
  return (
    <div className=' flex justify-between p-2 items-center shadow-md '>
      <div className='flex items-center gap-3'>
        <div className='font-bold text-2xl py-2 text-slate-800 font-sans '>
            ERP
        </div>
        <Search/>
      </div>
      <div className='flex gap-3'>
        <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
          <HomeIcon className='text-slate-800' size={25}/>
        </div>
        <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
          <NotificationIcon className='text-slate-800' size={25}/>
        </div>
        <div className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
          <AccountIcon className='text-slate-800' size={25}/>
        </div>
      </div>
    </div>
  )
}

export default Header