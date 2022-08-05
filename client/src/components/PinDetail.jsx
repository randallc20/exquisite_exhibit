import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiOutlineConsoleSql } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import Comment from './Comment';

function PinDetail({ user, displayPin }) {
  const [pin, setPin] = useState();
  const [comment, setComment] = useState('');
  const [reload, setReLoad] = useState();
  const [editForm, setEditForm] = useState(false);

  const formData = {
    user_id: user.id,
    pin_id: displayPin,
    content: comment,
  };

  // console.log(formData);

  function handleChange(e) {
    setComment(e.target.value);
  }

  // console.log(formData);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/pins/${displayPin}`)
      .then((response) => response.json())
      .then((data) => setPin(data));
  }, []);

  function addComment(e) {
    console.log(formData);
    e.preventDefault();
    fetch('http://127.0.0.1:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('nice');
      })
      .catch((error) => window.alert(error));
  }

  function showEditForm() {
    setEditForm(true);
  }

  function handleEdit(id) {
    // fetch(`http://127.0.0.1:3000/${comment_id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify(FormData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('nice');
    //   })
    //   .catch((error) => window.alert(error));
  }

  //fetch for destroy comment
  function handleDelete(id) {
    console.log(id);
    fetch(`http://localhost:3000/comments/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => setReLoad());
  }

  function handleLike(e) {
    console.log('you are liking image: ' + displayPin);
  }

  // const comments = pin.comments.map((comment) => (
  //   <Comment key={comment.id} id={comment.id} displayPin={displayPin} />
  // ));

  if (!pin) {
    return <Spinner message="Showing pin" />;
  } else {
    return (
      <>
        {pin && (
          <div
            className="flex xl:flex-row flex-col m-auto bg-white"
            style={{ maxWidth: '1500px', borderRadius: '32px' }}
          >
            <div className="flex justify-center items-center md:items-start flex-initial">
              <img
                className="rounded-t-3xl rounded-b-lg"
                src={pin.image_url}
                alt="user-post"
              />
            </div>
            <button
              onClick={(e) => handleLike(e)}
              className="bg-black text-white font-bold py-2 px-4 rounded-full space-y-5"
            >
              Like
            </button>
            <div className="w-full p-5 flex-1 xl:min-w-620">
              <div>
                <h1 className="text-4xl font-bold break-words mt-3">
                  {pin.title}
                </h1>
                <p className="mt-3">{pin.caption}</p>
              </div>
              <Link
                to={`/user-profile/${pin.user.username}`}
                className="flex gap-2 mt-5 items-center bg-white rounded-lg "
              >
                <img
                  src={pin.user.profile_pic}
                  className="w-10 h-10 rounded-full"
                  alt="user-profile"
                />
                <p className="font-bold">{pin.user.username}</p>
              </Link>
              <h2 className="mt-5 text-2xl">Comments</h2>
              <div className="max-h-370 overflow-y-auto">
                {/* {comments} */}
                {pin.comments.map((comment) => (
                  <div
                    className="flex gap-2 mt-5 items-center bg-white rounded-lg"
                    key={comment.id}
                    id={comment.id}
                  >
                    <img
                      src={comment.user_id.profile_pic}
                      className="w-10 h-10 rounded-full cursor-pointer"
                      alt="user-profile"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold">{comment.user_id.username}</p>
                      <p>{comment.content}</p>
                      <button onClick={() => handleEdit(comment.id)}>
                        <AiFillEdit />
                      </button>
                      <button onClick={() => handleDelete(comment.id)}>
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap mt-6 gap-3">
                <Link to={`/user-profile/${user.id}`}>
                  <img
                    src={user.profile_pic}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    alt="user-profile"
                  />
                </Link>
                <input
                  className=" flex-1 border-gray-100 outline-none border-2 p-2 rounded-2xl focus:border-gray-300"
                  type="text"
                  name="content"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => handleChange(e)}
                />
                <button
                  type="button"
                  className="bg-red-500 text-white rounded-full px-6 py-2 font-semibold text-base outline-none"
                  onClick={addComment}
                >
                  add comment
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default PinDetail;
