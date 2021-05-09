import React from 'react';


import Hero from '../../components/Hero/Hero';
import SideMenu from '../../components/SideMenu/SideMenu';
import PostList from '../../components/PostList/PostList';
import PostData from '../../components/PostList/PostData';

const BlogPage = () => (
    <>
    <Hero title = {'Blog'}/>
    <SideMenu />
    <PostList updates = {PostData}/>
    </>

);


export default BlogPage;