import React, { useState } from 'react';
import {CardBody, Card, CardImg, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
   CardFooter} from 'reactstrap';

import { Restaurant } from '../shared/eat';


const items = Restaurant;


//  Modal //

const EatModal = (props) => {
    const {
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    return (
      <div>
        <Button outline color="info" onClick={toggle}>EAT</Button> 
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Restaurants</ModalHeader>
          <ModalBody>
            <EatCarousel />
          </ModalBody>
         
        </Modal>
      </div>
    );
  }
  
  const EatCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
         <Card>
            <CardImg width="50%" src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle className='CardTitle fluid'>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
            <Button href={item.url} target="_blank" block>More Info</Button>
            </CardBody>
            <CardFooter>
            
            </CardFooter>
            </Card>
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }

function Eat(){
    
    
        return (
            <div>
                <EatModal />
            </div>
            
            
        );
}

export default Eat;
