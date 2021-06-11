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
        <div className="addComment">
        
            <h3>LEAVE A COMMENT</h3>
               
            <input className="addComment-name" type="text" value={userName} onChange={e => setUserName(e.target.value)}  placeholder="NAME"/>
          
            <textarea  className="addComment-text"rows="4" cols="50" value={comment} onChange={e => setComment(e.target.value)} placeholder="COMMENT..." />
        
            <button className="addComment-btn" onClick={handleComment}>LEAVE COMMENT</button>
            {/* <hr/> */}
        </div>
    );
}

export default AddComment;