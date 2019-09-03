import React from 'react';
import Navbar from './Navbar';
import PageIndex from '../pages/index';
import { Container } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <PageIndex />
        </Container>
      </div>
    )
  }
}

export default App;
