import React, { useState } from 'react';
import { Button } from 'reactstrap';

function SideBar(props) {
  const [show, setShow] = useState(false);

  const expand = () => {
    setShow(true)
  }

  if (!show) {
    return (<div className="hidden-filters-icon" onClick={expand}>Filter Results <i className="material-icons md-48">filter_list</i></div>)
  }
  return (<div className="sidebar"><h2>!!!!!!!!!Sidebar...</h2></div>)
}

export default SideBar;