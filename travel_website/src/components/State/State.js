import React from 'react';
import './State.scss';
import PostData from "../PostList/PostData";
import PostList from "../PostList/PostList";
import NotFoundPage from "../../pages/ErrorsPage/NotFoundPage"

const State = ({ match }) => {
    const state = match.params.state;
    const updates = PostData.filter(updates => updates.stateName === state);
    const updatesss = PostData.filter(updatesss => updatesss['stateName'] );
 
    console.log(updatesss)
    
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