import React from 'react';

import UpdatesList from './UpdatesList';
import updateContent from './updateContent';

const UpdatesListPage = () => (
    <>

    <h1>Trip Updates</h1>
    <UpdatesList updates = {updateContent}/>
    </>

);

export default UpdatesListPage;