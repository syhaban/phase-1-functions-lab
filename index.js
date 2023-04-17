// Code your solution in this file!
const start = 42;
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - start)
};

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet)*264
};

function distanceTravelledInFeet(distance, destination){
    if (destination > distance){
        return ((destination - distance)*264)
    } else {
        return ((distance-destination)*264)
    };
};

function calculatesFarePrice (distance, destination){
    let travel = distanceTravelledInFeet (distance, destination)
    if (travel <= 400){
        return 0
    }
    if (travel >= 400 && travel <= 2000){
        return (travel - 400) * 0.02
    } else if (travel >= 2000 && travel <= 2500){
        return 25
    } else if (travel > 2500){
        return "cannot travel that far"
    }
}