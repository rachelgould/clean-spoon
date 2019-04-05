import React, { useState } from 'react';
import { Button } from 'reactstrap';

function SideBar(props) {
  const [show, setShow] = useState(props.show);

  return (
    <div className="sidebar"><h2>!!!!!!!!!Sidebar...</h2></div>
  )
}

export default SideBar;