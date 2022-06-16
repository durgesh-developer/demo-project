let productNameInput = document.getElementById("product-name");
let remainingChars = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInput.maxLength;

function updateRemainingChars(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;
  // console.log(enteredTextLength);
  let remainChar = maxAllowedChars - enteredTextLength;
  // console.log(remainChar);
  if (remainChar <= 10) {
    remainingChars.classList.add("warning");
    productNameInput.classList.add("warning");
  } else {
    remainingChars.classList.remove("warning");
    productNameInput.classList.remove("warning");
  }
  remainingChars.textContent = remainChar;
}

// function updateRemainingChars() {
//   let enteredText = productNameInput.value;
//   let enteredTextLength = enteredText.length;
//   // console.log(enteredTextLength);
//   let remainChar = maxAllowedChars - enteredTextLength;
//   // console.log(remainChar);
//   remainingChars.textContent = remainChar;
// }
productNameInput.addEventListener("input", updateRemainingChars);
