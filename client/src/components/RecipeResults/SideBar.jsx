import React, { useState } from 'react';
import { Button, Card, CardHeader, CardBody } from 'reactstrap';
import FilterForm from './FilterForm';

function SideBar(props) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show)
  }

  if (show) {
    return (
    <div className="sidebar">
      <Card>
        <CardHeader tag="h3">
        Filter Search 
        <i className="material-icons md-48" onClick={toggleShow}>close</i>
        </CardHeader>
        <CardBody>
          <FilterForm />
        </CardBody>
      </Card>
    </div>
    )
  }
  return (<Button className="hidden-filters-icon" onClick={toggleShow}>Filter Results <i className="material-icons md-48">filter_list</i></Button>)
}

export default SideBar;