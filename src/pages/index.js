import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { Row, Col } from 'reactstrap';

class PageIndex extends React.Component {
  render() {
    const classTop = {'padding-top': '50px'};
    return (
      <div>
        <Row>
          <Col>
            <Form />
            <div style={classTop}>
              <List/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PageIndex;
