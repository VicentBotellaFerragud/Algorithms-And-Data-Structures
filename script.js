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