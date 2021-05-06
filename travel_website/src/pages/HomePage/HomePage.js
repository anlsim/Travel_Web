import React from 'react';
import Map from '../../components/Map/Map';
import UpdatesList from '../../components/UpdatesList/UpdatesList';
import updateContent from '../../components/Updates-content/Update-content';
import CounterBar from '../../components/CounterBar/CounterBar';

const HomePage = () => (
    <>
    <div className='row'>
        <div className='col-8'> <Map /> </div>
        <div className='col-4'> <UpdatesList updates = {updateContent}/></div>
        <CounterBar />
    </div>
   
    </>
    

);

export default HomePage;