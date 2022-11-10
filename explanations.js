function conditionsExplanation() {

    const explanationDiv = document.getElementById("conditionsExplanation");

    explanationDiv.innerHTML = `
        The function that manages this exercise takes the two values entered (if no value is entered in any of the inputs the 
        function considers it as "0"), compares them, and always returns the smaller value in the first position. If the values are 
        equal, the function returns them in the same order as they were entered.
    `;

}

function loopsExplanation() {

    const explanationDiv = document.getElementById("loopsExplanation");

    explanationDiv.innerHTML = `
        There is an event tied to the space key. This means in this case that a function is triggered when this key is pressed. 
        This function is responsible for displaying the hidden message. But then, why does this event only work if the "START" button 
        is previously clicked? The answer is simple. The event tied to the space key is always present (even if the "START" button
        is not pressed), however, the function that is triggered as a consequence only performs its logic as long as a 
        variable called "activeGame" is true. This, by default, has a value of "false", and only when the "START" button is pressed it 
        changes its value to "true". For this reason the space "detonator" only works if the "START" button is previously pressed. 
        The "FINISH" button clears the hidden message and gives the "activeGame" variable its original value back.
    `;

}

function oOfNExplanation() {

    const explanationDiv = document.getElementById("oOfNExplanation");

    explanationDiv.innerHTML = `
        The function that searches for the type of pizza that corresponds to the entered number iterates through all the elements of 
        the pizza types list and does not stop until it reaches the end of it; so the number of iterations of the function is the 
        number of elements contained in the list (10 in this case). Is this really necessary? Not really, the function could stop 
        iterating the pizza types list as soon as it finds a match for the entered type of pizza. However, in general, since it is not 
        possible to know at the beginning in which position is the desired element, it is said that to find an element "x" on a list 
        of "n" elements, the function in charge of doing this task has to iterate this list "n" times.
    `;

}

function oOfNSquareExplanation() {

    const explanationDiv = document.getElementById("oOfNSquareExplanation");

    explanationDiv.innerHTML = `
        To find duplicates, the function that does this has to compare each element of the pizza types list with all the others except 
        itself. That is to say, for a list of 10 elements (like the one in this case), the function has to iterate 
        the list 1 + 9 (all the elements minus the element to compare) times as many times as elements the list has. That is why it 
        is said that, to compare the elements of a list of "n" elements, the function responsible for this has to iterate this list 
        "n²" times.
    `;

}
