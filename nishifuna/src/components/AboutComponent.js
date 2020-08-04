import React, { useState } from 'react';
import {CardBody, Card, CardImg, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody,CardFooter} from 'reactstrap';



//  Modal //

const AboutModal = (props) => {
    
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    return (
      <div>
        <Button outline color="info" onClick={toggle}>ABOUT</Button>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>About an author</ModalHeader>
          <ModalBody>
            <Card>
                <CardImg width="50%" src={`${process.env.PUBLIC_URL}/img/maiko1.jpeg`} alt="Maiko's picture" />
                <CardBody>
                
                <CardText>Hi, My name is Maiko.<br />
                  I am currently taking Full stack coding boot camp. This is my React project and I want to show you my hometown in Japan.<br />
                   I hope you enjoy it. Thank you for visiting!
                </CardText>
                </CardBody>
                <CardFooter>
                
                </CardFooter>
            </Card>
          </ModalBody>
         
        </Modal>
      </div>
    );
  }
  




function About() {
    return (
        <div>
            <AboutModal />
        </div>
    )
}

export default About;
