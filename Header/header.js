import { ArrowDownIcon, ArrowSmDownIcon, BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useEffect } from 'react';
import './header.css'
const Head = () => {
    document.documentElement.dataset.scroll = window.scrollY;

  document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = window.scrollY;
  });
  return (
    <div className="flex w-full h-14 fixed justify-center items-center z-50 transition-all duration-500 ease-in-out bg-gradient-to-b from-black headerColor">
      <div className='flex w-11/12 h-4/5  justify-between' >
        {/* Left Side */}
        <div className='flex row w-auto h-full  justify-between'>
          {/* logo */}
          <div className='flex w-36 h-full justify-center items-center px-5'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' />
          </div>
          {/* navbar */}
          <div className='hidden md:flex'>
            <ul className="flex">
              <li className="  mr-6 flex justify-center items-center">
                <a className="text-gray-50 font-bold hover:text-gray-400 transition-all duration-500 ease-out" href="#">Home</a>
              </li>
              <li className="mr-6 flex justify-center items-center">
                <a className="text-gray-50 hover:text-gray-400 transition-all duration-500 ease-out" href="#">TV Shows</a>
              </li>
              <li className="mr-6 flex justify-center items-center">
                <a className="text-gray-50 hover:text-gray-400 transition-all duration-500 ease-out" href="#">Movies</a>
              </li>
              <li className="mr-6 flex justify-center items-center">
                <a className="text-gray-50 hover:text-gray-400 transition-all duration-500 ease-out" href="#">Latest</a>
              </li>
              <li className="mr-6 flex justify-center items-center">
                <a className="text-gray-50 hover:text-gray-400 transition-all duration-500 ease-out" href="#">My list</a>
              </li>
            </ul>
          </div>
          {/* Hamburger menu */}
          <div className='flex md:hidden space-x-1 justify-center items-center cursor-pointer text-white '>
            Browse
            <ArrowSmDownIcon className=" w-5 h-5 " />
          </div>
        </div>
        {/* Right Side */}
        <div className='flex row w-auto h-full  justify-between space-x-6'>
          <div className='flex justify-center items-center'>
            <SearchIcon className='w-8 h-8 text-white cursor-pointer' />
          </div>
          <div className=" flex justify-center items-center">
            <a className="text-gray-50 hover:text-gray-400 transition-all duration-500 ease-out" href="#">Kids</a>
          </div>
          <div className='flex justify-center items-center'>
            <BellIcon className='w-8 h-8 text-white cursor-pointer' />
          </div>
          <div className='flex space-x-1 justify-center items-center cursor-pointer'>
            <img src='https://sun6-22.userapi.com/s/v1/ig1/mslTVi298MFIKEYceS9QY_Aq2UWIjdbzryHJi5BQwYKKxQNnInXDKdHEmNXQtN1E2wVmvbKn.jpg?size=400x0&quality=96&crop=4,4,2150,2150&ava=1' className="w-9 h-9" />
            <ArrowSmDownIcon className=" w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;