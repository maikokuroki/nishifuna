import React, { Component } from 'react';
import {CardDeck,CardGroup, CardBody, Card, CardImg, CardTitle, CardText, Button, Container, Row, Col} from 'reactstrap';

import { Restaurant } from '../shared/eat';


const restaurant = Restaurant;

function EatDrink({name, description, image, url}){
    
        return (
            <React.Fragment>
                <CardDeck>
                {
                    restaurant.map(list => {
                        return(
                            
                                            <Card>
                                                <CardImg width="50%" src={list.image} alt={list.name} />
                                                <CardBody>
                                                <CardTitle className='CardTitle fluid'>{list.name}</CardTitle>
                                                <CardText>{list.description}</CardText>
                                                <Button>More Info</Button>
                                                </CardBody>
                                            </Card>
                                       
                        )
                    })
                }
             </CardDeck>
             </React.Fragment>
                           
        );
}

export default EatDrink;
