import React from 'react';
import './Post.scss';
import PostData from "../PostList/PostData"
import PostList from "../PostList/PostList"
import NotFoundPage from "../../pages/ErrorsPage/NotFoundPage"

const Post = ({ match }) => {
    const date = match.params.date;
    const article = PostData.find(article => article.date === date);

    if (!article) return <NotFoundPage />

    const otherArticles = PostData.filter(article => article.date !== date);

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles:</h3>
        <PostList updates = {otherArticles} />
        </>
    );
}

export default Post;