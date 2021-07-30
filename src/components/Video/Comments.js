import React from "react";
import Votes from "./Votes";

const Comments = ({ comment, handleDelete }) => {
  return (
    <div style={{ padding: 30 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <span style={{ fontWeight: "bold" }}>{comment.user}</span> :
          {comment.comment}
        </p>
        <p onClick={() => handleDelete(comment.id)} style={{ color: "red" }}>
          Remove
        </p>
      </div>
      <div style={{ float: "right" }}>
        <Votes upvotes={0} downvotes={0} />
      </div>
    </div>
  );
};

export default Comments;
