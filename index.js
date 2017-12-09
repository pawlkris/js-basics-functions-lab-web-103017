// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  } else if (block < 42) {
    return 42 - block
  }
  else {
    return 0
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(x, y) {
  if (x > y) {
    return (x-y) * 264
  } else if (y > x) {
    return (y-x) * 264
  } else {
    return 0
  }
}


function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0
  } else if (400 < distance && distance < 2000) {
    return distance * 2 / 100
  } else if (2000 < distance && distance < 2500) {
    return 25
  } else {
    {return "cannot travel that far"}
  }
}
