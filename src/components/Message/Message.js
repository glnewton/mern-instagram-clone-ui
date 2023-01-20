import './message.css';
import profilePic from '../../images/testProfilePic.png';
import testMessagePic from '../../images/testMessagePic.jpeg';


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { editMessage, deleteMessage } from "../../services/messages-api.js";

import Comment from '../Comment/Comment';
import CommentFeed from '../CommentFeed/CommentFeed';
import { createComment, getAllComments } from "../../services/comments-api.js";

import { getAuth, updateProfile } from "firebase/auth"

//import the font awesome heart icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default function Message({ element }) {
  console.log(element);

  const nav = useNavigate()

  const [likes, setLikes] = useState(element.likes);
  const [numberOfComments, setNumberOfComments] = useState(element.comments);
  const [addCommentText, setAddCommentText] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments()
      .then(response => {
        setComments(response);
      })
      .catch(error => console.log(error))
  }, []);

  const handleHeartClick = async () => {
    console.log("heart clicked")
    if(element.likes === null){
      element.likes = 0
    }
    else if(element.likes === NaN){
      element.likes = 0
    }
    setLikes(likes + 1);
    const updatedMessage = {...element, likes: element.likes + 1};
    try {
      await editMessage(element._id, updatedMessage);
      const heart = document.querySelector('.fa-heart');
      heart.classList.add('clicked');
      setTimeout(() => {
        heart.classList.remove('clicked');
      }, 2000);

    } catch (error) {
      console.log(error);
    }
  }


  const deleteTheMessage = async () => {
    try {
      await deleteMessage(element._id); // service in messages-api
      nav('/'); // take us back to home screen
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddComment = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    let newComment = {
      messageId: element._id,
      text: addCommentText,
      userName: user.displayName || "anonymous",
      userProfileImage: user.photoURL || "testProfilePic.png",
      createdDate: "2021-09-01T00:00:00.000Z" || new Date().toISOString()
    }
    try {
      console.log('payload:', newComment);
      await createComment(newComment);
      console.log("comment added....trying to update message comments+1")
      updateMessageWithNewComment();
      setAddCommentText(""); //clear the input field after adding comment
      setComments([...comments, newComment])
    }
    catch (error) {
      console.log(error);
    }
  }

  const updateMessageWithNewComment = async () => {
    const updatedMessage = {...element, comments: element.comments + 1};
    try {
      await editMessage(element._id, updatedMessage);
      setNumberOfComments(numberOfComments + 1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="message">
        <div className="messageHeader">
          <div className="author">
            <img className="authorImage" src={profilePic} alt="AuthorIcon" />
            {element.userName}
          </div>
          <div className="DropDownMenu">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="deleteButton">Delete</div>
          </div>
        </div> {/*end of messageHeader*/}

        <div className="imgContainer">
          <img src={testMessagePic || element.imageUrl} alt="messageImage" />
        </div> {/*end of imgContainer*/}

        <div className="messageFooter">

          <div className="messageInfo">
            <div className="status">
              <FontAwesomeIcon icon={faHeart } onClick={handleHeartClick} />
              <div className="likes">{likes} likes</div>
              <div className="totalComments">{numberOfComments || 0} comments</div>
            </div>
          </div> {/*end of messageInfo*/}

          <div className="messageText">
            <div className="messageTextLine">
              <b>{element.userName}</b> {element.message} 
            </div>
            {/* <hr/> */}
          </div> {/*end of messageText*/}

          <div className="commentSection">
            <CommentFeed messageId={element._id} comments={comments} />
            <div className="addCommentSection">
              <div className="commentInput">
                <input type="text" placeholder="Add a comment..." value={addCommentText} onChange={(e) => setAddCommentText(e.target.value)} />
                <button onClick={handleAddComment}>Add Comment</button>
              </div> {/*end of commentInput*/}
            </div> {/*end of addCommentSection*/}
          </div> {/*end of commentSection*/}

          <div className="messageOptions">
            <Link to={`/view-message/${element._id}`}>
              <button>View</button>
            </Link>
            <Link to={`/edit-message/${element._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={deleteTheMessage}>Delete</button>
          </div> {/*end of messageOptions*/}

        </div> {/*end of messageFooter*/}

      </div> {/*end of message*/}
    </>
  );
}

//   const commentText = numComments === 1 ? "comment" : "comments";

