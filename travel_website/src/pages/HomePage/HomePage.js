import React from 'react';
import Map from '../../components/Map/Map';
import PostList from '../../components/PostList/PostList'
import PostData from '../../components/PostList/PostData';
import CounterBar from '../../components/CounterBar/CounterBar';
import './HomePage.scss';


const HomePage = () => (
    <>
    <div className="homeDiv">
        <div className='row rowHome'>
            <div className='col-9'> <Map /> </div>
            <div className='col'> <PostList className='updates' updates = {PostData.slice(0,4)}/></div>
        </div>
        <div className='counterBar'>
        <CounterBar />
        </div>
    </div>
   
   
    </>
    

);

export default HomePage;