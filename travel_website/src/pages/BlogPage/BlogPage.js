import React from 'react';

import UpdatesList from '../../components/UpdatesList/UpdatesList';
import updateContent from '../../components/Updates-content/Update-content';

const UpdatesListPage = () => (
    <>

    <h1>Trip Updates</h1>
    <UpdatesList updates = {updateContent}/>
    </>

);

export default UpdatesListPage;