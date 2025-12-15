// tavola della tombola

const extractedNumbers = [];

const tombolaSection = document.getElementById("tombola");

const createTombolaBoard = function () {
  for (let i = 1; i <= 90; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i;

    tombolaSection.appendChild(cell);
  }
};

createTombolaBoard();

// estrazione senza duplicati

const extractRandomNumber = function () {
  if (extractedNumbers.length === 90) {
    alert("Tombola!");
    return;
  }

  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 90) + 1;
  } while (extractedNumbers.includes(randomNumber));

  extractedNumbers.push(randomNumber);
  return randomNumber;
};

// click d'estrazione

const extractButton = document.getElementById("extract");
const extractedNumberSpan = document.getElementById("extractedNumber");

extractButton.addEventListener("click", function () {
  const number = extractRandomNumber();
  extractedNumberSpan.textContent = number;
  highlightExtractedNumber(number);
});

// evidenziare caselle

const highlightExtractedNumber = function (number) {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    if (parseInt(cell.textContent) === number) {
      cell.classList.add("extracted");
    }
  });
};
