import React from 'react'
import Typical from 'react-typical'
import { Container } from 'reactstrap';

class Welcome extends React.Component {
  render () {
    return (
        <div>
            <Container>
        <h1 className="align-item-center">
      <Typical
        steps={['', 1000, 'Welcome to Nishifuna Back Alley Collective.', 1000]}
        
        wrapper="p"
      />
      </h1>
      <h3>
      <Typical
        steps={[3500,'Ready to explore?',2000,'Ready to explore?Click on menu below!', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </h3>
      </Container>
      </div>
    )
  }
}

export default Welcome;