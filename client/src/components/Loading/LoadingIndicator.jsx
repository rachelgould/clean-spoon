import React from 'react';

const LoadingIndicator = (props) => {
  return(
  <div className="loading-indicator">
    <h1>fire up the oven and let's get cookin'</h1>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
  )
}

export default LoadingIndicator;