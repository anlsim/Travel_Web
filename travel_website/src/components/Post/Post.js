import React from 'react';
import './Post.scss';
import PostData from "../PostList/PostData"
import PostList from "../PostList/PostList"
import NotFoundPage from "../../pages/ErrorsPage/NotFoundPage"

const Post = ({ match }) => {
    const date = match.params.date;
    const update = PostData.find(update => update.date === date);

    if (!update) return <NotFoundPage />

    const otherUpdates = PostData.filter(update => update.date !== date);

    return (
        <>
        <div className="row postContainer">
            <div className="col-8 postDiv">
                <h1>{update.title}</h1>
                {update.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                {
                    update.postImage.map((img, key) => (
                        <img src={img} alt={key}></img>
                    ))
                }
            </div>
            
            <div className="col updateList">
                <h3>Other Updates:</h3>
                <PostList updates = {otherUpdates.slice(0,4)} />
            </div>
            
        </div>
        
        </>
    );
}

export default Post;