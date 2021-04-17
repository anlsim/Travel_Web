import React from 'react';
import {Link } from 'react-router-dom';

const UpdatesList = ({updates}) => (
    <>
    <div className="card-columns">
        
        {updates.map((update, key )=>(
            <div className="card" >
                <div className="card-body">
                <Link key = {key} to = {`/update/${update.stateName}`}>
                  <h3 className="card-title">{update.title}</h3>  
                </Link>
                </div>
            </div>   
        ))
        }
           
    </div>
   
    </>
);

export default UpdatesList;