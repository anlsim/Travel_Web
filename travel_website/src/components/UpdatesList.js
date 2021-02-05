import React from 'react';
import {Link } from 'react-router-dom';
const UpdatesList = ({updates}) => (
    <>
    {updates.map((update, key )=>(
        <Link key = {key} to = {`/update/${update.stateName}`}>
            <h3>{update.title}</h3>  
            <p>{update.content[0].substring(0, 150)}...</p>
        </Link>
      
    ))}
    </>
);

export default UpdatesList;