import React,{useState} from 'react';
import {
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media
} from 'reactstrap';

import { Images } from '../shared/images';
import Eat from './EatComponent';
import Venue from './PlayComponent';
import Footer from './FooterComponent';

const icon = {src: "/img/nbcicon.png"}

function Header(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const image = {Images};
    return(
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/" to="/home"><Media src={`${process.env.PUBLIC_URL}/img/nbcicon.png`} width="20%" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/Eat" to="/eat"><i className="fa fa-coffee fa-lg" /> EAT</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Drink" to="/drink"><i className="fa fa-coffee fa-lg" /> DRINK</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Play" to="/play"><i className="fa fa-microphone fa-lg" /> FUN</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/About" to="/about"><i className="fa fa-female fa-lg" /> ABOUT</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
        
    </div>
    );

}

export default Header;