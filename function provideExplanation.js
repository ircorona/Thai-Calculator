function provideExplanation() {
    const inputNumber = document.getElementById("numberInput").value;
    const explanationElement = document.getElementById("explanation");

    if (inputNumber == "") {
        explanationElement.textContent = "Prôd pôn tua lek";
        return;
    }

    const num = parseInt(inputNumber);

    if (isNaN(num) || inputNumber.indexOf('.') !== -1 || num < 1 || num > 1000000) {
        explanationElement.textContent = "Please enter a valid integer between 1 and 1,000,000.";
        return;
    }

    // Provide the Romanized Thai explanation for the integer
    explanationElement.textContent = getRomanizedThai(num);
}

function getRomanizedThai(num) {
    const baseNumbers = {
        1: "nùng",
        2: "sǒng",
        3: "sǎam",
        4: "sìi",
        5: "hâa",
        6: "hòk",
        7: "jet",
        8: "bpàet",
        9: "gâo"
    };

    let parts = [];

    if (num >= 100000) {
        let hundredThousandsPlace = Math.floor(num / 100000);
        parts.push(baseNumbers[hundredThousandsPlace] + " sàen");
        num %= 100000;
    }

    if (num >= 10000) {
        let tenThousandsPlace = Math.floor(num / 10000);
        parts.push((num >= 20000 ? baseNumbers[tenThousandsPlace] : '') + " sìp phan");
        num %= 10000;
    }

    if (num >= 1000) {
        let thousandsPlace = Math.floor(num / 1000);
        parts.push(baseNumbers[thousandsPlace] + " phan");
        num %= 1000;
    }

    if (num >= 100) {
        let hundredsPlace = Math.floor(num / 100);
        parts.push(baseNumbers[hundredsPlace] + " rói");
        num %= 100;
    }

    if (num >= 10) {
        let tensPlace = Math.floor(num / 10);
        parts.push((num >= 20 ? baseNumbers[tensPlace] : '') + " sìp");
        num %= 10;
    }

    if (num > 0) {
        parts.push(baseNumbers[num]);
    }

    return parts.join(" + ");
}
