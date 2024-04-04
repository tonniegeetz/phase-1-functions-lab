// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {
  const distance = Math.abs(pickUpLocation - 42);
  return distance;
}

function distanceFromHqInFeet(pickUpLocation) {
  // const distance = distanceFromHqInBlocks(pickUpLocation);
  // const inFeet = distance * 264;
  // return inFeet;

  //refactoring
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
  const distance = Math.abs((destination - start) * 264);
  return distance;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
