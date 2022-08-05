import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import Pins from './Pins';
import logo from '../assets/logo.png';

function Home({ user, setUser }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [displayPin, setDisplayPin] = useState('');
  const scrollRef = useRef(null);

  // console.log(user);

  // console.log(user);
  // console.log(user.username);
  // console.log(user.profile_pic);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          {/* here is the user info  */}
          <Link to={`user-profile/${user.username}`}>
            <img
              src={'https://www.shorturl.at/img/shorturl-icon.png'}
              alt="user-pic"
              className="w-9 h-9 rounded-full "
            />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            {/* desktop sidebar */}
            <Sidebar closeToggle={setToggleSidebar} user={user} />
          </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route
            path="/user-profile/:userId"
            element={<UserProfile user={user} setDisplayPin={setDisplayPin} />}
          />
          <Route
            path="/*"
            element={
              <Pins
                user={user}
                setUser={setUser}
                setDisplayPin={setDisplayPin}
                displayPin={displayPin}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
