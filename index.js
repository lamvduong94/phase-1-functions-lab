function distanceFromHqInBlocks(num) {
    return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
    return Math.abs((num - 42) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
    const travelled = Math.abs((start - destination) * 264);
    if (travelled <= 400) {
        return 0;
    } else if (travelled > 400 && travelled <= 2000) {
        return (travelled - 400) * 0.02;
    } else if (travelled > 2000 && travelled <= 2500) {
        return 25;
    } else if (travelled > 2500) {
        return 'cannot travel that far';
    }
}