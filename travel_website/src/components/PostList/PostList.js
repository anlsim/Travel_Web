import React from 'react';
import {Link } from 'react-router-dom';
import "./PostList.scss"

const PostList = ({updates}) => (
    <>
    <div className="card-columns">
        
        {updates.map((update, id)=>(
            <div className="card" >
                <img src={update.imgUrl} class="card-img-top" alt="..."></img>
                <div class="card-img-overlay">
                <Link key = {id} to = {`/post/${update.date}`}>
                    <div className="bottom">
                    <p className="card-text"><small>Last updated 3 mins ago</small></p> 
                    <h3 className="card-title">{update.title}</h3>
                    </div>
                  {/* <p className="card-text">{update.content[0].substring(0, 100)}...</p> */}
                   
                </Link>
                </div>
            </div>   
        ))
        }
           
    </div>
   
    </>
);

export default PostList;