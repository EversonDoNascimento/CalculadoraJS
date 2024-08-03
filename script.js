const number = document.querySelectorAll(".number");
const screen = document.querySelector("#screen");
const screenObj = new Screen(screen);
screen.innerText = screenObj.valueScreen();
number.forEach((n) => {
  n.addEventListener("click", () => {
    if (screenObj.valueScreen() == 0) {
      screen.innerText = "";
    }
    const currentNumber = n.innerText;
    if (currentNumber == "Remove") {
      screenObj.clearScreen();
      return null;
    }
    if (currentNumber == "=") {
      screenObj.result();
      return null;
    }
    screenObj.setValueScreen(currentNumber);
  });
});
