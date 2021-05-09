import React from 'react';
import {Link } from 'react-router-dom';

const PostList = ({updates}) => (
    <>
    <div className="card-columns">
        
        {updates.map((update, id)=>(
            <div className="card" >
                <div className="card-body">
                <Link key = {id} to = {`/post/${update.date}`}>
                  <h3 className="card-title">{update.title}</h3>
                  <p>{update.content[0].substring(0, 100)}...</p>  
                </Link>
                </div>
            </div>   
        ))
        }
           
    </div>
   
    </>
);

export default PostList;