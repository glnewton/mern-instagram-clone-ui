import './message.css';
//import Comment from '../Comment/Comment.js';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteMessage } from "../../services/messages-api.js";
import CommentFeed from '../CommentFeed/CommentFeed';
// import { createComment } from "../services/comments-api.js";
// import { getAllComments } from "../services/comments-api.js";
import Comment from "../Comment/Comment.js";

export default function Message({ element }) {
  const nav = useNavigate()
  // const [comments, setComments] = useState([]);
  // const [commentText, setCommentText] = useState("");

  const deleteTheMessage = async () => {
    try {
      await deleteMessage(element._id); // service in messages-api
      nav('/'); // take us back to home screen
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="message">
        <div className="messageHeader">
          <div className="author">
            <img className="authorImage" src={'../../images/testProfilePic.png' || 'https://via.placeholder.com/40'} alt="AuthorIcon" />
            {element.userName}
          </div>
          {/* <div className="author">
            {props.data.user.profileImageUrl ? <img data-testid="profileImage" className="authorImage" src={props.data.user.profileImageUrl} alt="AuthorIcon" /> : <div className="authorImage" data-testid="defaultImage" />}
            <span>{element.userName}</span>
          </div> */}

        </div> {/*end of messageHeader*/}

        <div className="imgContainer">
          <img src={element.imageUrl || 'https://via.placeholder.com/613.99'} alt="messageImage" />
        </div> {/*end of imgContainer*/}

        <div className="messageFooter">

          <div className="messageInfo">
            <div className="status">
              <div className="heart"></div>
              <div className="likes">{element.likes || 0} likes</div>
              <div className="totalComments">{element.comments || 0} comments</div>
            </div>
          </div> {/*end of messageInfo*/}

          <div className="description">
            <Comment element={element} />
            {/* <p><b>{element.userName}</b> {element.message} <a href className="more"> more</a></p> */}
          </div> {/*end of description*/}
          <div className="addCommentSection">
            {/* <CommentFeed messageId={element._id}/> */}
            <div className="commentInput">
              <input type="text" placeholder="Add a comment..." />
              <button >Add Comment</button>
            </div>
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



      {/* <div className="comments">
            <div className="commentInput">
              <input type="text" placeholder="Add a comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)} />
              <button onClick={createTheComment}>Post</button>
            </div>
            {comments.map((comment) => {
              return <Comment key={comment._id} data={comment} />
            })}
          </div> */}
    </>
  );
}




// const Post = (props) => {

//   const [numComments, setNumComments] = useState(0);

//   const updateNumComments = (numberComments) => {
//     setNumComments(numberComments);
//   }

//   const commentText = numComments === 1 ? "comment" : "comments";

//   return (
//     <div className="post">

//       <div className="postHeader">
//         <div className="author">
//           {props.data.user.profileImageUrl ? <img data-testid="profileImage" className="authorImage" src={props.data.user.profileImageUrl} alt="AuthorIcon" /> : <div className="authorImage" data-testid="defaultImage" />}
//           <span>{props.data.user.username}</span>
//         </div>
//         <div>
//           <div className="DropDownMenu">
//             <div className="dot"></div>
//             <div className="dot"></div>
//             <div className="dot"></div>
//             <div className="deleteButton">Delete</div>
//           </div>
//         </div>
//       </div>

//       <div className="imgContainer">
//         <img src={props.data.imageUrl} alt="postImage" />
//       </div>

//       <div className="PostInfo">
//         <div className="status">
//           <div className="heart"></div>
//           <span className="likes">0 likes {numComments} {commentText}</span>
//         </div>
//         <div className="description">
//           <p><b>{props.data.user.username}</b> {props.data.message} <a className="more">more</a></p>
//         </div>
//         {/* <div className="commentSection">
//           <Comment postId={props.data.id}
//             updateNumComments={updateNumComments}
//           />
//         </div> */}
//       </div>

//     </div>
//   );
// }

{/* <div className="messageFooter">
            <div className="messageFooterLeft">
              <button className="likeButton">
                <i className="far fa-heart"></i>
              </button>
              <button className="commentButton">
                <i className="far fa-comment"></i>
              </button>
              <button className="shareButton">
                <i className="far fa-paper-plane"></i>
              </button>
            </div>
            <div className="messageFooterRight">
              <button className="saveButton">
                <i className="far fa-bookmark"></i>
              </button>
            </div>
          </div> */}