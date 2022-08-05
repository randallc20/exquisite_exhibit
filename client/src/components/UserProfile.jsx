import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

function UserProfile({ user, setDisplayPin }) {
  const [pins, setPins] = useState();

  //I want this to fetch only pins with this user id
  //then add an edit button to edit pins
  //user_id add a delete button here on hover maybe
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/users/${user.id}/pins`)
      .then((response) => response.json())
      .then((data) => setPins(data));
  }, []);

  // console.log(pins);
  if (!pins) {
    <Spinner />;
  } else {
    return (
      <div className="relative pb-2 h-full justify-center items-center">
        <div className="flex flex-col pb-5">
          <div className="relative flex flex-col mb-7">
            <div className="flex flex-col justify-center items-center">
              <img
                className=" w-full h-370 2xl:h-510 shadow-lg object-cover"
                src="https://source.unsplash.com/1600x900/?nature,photography,technology"
                alt="user-pic"
              />
              <img
                className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
                src={user.profile_pic}
                alt="user-pic"
              />
            </div>
            <h1 className="font-bold text-3xl text-center mt-3">
              {user.username}
            </h1>
          </div>

          <div className="px-2">
            <MasonryLayout pins={pins} setDisplayPin={setDisplayPin} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
