import {useEffect, useState} from 'react';
import axios from "axios";
import Hero from '../../components/Hero/Hero';
// import SideMenu from '../../components/SideMenu/SideMenu';
import PostList from '../../components/PostList/PostList';
import './BlogPage.scss'

export default function BlogPage() {
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPost = async ()=> {
            const res = await axios.get("/posts");
            setPosts(res.data);
        }
        fetchPost();
    }, [])
    
    return (
    <>
        <Hero title = {'BLOG'}/>
        {/* <SideMenu /> */}
        <div className="blogs">
        <PostList updates = {posts.reverse()}/>
        </div>
    
    </>
    )
}



// const BlogPage = () => (
//     <>
//     <Hero title = {'Blog'}/>
//     {/* <SideMenu /> */}
//     <div className="blogs">
//     <PostList updates = {PostData}/>
//     </div>
    
//     </>

// );


// export default BlogPage;