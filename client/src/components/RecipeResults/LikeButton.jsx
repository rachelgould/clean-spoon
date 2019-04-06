import React, { useState } from 'react';

function LikeButton(props) {
  let { recipe } = props
  const [liked, setLiked] = useState(false);
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover)
  }
  if (hover && liked) {
    return (<i className="material-icons md-48" onMouseOver={toggleHover} onMouseOut={toggleHover}>star_border</i>)
  }
  if (hover && !liked) {
    return (<i className="material-icons md-48" onMouseOver={toggleHover} onMouseOut={toggleHover}>star</i>)
  }
  if (!hover && liked) {
    return (<i className="material-icons md-48" onMouseOver={toggleHover} onMouseOut={toggleHover}>star</i>)
  }
  if (!hover && !liked) {
    return (<i className="material-icons md-48" onMouseOver={toggleHover} onMouseOut={toggleHover}>star_border</i>)
  }
}

export default LikeButton;