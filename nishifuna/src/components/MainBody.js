import React from 'react';
import { 
        Container, 
        Row, 
        Col, 
        Media, 
 
    } from 'reactstrap';


import Menu from './Menu';


function MainBody(props) {
    return (
        <React.Fragment>
            <Container className="mx">
                <Row>
                    <Col>
                    <Menu />
                       
                            <Media className='align-item-center mx-auto d-block' object src={`${process.env.PUBLIC_URL}/img/nbclogo.png`} width="50%" alt="Master Neko Chef" />
               
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
    
}


export default MainBody;