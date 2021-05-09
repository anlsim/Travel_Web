import React from 'react';
import Map from '../../components/Map/Map';
import PostList from '../../components/PostList/PostList'
import PostData from '../../components/PostList/PostData';
import CounterBar from '../../components/CounterBar/CounterBar';

const HomePage = () => (
    <>
    <div className='row'>
        <div className='col-8'> <Map /> </div>
        <div className='col-4'> <PostList updates = {PostData}/></div>
        <CounterBar />
    </div>
   
    </>
    

);

export default HomePage;