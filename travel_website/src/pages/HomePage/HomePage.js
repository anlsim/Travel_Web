import {useEffect, useState} from 'react';
import axios from "axios";
import PostList from '../../components/PostList/PostList';
import Map from '../../components/Map/Map';
import CounterBar from '../../components/CounterBar/CounterBar';
import './HomePage.scss';

export default function HomePage() {
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPost = async ()=> {
            const res = await axios.get("/posts");
            setPosts(res.data);
        }
        fetchPost();
    }, [])

    const citiesList = posts.map(obj => obj.city);

    return (
        <div className="homeDiv">
            <div className='rowHome'>
                <div className='mapDiv'> 
                    <Map/> 
                </div>
                <div className='col updatesDiv'> 
                    <PostList className='updateContainer' updates = {posts.reverse().slice(0,3)}/>
                </div>
                
            </div>
            <div className='counterBar'>
            <CounterBar cities = {citiesList}/>
            </div>
        </div>
    )
}


