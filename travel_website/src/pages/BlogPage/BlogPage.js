import React from 'react';

import UpdatesList from '../../components/UpdatesList/UpdatesList';
import updateContent from '../../components/Updates-content/Update-content';
import Hero from '../../components/Hero/Hero';

const UpdatesListPage = () => (
    <>
     <Hero title={'Blog'}/>
    <UpdatesList updates = {updateContent}/>
    </>

);

export default UpdatesListPage;