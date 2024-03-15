import React, { useState } from 'react';
import { DashBoardIcon, AnalyticsIcon, CustomersIcon, ProductsIcon, SalesIcon, OrdersIcon, SettingIcon, LogoutIcon,ShowSideBarIcon,HideSideBarIcon } from '../../assets/Icons/icons';
import SideBarItems from './SideBarItems';
import logo from '../../assets/logo.png';


const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
     
    <div className={`bg-slate-800  py-4 px-2 font-poppins ${isSidebarOpen ? 'w-44 md:w-72' : 'w-12'} transition-all duration-500 ease-in-out h-screen `}>
      <button
        className='text-white hover:text-gray-300 focus:outline-none'
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <HideSideBarIcon size={20}/> : <ShowSideBarIcon size={20}/>}
      </button>
      {isSidebarOpen && (
        <>
          <div className=''>
            <SideBarItems itemName='Dashboard'>
              <DashBoardIcon size={22} />
            </SideBarItems>
            <SideBarItems itemName='Products'>
              <ProductsIcon size={22} />
            </SideBarItems>
            <SideBarItems itemName='Orders'>
              <OrdersIcon size={22} />
            </SideBarItems>
            <hr className='my-8' />
          </div>
          <div className=''>
            <SideBarItems itemName='Customers'>
              <CustomersIcon size={22} />
            </SideBarItems>
            <SideBarItems itemName='Sales'>
              <SalesIcon size={22} />
            </SideBarItems>
            <SideBarItems itemName='Analytics'>
              <AnalyticsIcon size={22} />
            </SideBarItems>
            <hr className='my-8' />
          </div>
          <div>
            <SideBarItems itemName='Settings'>
              <SettingIcon size={22} />
            </SideBarItems>
            <SideBarItems itemName='Logout'>
              <LogoutIcon size={22} />
            </SideBarItems>
          </div>
        </>
      )}
    </div>
    </>

  );
};

export default SideBar;
