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
        <div className="col">
            <h1>{update.title}</h1>
            {update.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </div>
        
        <div className="col updateList">
            <h3>Other Updates:</h3>
            <PostList updates = {otherUpdates.slice(0,6)} />
        </div>
        
        </div>
        
        </>
    );
}

export default Post;