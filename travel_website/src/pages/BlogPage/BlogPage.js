import React from 'react';


import Hero from '../../components/Hero/Hero';
import SideMenu from '../../components/SideMenu/SideMenu';
import PostList from '../../components/PostList/PostList';
import PostData from '../../components/PostList/PostData';
import './BlogPage.scss'

const BlogPage = () => (
    <>
    <Hero title = {'Blog'}/>
    <SideMenu />
    <div className="blogs">
    <PostList updates = {PostData}/>
    </div>
    
    </>

);


export default BlogPage;