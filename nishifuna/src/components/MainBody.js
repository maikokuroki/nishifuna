import React,{useState} from 'react';
import { 
        Card, 
        CardBody,
        Image, 
        Container, 
        Row, 
        Col, 
        Button, 
        CardImg, 
        CardTitle, 
        CardColumns, 
        CardSubtitle, 
        CardText, 
        Media, 
        Carousel,
        CarouselItem,
        CarouselControl,
        CarouselIndicators,
        CarouselCaption,
        Jumbotron
    } from 'reactstrap';

import { Play } from '../shared/play';
import { Restaurant } from '../shared/eat';
import { render } from '@testing-library/react';
import { Images } from '../shared/images'

const items = [
    {
      src: "/img/kakuyacoffee.jpg",
      altText: 'Hip Coffee Shop',
      caption: 'Kakuya Coffee Stand'
    },
    {
      src: "/img/cannes.jpg",
      altText: 'Cozy Italian Restaurant',
      caption: 'Cannnes'
    },
    {
      src: '/img/funabashibeer.jpeg',
      altText: 'One and Only local brewery',
      caption: 'Funabashi Brewery'
    }
  ];

function MainBody(props) {

const images = {Images};
    return (
        <React.Fragment>
           
            <Container>
                <Row>
                    <Col>
                    <Media className='align-item-center mx-auto d-block' object src={`${process.env.PUBLIC_URL}/img/nbclogo.png`} width="50%" alt="Master Neko Chef" />
                        
                    </Col>
                </Row>
            </Container>

            
                <MainCarousel />
                


        </React.Fragment>
    )
    
}

function MainCard(props){
    return(
        <Card>
        <h1>Nishifuna Back alley collective</h1>
                            <h3>西船裏路地研究所</h3>
                            <p>One of the skirt town of Tokyo, Nishi-funabashi. There are so many hidden alley and winding street that you have not even thought about walking through. Lots of restaurant, cafe and people gather in those tiny alley. This page will take you there…</p>
        </Card>
    );
}

const MainCarousel = (props) => {
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
          <img className='align-item-center img-thumbnail mx-auto d-block' src={item.src} alt={item.altText} width="60%"/>
          <CarouselCaption className="CarouselCaption" captionText={item.altText} captionHeader={item.caption} />
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
  

export default MainBody;