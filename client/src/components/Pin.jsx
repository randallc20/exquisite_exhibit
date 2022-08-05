import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

function Pin({ pin, setDisplayPin }) {
  const [postHovered, setPostHovered] = useState(false);
  const navigate = useNavigate();

  // console.log(pin);
  // console.log(pin.user_id.username);
  function handleClick() {
    setDisplayPin(pin.id);
    navigate(`/pin-detail/${pin.id}`);
  }

  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={handleClick}
        className=" relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        {pin && (
          <img
            className="rounded-lg w-full "
            src={pin.image_url}
            alt="user-post"
          />
        )}
        {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: '100%' }}
          ></div>
        )}
      </div>
      <Link
        to={`/user-profile/${pin.user_id}`}
        className="flex gap-2 mt-2 items-center"
      ></Link>
    </div>
  );
}

export default Pin;
