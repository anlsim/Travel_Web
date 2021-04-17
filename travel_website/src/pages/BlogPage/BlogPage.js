import React from 'react';

import UpdatesList from '../../components/UpdatesList/UpdatesList';
import updateContent from '../../components/Updates-content/Update-content';
import Hero from '../../components/Hero/Hero';
import SideMenu from '../../components/SideMenu/SideMenu'

const UpdatesListPage = () => (
    <>
    <Hero title={'Blog'}/>
    <SideMenu />
    <UpdatesList updates = {updateContent}/>
    
    </>

);

export default UpdatesListPage;