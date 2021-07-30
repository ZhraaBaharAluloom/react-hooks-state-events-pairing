import React, { useState } from "react";
import Detail from "./Detail";
import Comments from "./Comments";
import SearchBar from "./SearchBar";

const Video = ({ video }) => {
  const comments = video.comments;
  const [_comments, setComments] = useState(comments);
  const [hideComments, setHideComments] = useState(false);
  const [search, setSearch] = useState("");
  const { title, embedUrl, views, createdAt, upvotes, downvotes } = video;

  const handleDelete = (commentId) => {
    const filteredComments = _comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(filteredComments);
  };

  const commentsList = _comments
    .filter((_comment) =>
      _comment.user.toLowerCase().includes(search.toLowerCase())
    )
    .map((_comment) => (
      <Comments
        comment={_comment}
        key={_comment.id}
        handleDelete={handleDelete}
      />
    ));

  const handleClick = () => {
    setHideComments(!hideComments);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Detail
        embedUrl={embedUrl}
        title={title}
        views={views}
        createdAt={createdAt}
        upvotes={upvotes}
        downvotes={downvotes}
      />
      <br />
      <button onClick={handleClick}>Hide Comments</button>
      <hr />
      <SearchBar handleSearch={handleSearch} search={search} />
      <div style={{ width: "400px", display: "block", margin: "auto" }}>
        {hideComments ? null : commentsList}
      </div>
    </div>
  );
};

export default Video;
