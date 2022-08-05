import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

import Spinner from './Spinner';

function CreatePin({ user }) {
  const user_id = user.id;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [wrongImageType, setWrongImageType] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    caption: '',
    image_url: '',
    category: '',
    user_id,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function uploadPin(e) {
    e.preventDefault();
    console.log(formData);
    fetch('http://127.0.0.1:3000/pins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          alert('Please try again!');
        } else {
          navigate('/');
        }
      })
      .catch((error) => window.alert(error));
  }

  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5">
      <form onSubmit={(e) => uploadPin(e)}>
        <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5  w-full">
          <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
            <label className="text-lg font-medium">Image Url:</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Copy and paste your image url here"
              type="text"
              name="image_url"
              onChange={(e) => handleChange(e)}
              value={formData.image_url}
            />
            <label className="text-lg font-medium">Title:</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Copy and paste your image url here"
              type="text"
              name="title"
              onChange={(e) => handleChange(e)}
              value={formData.title}
            />
            <label className="text-lg font-medium">Caption</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Copy and paste your image url here"
              type="text"
              name="caption"
              onChange={(e) => handleChange(e)}
              value={formData.caption}
            />
            <label className="text-lg font-medium">Category:</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Copy and paste your image url here"
              type="text"
              name="category"
              onChange={(e) => handleChange(e)}
              value={formData.category}
            />
            <button className="bg-black text-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Upload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePin;
