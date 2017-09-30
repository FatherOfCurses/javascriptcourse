// Error handling functions

function nonNumericEntry(startingNumber, endingNumber, stepValue) {
    //TODO: write this evaluation
}

function stepValueIsNotPositive(stepValue) {
    if(stepValue <=0) {
        alert("Please enter a positive number in the Step field.")
    }
}

function endingNumberLower(startingNumber, endingNumber) {
    if(endingNumber <= startingNumber) {
        alert("Please enter an Ending Number greater in value than the Starting Number.")
    }
}

// write even number to array
function writeNumberToArray(startingNumber, endingNumber, stepValue) {
    var numberSet = new Array();
    if(startingNumber % 2 != 0) {
        numberSet[0] = startingNumber + stepValue;
    }
    numberSet[0] = startingNumber;
    var runningSum = startingNumber + stepValue;
    do {
        if(runningSum % 2 !=0) {
            i++;
        } else {
            numberSet[i] = runningSum;
            runningSum += stepValue;
            i++;
        } while (runningSum <= endingNumber);
    }
    return numberSet;
}

