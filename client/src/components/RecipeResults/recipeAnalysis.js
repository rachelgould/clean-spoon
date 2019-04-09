const calcPrepTime = (prepTime) => {
  let prepTimeInMins = Math.ceil(prepTime/60);
  if (prepTimeInMins > 60) {
    let hours = Math.floor(prepTimeInMins / 60)
    let text = " hour and "
    if (hours > 1) {
      text = " hours and "
    }
    return hours + text + (prepTimeInMins % 60) + " mins"
  }
  return prepTimeInMins + " mins"
}

export {
  calcPrepTime
}