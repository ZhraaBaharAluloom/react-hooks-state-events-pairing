import React from "react";
import Votes from "./Votes";

const Detail = ({ embedUrl, title, createdAt, views, upvotes, downvotes }) => {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <p>{title}</p>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
      <Votes upvotes={upvotes} downvotes={downvotes} />
    </div>
  );
};

export default Detail;
