import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './message.css';

import profilePic from '../../images/testProfilePic.png';
import testMessagePic from '../../images/testMessagePic.jpeg';

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { editMessage, deleteMessage } from "../../services/messages-api.js";

import CommentFeed from '../CommentFeed/CommentFeed';
import { createComment, getAllComments } from "../../services/comments-api.js";

import { getAuth } from "firebase/auth"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default function Message({ element, darkMode }) {
  // console.log(element);
  const nav = useNavigate()
  const location = useLocation();
  const isViewMessagePage = location.pathname.startsWith('/view-message/');

  const [imageUrl, setImageUrl] = useState(element.imageUrl);
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
    if (element.likes === null) {
      element.likes = 0
    }
    else if (isNaN(element.likes)) {
      element.likes = 0
    }
    setLikes(likes + 1);
    const updatedMessage = { ...element, likes: element.likes + 1 };
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

  const removeComment = commentId => {
    setComments(comments.filter(comment => comment._id !== commentId));
    setNumberOfComments(numberOfComments - 1);
  };

  const updateMessageWithNewComment = async () => {
    const updatedMessage = { ...element, comments: element.comments + 1 };
    try {
      await editMessage(element._id, updatedMessage);
      setNumberOfComments(numberOfComments + 1);
    } catch (error) {
      console.log(error);
    }
  }

  const updateComments = async () => {
    try {
      const response = await getAllComments()
      setComments(response);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Card className={`message ${darkMode ? 'message-dark-mode border-dark' : ''}`}>
        <Card.Body>

          <Card.Header className="messageHeader">
            <div className="author">
              <img className="authorImage" src={imageUrl || element.photoURL || profilePic} alt="AuthorIcon" crossOrigin="anonymous" />
              {element.userName}
            </div>
          </Card.Header> {/*end of messageHeader*/}

          <Link to={`/view-message/${element._id}`}>
            <div className="imgContainer">
              <Card.Img src={element.imageUrl || testMessagePic} alt="messageImage" crossOrigin="anonymous" />
            </div> {/*end of imgContainer*/}
          </Link>

          <Card.Footer className="messageFooter">

            <div className="messageInfo">
              <div className="status">
                <FontAwesomeIcon icon={faHeart} onClick={handleHeartClick} />
                <div className="likes">{likes} likes</div>
                <div className="totalComments">{numberOfComments || 0} comments</div> //   {/* const commentText = numComments === 1 ? "comment" : "comments"; */}
              </div>
            </div> {/*end of messageInfo*/}

            <Card.Title className="messageText">
              <div className="messageTextLine">
                <b>{element.userName}</b> {element.message}
              </div>
            </Card.Title> {/*end of messageText*/}

            <div className="commentSection">

              <CommentFeed messageId={element._id} comments={comments} removeComment={removeComment} updateComments={updateComments} />

              <div className="addCommentSection">
                <Form className='mt-3 mb-3'>
                  <div className="commentInput">
                    <Form.Group className="col-7" controlId="formBasicComment">
                      <Form.Control type="text" placeholder="Add a comment..." value={addCommentText} onChange={(e) => setAddCommentText(e.target.value)} />
                    </Form.Group>
                    <Button className="col-2.5" onClick={handleAddComment}>Add Comment </Button>
                  </div>
                </Form>
              </div> {/*end of addCommentSection*/}
            </div> {/*end of commentSection*/}

            {isViewMessagePage && (
              <>
                <hr className="mw-80 m-auto" />
                <div className="messageOptionButtons">
                  <Link to={`/view-message/${element._id}`}>
                    <Button variant="info">View</Button>
                  </Link>
                  <Link to={`/edit-message/${element._id}`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                  <Button variant="danger" onClick={deleteTheMessage} >
                    Delete
                  </Button>
                </div>
              </>
            )
            } {/*end of messageOptions*/}
          </Card.Footer> {/*end of messageFooter*/}

        </Card.Body>
      </Card> {/*end of message*/}
    </>
  );
}


