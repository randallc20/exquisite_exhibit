import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiOutlineConsoleSql } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

function Comment({ id, displayPin }) {
  const [comment, setComment] = useState('');

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
    }).then((res) => console.log(res));
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/comments/${id}`)
      .then((response) => response.json())
      .then((data) => setComment(data));
  }, []);
  console.log(comment);

  return (
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
  );
}

export default Comment;
