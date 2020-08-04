import React from 'react';
import { Row, Col } from 'reactstrap';

import Eat from './EatComponent';
import Drink from './DrinkComponent';
import Fun from './PlayComponent';
import About from './AboutComponent';

function Menu() {
    return (
        <div>
            <Row>
                <Col><Eat /></Col>
                <Col><Drink /></Col>
                <Col><Fun /></Col>
                <Col><About /></Col>
            </Row>
            
        </div>
    )
}

export default Menu;