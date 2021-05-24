import React, { useState } from 'react';
import './Comment.scss';

const Comment = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

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
        <div class="add-comment-form">
            <h3>LEAVE A COMMENT</h3>
                <hr/>
               
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  placeholder="NAME"/>
          
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} placeholder="COMMENT" />
        
            <button class="send-comment">LEAVE COMMENT</button>
        </div>
    );
}

export default Comment;