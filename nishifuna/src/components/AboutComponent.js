import React from 'react'
import { Card, CardBody, Media } from 'reactstrap';
import { Images } from '../shared/images';

function About() {
    return (
        <div>
             <h2><i className="fa fa-angle-double-right small" /> ABOUT US <i className="fa fa-angle-double-left small" /></h2>
            <Card>
                <CardBody>
                <Media src={`${process.env.PUBLIC_URL}/img/maiko1.jpeg`} width="40%" />
                Hi, my name is Maiko.
                </CardBody>
              </Card>
        </div>
    )
}

export default About;
