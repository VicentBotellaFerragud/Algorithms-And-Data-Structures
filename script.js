//Conditions

function compareTwoValues(valueA, valueB) {

    let small, big;

    if (valueA > valueB) {

        small = valueB;
        big = valueA;

    } else {

        small = valueA;
        big = valueB;

    }

    compareTwoValuesResult.innerHTML = `${small}, ${big}`;

    const inputA = document.getElementById("valueA");
    const inputB = document.getElementById("valueB");

    inputA.value = "";
    inputB.value = "";

}

//Loops

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
            `;
            gameActive = false;

        }

    }

}
