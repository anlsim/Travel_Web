import React from 'react';
import Map from '../../components/Map/Map';
import UpdatesList from '../../components/UpdatesList/UpdatesList';
import updateContent from '../../components/Updates-content/Update-content';

const HomePage = () => (
    <>
    <div className='row'>
        <div className='col-8'> <Map /> </div>
        <div className='col-4'> <UpdatesList updates = {updateContent}/></div>
    </div>
   
    </>
    

);

export default HomePage;