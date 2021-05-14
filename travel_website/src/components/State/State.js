import React from 'react';
import './State.scss';
import PostData from "../PostList/PostData";
import PostList from "../PostList/PostList";
import {Link } from 'react-router-dom';
import NotFoundPage from "../../pages/ErrorsPage/NotFoundPage"

const State = ({ match }) => {
    const state = match.params.state;
    const updates = PostData.filter(updates => updates.stateName === state);
    
    if (!updates) return <NotFoundPage />

    return (
        <>

        <div className="states">
            <PostList updates = {updates} />
        </div>


        
        </>
    );
}

export default State;