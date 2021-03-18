import React from 'react';
import updateContent from '../components/updateContent';
import UpdatesList from '../components/UpdatesListPage';
import NotFoundPage from './Errors/NotFoundPage';

const UpdatePage = ({match}) => {
    const stateName = match.params.stateName;
    const update = updateContent.find(update => update.stateName === stateName);
    if(!update) return <NotFoundPage />
    const otherUpdates = updateContent.filter(update => update.stateName !== stateName);
    return(
        <React.Fragment>

        <h1>{update.stateName}</h1>
        <h2>{update.title} </h2>
        {update.content.map((paragraph, key)=>(
            <p key ={key}> {paragraph}</p>
        ))}
        <h3>Other updates of our trips:</h3>
        <UpdatesList updates = {otherUpdates}/>
        </React.Fragment>

    );
}
    


export default UpdatePage;