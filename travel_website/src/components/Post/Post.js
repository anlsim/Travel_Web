import React from 'react';
import './Post.scss';
import PostData from "../PostList/PostData"
import PostList from "../PostList/PostList"
import NotFoundPage from "../../pages/ErrorsPage/NotFoundPage"
import Comment from '../Comment/Comment'


const Post = ({ match }) => {
    const date = match.params.date;
    const update = PostData.find(update => update.date === date);

    if (!update) return <NotFoundPage />

    const otherUpdates = PostData.filter(update => update.date !== date);

    return (
        <>
        <div className="row postContainer">
            <div className="col-8 postDiv">
                <div>
                <h1>{update.title}</h1>
                <p>{update.date}</p>
                {update.content.map((paragraph, key) => (
                    <p className="postDescriotion"key={key}>{paragraph}</p>
                ))}
                {
                    update.postImage.map((img, key) => (
                        <img class="postImage" src={img} alt={key}></img>
                    ))
                }
                </div>
                <div>
                    {
                        update.postVideo.map((video, key)=>(
                            <iframe 
                                class="youtubeVideo"
                                key={key}
                                width="860" 
                                height="615" 
                                src={video}
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        ))
                    }
                </div>
                
                
                <Comment/>
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