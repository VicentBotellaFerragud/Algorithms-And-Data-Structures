function conditionsExplanation() {

    const explanationDiv = document.getElementById("conditionsExplanation");

    explanationDiv.innerHTML = `
        The function that manages this exercise takes the two values entered (if no value is entered in any of the inputs the 
        function considers it as "0"), compares them, and always returns the smaller value in the first position. If the values are 
        equal, the function returns them in the same order as they were entered.
    `;

}