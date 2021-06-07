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
                <div>
                <h1>{update.title}</h1>
                <p>{new Date(update.createdAt).toDateString()}</p>
                <p className="postDescriotion">{update.content}</p>
            
                {
                    update.photos.map((img, key) => (
                        <img className="postImage" src={img} alt={key}></img>
                    ))
                }
                </div>
                <div>
                    {
                        update.videos.map((video, key)=>(
                            <iframe 
                                className="youtubeVideo"
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