function distanceFromHqInBlocks(location) {
    const headquarters = 42;
    return Math.abs(location - headquarters);
}
function distanceFromHqInFeet(location) {
    const blockInFeet = 264; // 1 block = 264 feet
    const headquarters = 42;
    return Math.abs(location - headquarters) * blockInFeet;
}
function distanceTravelledInFeet(start, end) {
    const blockInFeet = 264; // 1 block = 264 feet
    return Math.abs(end - start) * blockInFeet;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
  
    const currentTime = new Date().getHours();
    if (currentTime >= 20 || currentTime < 6) {
      fare += 0.5 * fare;
    }
  
    return fare;
}
  