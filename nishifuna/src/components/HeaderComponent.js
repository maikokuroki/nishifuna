import React from 'react';
import {
  Col,  
  NavbarBrand,
  Media,
  Jumbotron,
  Row,
} from 'reactstrap';


import Welcome from './WelcomeAnimation';


function Header(props){
    
    return(
    <div>
        <Jumbotron className="fluid mx-0" id="jumbotron">
            <Row>
            <NavbarBrand href="/" to="/home"><Media src={`${process.env.PUBLIC_URL}/img/nbcicon.png`} width="20%" /></NavbarBrand>
            <Welcome />
            </Row>
        </Jumbotron>    
    </div>
    );

}

export default Header;