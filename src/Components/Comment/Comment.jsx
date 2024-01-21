import React from "react";
import './Comment.css'

export default function Comment({ comment: { userName, userComment } }) {
  return (
    <>
      <div className="comment">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukleU1059SFH-flP36qRWECpm9pQfQ7f50Q&usqp=CAU" alt="" />
        <div>
        <p><b>User: {userName}</b> <br /> <span>Comment: {userComment}</span></p>
        </div>
      </div>
    </>
  );
}
