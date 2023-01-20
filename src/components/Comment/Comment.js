import React, { useState } from 'react';
import './comment.css';

export default function Comment({comment}) {
    if (!comment) {
        return null;
    }
    return(
        <div className="comment">
            <div className="commentLine">
                <b>{comment.userName}</b> {comment && comment.text} 
            </div>    
        </div>
    )
}