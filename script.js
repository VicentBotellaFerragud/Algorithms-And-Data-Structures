/* ----- CONDITIONS ----- */

function compareTwoValues(valueA, valueB) {

    let small, big;

    if (valueA > valueB) {

        small = valueB;
        big = valueA;

    } else {

        small = valueA;
        big = valueB;

    }

    compareTwoValuesResult.innerHTML = `${small}, ${big} <button onclick="conditionsExplanation()">How does this work?</button>`;

    const inputA = document.getElementById("valueA");
    const inputB = document.getElementById("valueB");

    inputA.value = "";
    inputB.value = "";

}

/* ----- LOOPS ----- */

let gameActive = false;

function activateSpaceGame() {

    gameActive = true;

}

function deactivateSpaceGame() {

    gameActive = false;
    hiddenMessageByDefault.innerHTML = "";

}

document.body.onkeyup = function (e) {

    while (gameActive) {

        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {

            hiddenMessageByDefault.innerHTML = `
                This message is displayed because you pressed the space key after clicking the 'START' button. 
                <button onclick="loopsExplanation()">Why?</button>
            `;
            gameActive = false;

        }

    }

}

/* ----- RUNNING TIME OF A FUNCTION OF N ----- */

const pizzaTypes = ["Neapolitan", "Chicago", "Cheese", "Sicilian", "Greek", "California", "Detroit", "Buffalo", "Veggie", "Cheese"];

//O(n):

function findAGivenPizza(pizzaType) {

    const pizzaTypeInput = document.getElementById("pizzaType");
    let countOfIterations = 0;
    let pizzaThatCorrespondsToEnteredPizzaType;

    if (pizzaTypeInput.value) {

        for (let i = 0; i < pizzaTypes.length; i++) {

            if ((pizzaType - 1) === i) {

                pizzaThatCorrespondsToEnteredPizzaType = pizzaTypes[i];

            }

            countOfIterations++;

        }

        iterationsCountResult1.innerHTML = `
            The pizza type that corresponds to the entered number is "${pizzaThatCorrespondsToEnteredPizzaType}".
            The function had to iterate <b>${countOfIterations}</b> times to find this pizza type.
            <button onclick="oOfNExplanation()">Why this number of times?</button>
        `;

        pizzaTypeInput.value = "";

    } else {

        alert("Please enter first a number from 1 to 10");

    }

}

//O(n²):

function findDuplicatePizzaTypes() {

    let countOfIterations = 0;
    let duplicatePizzaType;

    for (let i = 0; i < pizzaTypes.length; i++) {

        const pizzaTypeToCompare = pizzaTypes[i];

        for (let j = 0; j < pizzaTypes.length; j++) {

            if (j === i) {

                continue;

            } else {

                const possiblePizzaTypeMatch = pizzaTypes[j];

                if (possiblePizzaTypeMatch === pizzaTypeToCompare) {

                    duplicatePizzaType = possiblePizzaTypeMatch;

                }

                countOfIterations++;

            }

        }

        countOfIterations++;

    }

    duplicatePizzaType ?

        iterationsCountResult2.innerHTML = `
            The pizza type "${duplicatePizzaType}" is more than once on the pizza types list.
            The function had to iterate <b>${countOfIterations}</b> times to see if there's a duplicate pizza type 
            on the pizza types list. <button onclick="oOfNSquareExplanation()">Why this number of times?</button>
        `
        :

        iterationsCountResult2.innerHTML = `
            No pizza type is more than once on the pizza types list.
            The function had to iterate <b>${countOfIterations}</b> times to see if there's a duplicate pizza type 
            on the pizza types list. <button onclick="oOfNSquareExplanation()">Why this number of times?</button>
        `;

}

/* ----- ARRAYS ----- */

//Explained in the HTML file.

/* ----- LINKED LISTS ----- */

//Explained in the HTML file.

/* ----- DOUBLY LINKED LISTS ----- */

//Explained in the HTML file.

/* ----- QUEUES / FIFOS ----- */

//Explained in the HTML file.

/* ----- STACKS / LIFOS ----- */

//Explained in the HTML file.
