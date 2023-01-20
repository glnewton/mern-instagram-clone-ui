import Comment from '../Comment/Comment';
import './commentFeed.css';
     
export default function CommentFeed({comments, messageId}) {
    


  return (
    <div className="CommentFeed">

      {comments.filter(comment => comment.messageId === messageId)
               .map(comment =>
                  <Comment key={comment._id} comment={comment} />
      )}
    </div>
  )
}
