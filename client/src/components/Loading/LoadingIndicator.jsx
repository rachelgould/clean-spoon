import React, { useState } from 'react';

const LoadingIndicator = (props) => {
  return(
  <div className="loading-indicator">
    <h3>Loading {props.page}</h3>
    <iframe src="https://gifer.com/embed/767x" allowFullScreen></iframe>
  </div>
  )
}

export default LoadingIndicator;