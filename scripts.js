document.addEventListener("DOMContentLoaded", function() {
    const inputWord = document.getElementById("number");
    const convButton = document.getElementById("convert-btn");
    const resultDiv = document.getElementById("output");

    convButton.addEventListener("click", function() {
        const inputValue = inputWord.value;
        if (inputValue === "") {
            resultDiv.innerHTML = "Please enter a valid number";
        } else if (inputValue < 0) {
            resultDiv.innerHTML = "Please enter a number greater than or equal to 1";
        }
        else if (inputValue >= 4000) {
            resultDiv.innerHTML = "Please enter a number less than or equal to 3999";

        } else {
            const convertedValue = convertToRoman(parseInt(inputValue));
            resultDiv.innerHTML = convertedValue;
        }
    });
});

function convertToRoman(num) {
    const romanMapping = [
            { roman: 'M', value: 1000 },
            { roman: 'CM', value: 900 },
            { roman: 'D', value: 500 },
            { roman: 'CD', value: 400 },
            { roman: 'C', value: 100 },
            { roman: 'XC', value: 90 },
            { roman: 'L', value: 50 },
            { roman: 'XL', value: 40 },
            { roman: 'X', value: 10 },
            { roman: 'IX', value: 9 },
            { roman: 'V', value: 5 },
            { roman: 'IV', value: 4 },
            { roman: 'I', value: 1 }
            ];
    let romanNumeral = "";
    for (let i = 0; i < romanMapping.length; i++) {
        while (num >= romanMapping[i].value) {
            romanNumeral += romanMapping[i].roman;
            num -= romanMapping[i].value;
        }
    }
    return romanNumeral;
}