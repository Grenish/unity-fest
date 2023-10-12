import { useState, useEffect } from "react";

const Discussion = () => {
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleStartDiscussion = () => {
    const newComment = {
      message: message,
      likes: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
    setMessage("");
  };

  const handleLikeComment = (index) => {
    const newComments = [...comments];
    newComments[index].likes++;
    setComments(newComments);
  };

  const handleReplyComment = (index, replyMessage) => {
    const newComments = [...comments];
    newComments[index].replies.push({
      message: replyMessage,
      likes: 0,
      replies: [],
    });
    setComments(newComments);
  };

  const renderComment = (comment, index) => {
    return (
      <div
        key={index}
        className="border border-gray-200 rounded px-4 py-2 mb-4"
      >
        <p className="mb-2 text-gray-700">{comment.message}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleLikeComment(index)}
            className="text-white bg-blue-500 hover:bg-blue-700 rounded py-1 px-2"
          >
            {comment.likes} Likes
          </button>
          <button className="text-white bg-green-500 hover:bg-green-700 rounded py-1 px-2">
            Reply
          </button>
        </div>
        {comment.replies.map((reply, replyIndex) => (
          <div
            key={replyIndex}
            className="border border-gray-200 rounded px-4 py-2 mb-4 ml-4 mt-4"
          >
            <p className="mb-2 text-gray-700">{reply.message}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleLikeComment(replyIndex)}
                className="text-white bg-blue-500 hover:bg-blue-700 rounded py-1 px-2"
              >
                {reply.likes} Likes
              </button>
              <button className="text-white bg-green-500 hover-bg-green-700 rounded py-1 px-2">
                Reply
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Reply to this comment"
            className="rounded border border-gray-200 p-2 w-full"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleReplyComment(index, event.target.value);
                event.target.value = "";
              }
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 pt-24 mx-auto max-w-7xl">
      <h1 className="font-bold text-3xl text-center mb-4 text-gray-700">
        Discussion
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your message"
          className="rounded border border-gray-200 p-2 w-full text-blackPrimary"
          value={message}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4 text-center">
        <button
          onClick={handleStartDiscussion}
          className="text-white bg-red-500 hover:bg-red-700 rounded py-2 px-4"
        >
          Start Discussion
        </button>
      </div>
      {comments.map(renderComment)}
    </div>
  );
};

export default Discussion;
