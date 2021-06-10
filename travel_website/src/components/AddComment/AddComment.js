import React, { useState } from 'react';
import './AddComment.scss';

const Comment = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [postId, setPosId] = useState('');
    

    // const addComment = async () => {
    //     const result = await fetch(`/api/articles/${articleName}/add-comment`, {
    //         method: 'post',
    //         body: JSON.stringify({ username, text: commentText }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     });
    //     const body = await result.json();
    //     setArticleInfo(body);
    //     setUsername('');
    //     setCommentText('');
    // }

    return (
        <div className="add-comment-form">
            <h3>LEAVE A COMMENT</h3>
                <hr/>
               
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  placeholder="NAME"/>
          
                <textarea rows="4" cols="50" value={comment} onChange={(event) => setComment(event.target.value)} placeholder="COMMENT" />
        
            <button className="send-comment">LEAVE COMMENT</button>
        </div>
    );
}

export default Comment;