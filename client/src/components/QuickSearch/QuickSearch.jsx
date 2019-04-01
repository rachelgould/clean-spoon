import React from 'react';
import './QuickSearch.css';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';

const QuickSearch = (props) => {
    return (
      <Row>
        <Col sm="4" className="search">
          <Card body >
            <CardTitle className="CardTitle">Quick Search</CardTitle>
            <Button color="primary" size="sm">Find Recipes Now</Button>{' '}
          </Card>
        </Col>
      </Row>
    );
  };

export default QuickSearch;