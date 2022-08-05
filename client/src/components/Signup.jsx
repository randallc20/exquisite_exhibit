import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    profile_pic: '',
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch('http://127.0.0.1:3000/signup', {
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
          navigate('/login');
        }
      })
      .catch((error) => window.alert(error));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className="flex w-full h-screen">
      <div className=" w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
        <h1 className="text-5xl font-semibold">Please fill out all fields</h1>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email..."
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                value={formData.email}
                autoFocus={true}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password..."
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                value={formData.password}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">First and Last Name</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your full name..."
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
                value={formData.name}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Username</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your screen name..."
                type="text"
                name="username"
                onChange={(e) => handleChange(e)}
                value={formData.username}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">
                Profile Picture Url:
              </label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Copy and paste your image url here"
                type="text"
                name="profile_pic"
                onChange={(e) => handleChange(e)}
                value={formData.profile_pic}
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg"
                // onClick={() => {
                //   navigate("/");
                // }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-blue-700 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default Signup;
