import Comment from '../Comment/Comment';
import './commentFeed.css';
     
export default function CommentFeed({comments, messageId, removeComment, updateComments}) {

  return (
    <div className="CommentFeed">

      {comments.filter(comment => comment.messageId === messageId)
               .map(comment =>
                  <Comment key={comment._id} comment={comment} removeComment={removeComment} updateComments={updateComments} />
      )}
    </div>
  )
}
