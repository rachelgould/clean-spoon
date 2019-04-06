import React, { useState } from 'react';

function LikeButton(props) {
  let { recipe } = props
  const [liked, setLiked] = useState(false);
  if (liked) {
    return (<i className="material-icons md-48">star</i>)
  } else {
    return (<i className="material-icons md-48">star_border</i>)
  }
  ;
}

export default LikeButton;