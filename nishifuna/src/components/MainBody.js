import React,{useState} from 'react';
import { Route, Switch,} from 'react-router'
import { 
        Card, 
        Container, 
        Row, 
        Col, 
        Media, 
        Carousel,
        CarouselItem,
        CarouselControl,
        CarouselIndicators,
        CarouselCaption,
        Image
    } from 'reactstrap';

import Eat from './EatComponent';
import Drink from './DrinkComponent';  
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Fun from './PlayComponent';    
import Router from './RouterComponent';

import { Images } from '../shared/images'



function MainBody(props) {

const images = {Images};
    return (
        <React.Fragment>
   
            <Container>
                <Row>
                    <Col>
                    <Media className='align-item-center mx-auto d-block' object src={`${process.env.PUBLIC_URL}/img/nbclogo.png`} width="50%" alt="Master Neko Chef" />
                        
                    </Col>
                </Row>
            </Container>

            <Eat />
            <Drink />
            <Fun />
          
                


        </React.Fragment>
    )
    
}

function MainCard(props){
    return(
        <Card>
        <h1>Nishifuna Back alley collective</h1>
                            <h3>西船裏路地研究所</h3>
                            <p>One of the skirt town of Tokyo, Nishi-funabashi. There are so many hidden alley and winding street that you have not even thought about walking through. Lots of restaurant, cafe and people gather in those tiny alley. This page will take you there…</p>
        </Card>
    );
}



export default MainBody;