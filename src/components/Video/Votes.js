import React, { useState } from "react";

const Votes = ({ upvotes, downvotes }) => {
  const [_upvotes, setUpVotes] = useState(upvotes);
  const [_downvotes, setDownVotes] = useState(downvotes);

  return (
    <div>
      <button onClick={() => setUpVotes(_upvotes + 1)}>{_upvotes}👍</button>

      <button onClick={() => setDownVotes(_downvotes + 1)}>
        {_downvotes}👎
      </button>
    </div>
  );
};

export default Votes;
