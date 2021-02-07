import React from 'react';
import {Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns'

const UpdatesList = ({updates}) => (
    <>
    <CardColumns>
        
            {updates.map((update, key )=>(
                <Card>
                <Card.Body>
                 <Link key = {key} to = {`/update/${update.stateName}`}>
                  <Card.Title>{update.title}</Card.Title>  
                  <Card.Text>{update.content[0].substring(0, 150)}...</Card.Text>
        </Link>
        </Card.Body>
        </Card>   
      
    ))}
           
    </CardColumns>
   
    </>
);

export default UpdatesList;