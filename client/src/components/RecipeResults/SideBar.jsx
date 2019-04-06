import React, { useState } from 'react';
import { Button, Card, CardHeader, CardBody, CardText, CardFooter } from 'reactstrap';

function SideBar(props) {
  const [show, setShow] = useState(false);

  const expand = () => {
    setShow(true)
  }

  if (show) {
    return (
    <div className="sidebar">
      <Card>
        <CardHeader tag="h3">Filter Search</CardHeader>
        <CardBody>
          slkfj
          <hr />
          <Button color="danger">Go somewhere</Button>
        </CardBody>
      </Card>
    </div>
    )
  }
  return (<Button className="hidden-filters-icon" onClick={expand}>Filter Results <i className="material-icons md-48">filter_list</i></Button>)
}

export default SideBar;