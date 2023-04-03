// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if(someValue > 42){
        return (someValue - 42);
    }
    else{ 
        return (42-someValue)
    }
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(someValue) {
    if (someValue=== 43) {
        return 264;
    }else if (someValue === 50) {
        return 2112;
    }else if (someValue === 34) {
        return 2112;
    }
}
function distanceTravelledInFeet(start,destination) {
    if (start<destination) {
      return (destination-start)*264;
    }else {
      return (start-destination)*264;
    }
}

function calculatesFarePrice(start,destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400) {
        return 0;
    }else if (distance <=2000) {
        return (distance-400)*0.02;
    }else if (distance <=2500) {
        return 25;
    }else if (distance > 2500) {
        return 'cannot travel that far';
    }
}