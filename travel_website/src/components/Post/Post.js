import {useEffect, useState} from 'react';
import axios from "axios";
import './Post.scss';
import PostList from "../PostList/PostList"
import NotFoundPage from "../../pages/ErrorsPage/NotFoundPage"
import Comment from '../Comment/Comment'


const Post = ({ match }) => {
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPost = async ()=> {
            const res = await axios.get("/posts");
            setPosts(res.data);
        }
        fetchPost();
    }, [])
    const updateId = match.params.updateId;
    const update = posts.find(update => update._id === updateId);
    if (!update) return <NotFoundPage />
    const otherUpdates = posts.filter(update => update._id !== updateId);

    return (
        <>
        <div className="row postContainer">
            <div className="col-8 postDiv">
                <h1>{update.title}</h1>
                <h5>{update.city}, {update.state}</h5>
                <p>{new Date(update.createdAt).toDateString()}</p>

                <p className="postDiv-postDescription">{update.content}</p>

                {
                    update.photos.map((img, key) => (
                        <img className="postDiv-postImage" src={img} alt={key}></img>
                    ))
                }
                <div className="postDiv-videoDiv">
                    {
                    update.video !== "" &&
                        <iframe 
                            width="560"
                            height="315"
                            src={update.video}
                            title="YouTube video player" 
                            
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            >
                        </iframe>
                    }
                </div>
                <div className="postDiv-commentForm">
                    <Comment/>
                </div>
                <div>
                    <hr/>
                <h3>Comments:</h3>
                </div>
            </div>
            
            <div className="col updateList">
                <h3>Other Updates:</h3>
                <PostList updates = {otherUpdates.reverse().slice(0,6)} />
                
            </div>
            
            
        </div>

        
        </>
    );
}

export default Post;