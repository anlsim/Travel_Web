import React from 'react';
import updateContent from './updateContent';

const UpdatePage = ({match}) => {
    const stateName = match.params.stateName;
    const update = updateContent.find(update => update.stateName === stateName);
    if(!update) return <h1>There's no update about the trip</h1>
    return(
        <React.Fragment>

        <h1>{update.stateName}</h1>
        <h2>{update.title} </h2>
        {update.content.map((paragraph, key)=>(
            <p key ={key}> {paragraph}</p>
        ))}
        </React.Fragment>

    );
}
    


export default UpdatePage;