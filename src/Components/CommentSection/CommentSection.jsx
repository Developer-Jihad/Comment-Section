import React, { useState } from "react";
import Comment from "../Comment/Comment";
import "./CommentSection.css";
import InputComponent from "./../InputComponent/InputComponent";

export default function CommentSection() {
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const userComment = e.target.userComment.value;
    setComments([...comments, { userName, userComment }]);
    e.target.userName.value = "";
    e.target.userComment.value = "";
  };

  return (
    <>
      <div className="comment-section">
        <h1>LEAVE YOUR COMMENT</h1>
        <form onSubmit={handleSubmit}>
          <InputComponent
            name={"userName"}
            id={"user-name"}
            labelText={"User Name"}
          />
          
          <br />
          <InputComponent
            name={"userComment"}
            id={"comment"}
            labelText={"Comment"}
          />
          
          <br />
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
      {comments.length > 0 && <div className="comments">
      {comments.map((c, i) => (
        <Comment key={i} comment={c} />
      ))}
      </div>}
    </>
  );
}
