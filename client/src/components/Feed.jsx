import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

function Feed({ user, setDisplayPin }) {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);

  //this is where I need to fetch all pins in my database and then pass that
  //to masonry layout
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/pins`)
      .then((response) => response.json())
      .then((data) => setPins(data));
  }, []);

  //console.log(pins);

  if (loading) {
    return <Spinner message={`We are adding images to your feed!`} />;
  }
  return (
    <div>
      {pins && <MasonryLayout pins={pins} setDisplayPin={setDisplayPin} />}
    </div>
  );
}

export default Feed;
