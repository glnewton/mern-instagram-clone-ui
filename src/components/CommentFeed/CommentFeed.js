//Create a CommentFeed component that will be used in the Message component to display all of the comments for a message
// refer to the Comment model for the structure of the data
// C:\Users\Gary\Workspace\perScholas\module3\mern-instagram-clone-api\models\Comment.js
//
import React, { useState, useEffect } from 'react';
import { getAllComments } from '../../services/comments-api';
import Comment from '../Comment/Comment';
import './commentFeed.css';
     
export default function CommentFeed({ messageId }) {
    const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    comment: ''
  });

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getAllComments(messageId);
      setComments(comments);
    }
    fetchComments();
  }, [messageId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, formData]);
    setFormData({ comment: '' });
  }

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment._id !== id));
  }

  const handleUpdateComment = (updatedComment) => {
    const newComments = comments.map(comment => {
      return comment._id === updatedComment._id ? updatedComment : comment;
    });
    setComments(newComments);
  }

  return (
    <div className="CommentFeed">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
        <button>Add Comment</button>
      </form>
      {comments.map(comment =>
        <Comment
          key={comment._id}
          comment={comment}
          handleDeleteComment={handleDeleteComment}
          handleUpdateComment={handleUpdateComment}
        />
      )}
    </div>
  )
}




      {/* <div className="comments">
            <div className="commentInput">
              <input type="text" placeholder="Add a comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)} />
              <button onClick={createTheComment}>Post</button>
            </div>
            {comments.map((comment) => {
              return <Comment key={comment._id} data={comment} />
            })}
          </div> */}