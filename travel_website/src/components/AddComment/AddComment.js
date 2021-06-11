import React, { useState } from 'react';
import './AddComment.scss';
import axios from "axios";

const AddComment = ({ post_Id}) => {

    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [postId, setPosId] = useState('');
    
    const handleComment = async (e) => {
        e.preventDefault();
        setPosId(post_Id)
        const newComment = {
                userName,
                comment,
                postId,
        }
        try{
             await axios.post("/comments", newComment);
             window.location.reload();
            
        } catch(err){
                console.log(err)
        }

        };

    return (
        <div className="add-comment-form">
            <h3>LEAVE A COMMENT</h3>
                <hr/>
               
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)}  placeholder="NAME"/>
          
                <textarea rows="4" cols="50" value={comment} onChange={e => setComment(e.target.value)} placeholder="COMMENT" />
        
            <button className="send-comment"onClick={handleComment}>LEAVE COMMENT</button>
        </div>
    );
}

export default AddComment;