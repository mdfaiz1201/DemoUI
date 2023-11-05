import React from 'react';
import { iconItems } from '../utilities/icons';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {

  const renderSideItem = iconItems.map((item) => {
    return (
      <NavLink to={`/${item.name}`} className='nav text-gray-800 flex items-center px-3 rounded-md py-2 mb-4'>
        <span className='mr-4 p-1'>{item.icon}</span>
        <span>{item.name}</span>
      </NavLink>
    );
  });

  return (
    <div className='mt-0 mobile-m md:w-64 md:h-screen p-6 pb-0 bg-white hidden-sidebar'>
      <div className='flex items-center justify-center text-green-500 mb-10'>
        <span className='mr-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
          </svg>
        </span>
        <h1 className=' text-2xl text-black font-bold'>ASSIDUUS</h1>
      </div>
      <nav className='mobile-menu flex md:flex-col md:w-10/12 mx-auto'>
        {renderSideItem}
      </nav>
    </div>
  );
};

export default Sidebar;
