import React, { useState } from 'react';

const LoadingIndicator = (props) => {
  return(
  <div className="loading-indicator">
    {/* <h3>Loading {props.page}</h3> */}
    <img src="https://media.giphy.com/media/3o7TKUGccxlaQqdgRO/source.gif"></img>
  </div>
  )
}

export default LoadingIndicator;