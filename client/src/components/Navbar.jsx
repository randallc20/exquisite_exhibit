import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

function Navbar({ searchTerm, setSearchTerm, user, setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    fetch('http://localhost:3000/logout', {
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => setUser({}));
    navigate('/login');
  }
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3 ">
        <Link to={`user-profile/${user.id}`} className="hidden md:block">
          {/* this is not working in src */}
          <img
            src={user.profile_pic}
            alt="user-pic"
            className="w-14 h-12 rounded-lg "
          />
        </Link>
        <Link
          to="/create-pin"
          className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-black text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
