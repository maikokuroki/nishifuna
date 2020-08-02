import React, { useState } from 'react'
import {Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Collapse, CardBody, Card, Media} from 'reactstrap';

import { Images } from '../shared/images';

function Footer() {
    return (
        <React.Fragment>
            
            <Container>
                <Row>
                    <Col id="aboutus">
                        <h2><i className="fa fa-angle-double-right small" /> ABOUT US <i className="fa fa-angle-double-left small" /></h2>
                    </Col>
                </Row>
                <Row>
                    
                    <Col id="accordion">
                        <AboutAuther />    
                    </Col>
                    <Col id="social">
                        <h4>Social
                            <a class="btn btn-social-icon btn-instagram btn-" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                            <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"> <i class="fa fa-facebook"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"> <i class="fa fa-twitter"></i></a>
                            <a class="btn btn-social-icon btn-google" href="http://youtube.com/"> <i class="fa fa-youtube"></i></a>
                        </h4>
                    </Col>
                    <Col>
                        <SubscribeModal />
                    </Col>
                </Row>
            </Container>


    
  
        </React.Fragment>
        
    )
}

function SubscribeModal(props){
    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

      function clickSubscription(){
          return(
          alert("Thank you for your subscription!")
          )
      }

    
    
      return (
        <div>
          <Button color="info" onClick={toggle}>Subscribe</Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}><i className="fa fa-envelope" /> Join our montly news letter.</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">What's your email?</Label>
                        <Input type="email" name="email" id="email" placeholder="Your Email adress" />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={clickSubscription}>Add me!</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    

function AboutAuther(props){
    const [isOpen, setIsOpen] = useState(false);
      
    const toggle = () => setIsOpen(!isOpen);

    const image = {Images};
      
    return (
          <div>
            <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>About Auther</Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                <Media src={`${process.env.PUBLIC_URL}/img/maiko1.jpeg`} width="40%" />
                Hi, my name is Maiko.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
}


export default Footer;