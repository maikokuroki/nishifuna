import React,{useState} from 'react';
import {
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Media
} from 'reactstrap';

import { Images } from '../shared/images';

const icon = {src: "/img/nbcicon.png"}

function Header(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const image = {Images};
    return(
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><Media src={`${process.env.PUBLIC_URL}/img/nbcicon.png`} width="20%" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/EatDrinkComponet/"><i className="fa fa-coffee fa-lg" /> EAT&DRINK</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/PlayComponents/"><i className="fa fa-microphone fa-lg" /> PLAY</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/AboutComponents/"><i className="fa fa-female fa-lg" /> ABOUT</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
        
    </div>
    );

}

export default Header;