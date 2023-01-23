import React, { useState } from 'react';
import './comment.css';
import { deleteComment, editComment } from '../../services/comments-api.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Comment({ comment, updateComments, removeComment }) {
    
    const [selectedCommentId, setSelectedCommentId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [commentText, setCommentText] = useState(comment.text);

    const handleClick = () => {
        if (selectedCommentId !== comment._id) {
            setSelectedCommentId(comment._id);
        }
        else {
            setSelectedCommentId(null);
        }
    }

    const handleDeleteComment = async () => {
        try {
            await deleteComment(comment._id);
            setIsEditing(false);
            setIsDeleting(false)
            setSelectedCommentId(null);
            removeComment(comment._id); // remove comment from state
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleEditComment = async (event) => {
        event.preventDefault();
        const updatedComment = {
            ...comment,
            text: commentText
         };
        try {
            await editComment(comment._id, updatedComment);
            setIsEditing(false);
            setSelectedCommentId(null);
            updateComments(); // update comments in state
 
        }
        catch (error) {
            console.log(error);
        }
    }


    if (!comment) {
        return null;
    }



    return (
        <div className="comment">
            <div className={`commentLine ${selectedCommentId === comment._id ? 'selected' : ''}`} onClick={handleClick}>
                {isEditing ? (
                    <>
                        <div className='text-container'>
                            <b>{comment.userName}</b>
                            <div className="editCommentFormFieldContainer">
                                <div className="editCommentFormField">
                                    <form onSubmit={handleEditComment}>
                                        <div className="editCommentFormFieldInput">
                                            <input type="text" value={commentText} onChange={event => setCommentText(event.target.value)} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faCheck} className="comment-icon" onClick={handleEditComment} />
                            <FontAwesomeIcon icon={faTimes} className="comment-icon" onClick={() => setIsEditing(false)} />
                        </div>
                    </>
                ) : (
                    <>
                        {comment && (isDeleting ? <FontAwesomeIcon icon={faTrash} className="comment-icon" style={{ marginRight: 10 }} /> : null)}
                        <div className="text-container">
                            <b>{comment.userName}</b> {comment && (isDeleting ? `Delete this comment?` : comment.text)}
                        </div>
                        {selectedCommentId === comment._id && (
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faPen} className="comment-icon" onClick={() => setIsEditing(true) && setIsDeleting(false)} />
                                <FontAwesomeIcon icon={faTrash} className="comment-icon" onClick={() => setIsDeleting(true) && setIsDeleting(false)} />
                            </div>
                        )}
                    </>
                )
                }

                {
                    isDeleting ? (
                        <div className="delete-container">
                            <div className="icon-container">
                                <FontAwesomeIcon icon={faCheck} className="comment-icon" onClick={handleDeleteComment} />
                                <FontAwesomeIcon icon={faTimes} className="comment-icon" onClick={() => setIsDeleting(false)} />
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
;
