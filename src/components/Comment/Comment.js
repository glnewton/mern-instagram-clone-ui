import React, { useState } from 'react';
import './comment.css';
import { deleteComment, editComment } from '../../services/comments-api.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Comment({ comment }) {

    const [selectedCommentId, setSelectedCommentId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState(comment.text);

    const handleClick = () => {
        if (selectedCommentId !== comment._id) {
            setSelectedCommentId(comment._id);
        }
        else {
            setSelectedCommentId(null);
        }
    }

    const handleDelete = async () => {
        try {
            await deleteComment(comment._id);
            setIsEditing(false);
            setSelectedCommentId(null);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleEdit = async () => {
        try {
            await editComment(comment._id, text);
            setIsEditing(false);
            setSelectedCommentId(null);
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
                        <textarea value={text} onChange={e => setText(e.target.value)} />
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faCheck} className="comment-icon" onClick={handleEdit} />
                            <FontAwesomeIcon icon={faTimes} className="comment-icon" onClick={() => setIsEditing(false)} />
                        </div>
                    </>
                ) : (
                    <>
                        <b>{comment.userName}</b> {comment && comment.text}
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
                                <FontAwesomeIcon icon={faCheck} className="comment-icon" onClick={handleDelete} />
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


        // <div className="comment">
        //     {editMode ? (
        //         <>
        //             <textarea value={text} onChange={e => setText(e.target.value)} />
        //             <button onClick={handleUpdate}>Save</button>
        //         </>
        //     ) : (
        //         <>
        //             <div className="comment-text">
        //                 <b>{comment.userName}</b> {text}
        //             </div>
        //             <div className="comment-actions">
        //                 <button onClick={() => setEditMode(true)}>Edit</button>
        //                 <button onClick={handleDelete}>Delete</button>
        //             </div>
        //         </>
        //     )}
        // </div>

