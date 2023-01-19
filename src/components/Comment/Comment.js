//Create a comment component that will be used in the Message component
// refer to the Comment model for the structure of the data
// C:\Users\Gary\Workspace\perScholas\module3\mern-instagram-clone-api\models\Comment.js
//
import React, { useState } from 'react';
import { deleteComment, editComment } from '../../services/comments-api';
import './comment.css';

export default function Comment({ element }) {
//     const [isEditing, setIsEditing] = useState(false);
//     const [formData, setFormData] = useState({
//         comment: comment.comment
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const updatedComment = await editComment(comment._id, formData);
//         handleUpdateComment(updatedComment);
//         setIsEditing(false);
//     }

//     return (
//         <div className="comment">
//             {isEditing ?
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="comment"
//                         value={formData.comment}
//                         onChange={handleChange}
//                     />
//                     <button>Save</button>
//                 </form>
//                 :
//                 <>
//                     <p>{comment.comment}</p>
//                     <button onClick={() => setIsEditing(true)}>Edit</button>
//                     <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
//                 </>
//             }
//         </div>
//     )
// }
    return(
        <div className="comment">
            <div className="commentLine">
                <b>{element.userName}</b> 
                {element.message}
            </div>    
        </div>
    )
}