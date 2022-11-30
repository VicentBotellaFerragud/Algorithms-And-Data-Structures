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

/* ----- SETS -----*/

//Explained in the HTML file.

/* ----- HASH MAPS ----- */

//Explained in the HTML file.

/* ----- BINARY SEARCH ----- */

const sortedNumbers = [10, 20, 30, 40, 60, 110, 120, 130, 170];

function binarySearch(list, itemToSearch) {

    let first = 0;
    let last = list.length - 1;
    let itemFound = false;
    let numberOfSplits = 0;

    while (itemFound !== true && first <= last) {

        let mid = Math.floor((first + last) / 2);
        numberOfSplits++;

        if (itemToSearch === list[mid]) {

            itemFound = true;
            binarySearchResult.innerHTML = `Index of passed-in item is ${mid}. Number of splits: ${numberOfSplits}.`;
            return

        } else {

            if (itemToSearch < list[mid]) {

                last = mid - 1;

            } else {

                first = mid + 1;

            }

        }

    }

    binarySearchResult.innerHTML = `Index of passed-in item is -1. Number of splits: ${numberOfSplits}.`;

}

function binarySearchWithRecursion(list, itemToSearch, first, last) {

    if (first > last) {

        return false;

    } else {

        let mid = Math.floor((first + last) / 2);

        if (itemToSearch === list[mid]) {

            return mid;

        } else {

            if (itemToSearch < list[mid]) {

                binarySearchWithRecursion(list, itemToSearch, first, mid - 1);

            } else {

                binarySearchWithRecursion(list, itemToSearch, mid + 1, last);

            }

        }

    }

}

/* ----- SELECTION SORT ----- */

function createUnsortedList() {

    let unsortedList = [];

    for (let i = 0; i < 99; i++) {

        let randomNumber = Math.round(Math.random() * 999);
        unsortedList.push(randomNumber);

    }

    return unsortedList;

}

function selectionSort(list) { // Let's say list is [3, 6, 9, 2, 5, 1];

    for (let index = 0; index < list.length; index++) {

        // At the beginning of each iteration "smallest" has the value of "index".
        let smallest = index; 

        for (let i = smallest + 1; i < list.length; i++) { 
    
            if (list[i] < list[smallest]) {
    
                smallest = i; 
    
            }
    
        } 
        // When the inner loop is finished, "smallest" has the value of the index whose corresponding value is the smallest on the list.
    
        // Now the element that is being considered in the iteration (element with index "index") becomes the element 
        // with index "smallest" and viceversa. In other words, they switch places.
        cache = list[index];
        list[index] = list[smallest];
        list[smallest] = cache;

        // After the the first iteration the list is [1, 6, 9, 2, 5, 3], because "1" is the smallest element, and it's consequently
        // placed in the current "index" position (which is 0 in the first iteration), and also because "3" is the element being
        // considered during the first iteration ("3" is the element with index 0), and it's consequently placed where "1" was.

        // In the second iteration "index" is 1 (which corresponds to the element "6") and, therefore, when the inner loop is
        // finished, "smallest" becomes the index of the smallest element between "9" and "3". That is, the smallest element between
        // list[1 + 1] (which is "9") and list[list.lenght - 1] (which is "3").
        
    }

    return list;

}

function createUnsortedListAndSortIt(list) {

    let sortedList = [];
    let unsortedList = createUnsortedList();

    const start = new Date().getTime();

    console.log(unsortedList);

    sortedList = selectionSort(unsortedList);

    console.log(sortedList);

}
