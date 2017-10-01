function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["evenStepper"].elements.length;
        loopCounter++) {
        if (document.forms["evenStepper"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1) {

            document.forms["evenStepper"].elements[loopCounter]
                .parentElement.className = "form-group";
        }
    }
}

function validateItems() {
    clearErrors();
    var startingNumber = Number(document.forms["evenStepper"]["startingNumber"].value);
    var endingNumber = Number(document.forms["evenStepper"]["endingNumber"].value);
    var stepValue = Number(document.forms["evenStepper"]["stepValue"].value);

    if (startingNumber == "" || isNaN(startingNumber)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["evenStepper"]["startingNumber"]
            .parentElement.className = "form-group has-error";
        document.forms["evenStepper"]["startingNumber"].focus();
        return false;
    }

    if (endingNumber == "" || isNaN(endingNumber)) {
        alert("Ending Number must be filled in with a number.");
        document.forms["evenStepper"]["endingNumber"]
            .parentElement.className = "form-group has-error";
        document.forms["evenStepper"]["endingNumber"].focus();
        return false;
    }

    if (stepValue == "" || isNaN(stepValue)) {
        alert("Step Value must be filled in with a number.");
        document.forms["evenStepper"]["stepValue"]
            .parentElement.className = "form-group has-error";
        document.forms["evenStepper"]["stepValue"].focus();
        return false;
    }

    if (stepValue <= 0) {
        alert("Please enter a positive number in the Step field.");
        document.forms["evenStepper"]["stepValue"]
            .parentElement.className = "form-group has-error";
        document.forms["evenStepper"]["stepValue"].focus();
        return false;
    }

    if (endingNumber < startingNumber) {
        alert("Please enter an Ending Number greater in value than the Starting Number. Starting number " + startingNumber + " Ending number " + endingNumber);
        document.forms["evenStepper"]["endingNumber"]
            .parentElement.className = "form-group has-error";
        document.forms["evenStepper"]["endingNumber"].focus();
        return false;
    }

    // Populate array and provide output
    var numberSet = new Array();
    if (startingNumber % 2 != 0) {
        numberSet[0] = startingNumber + stepValue;
    } else {
        numberSet[0] = startingNumber;
    }
    var runningSum = numberSet[0] + stepValue;
    var i = 1;

    do {
        if (runningSum % 2 != 0) {
            runningSum += stepValue;
            i++;
        } else {
            numberSet.push(runningSum);
            runningSum += stepValue;
            i++;
        }
    }
    while (runningSum < endingNumber);

    document.getElementById("leadInSentence").innerText = "Here are the even numbers between " + startingNumber + " and " + endingNumber + " by " + stepValue + "'s:";
    var evenOutputText = "<ul>";
    for (var outputLoop = 0; outputLoop < numberSet.length; outputLoop ++) {
        evenOutputText += "<li>" + numberSet[outputLoop] + "</li>";
    }
    evenOutputText += "</ul>"
    document.getElementById("evenOutput").innerHTML = evenOutputText
    return false;
}