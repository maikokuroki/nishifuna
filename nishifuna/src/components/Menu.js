import React from 'react';
import { Row } from 'reactstrap';

import Eat from './EatComponent';
import Drink from './DrinkComponent';
import Fun from './PlayComponent';
import About from './AboutComponent';

function Menu() {
    return (
        <div>
            <Row>
                    <Eat />{' '}
                    <Drink />{' '}
                    <Fun />{' '}
                    <About />
            </Row>
            
        </div>
    )
}

export default Menu;