class Operation {
  constructor() {}
  sum(array) {
    let temp = 0;
    array.forEach((element) => {
      if (element.trim() !== "") {
        temp = parseFloat(element) + temp;
      }
    });
    return temp;
  }
  subtraction(array) {
    let temp = 0;
    array.forEach((element, index) => {
      //   console.log(element);
      if (element.trim() !== "") {
        if (index == 0) {
          temp = parseFloat(element);
        } else {
          temp = temp - parseFloat(element);
        }
      }
    });
    return temp;
  }
  multiplication(array) {
    let temp = 1;
    array.forEach((element, index) => {
      if (element.trim() !== "") {
        if (index == 0) {
          temp = parseFloat(element);
        } else {
          temp *= parseFloat(element);
        }
      }
    });
    return temp;
  }
  division(array) {
    let temp;
    array.forEach((element, index) => {
      if (element.trim() !== "") {
        if (index == 0) {
          temp = parseFloat(element);
        } else {
          temp /= parseFloat(element);
        }
      }
    });
    return temp;
  }
}

class Screen extends Operation {
  screen;
  FinalCalcule = 0;
  resolver = { operation: "", calculate: 0 };
  constructor(dom) {
    super();
    this.screen = dom;
    this.clearScreen();
  }
  valueScreen() {
    return this.screen.innerText;
  }
  setValueScreen(value) {
    if (value === "Remove") return null;
    this.screen.innerText = this.screen.innerText + value;

    switch (value) {
      case "+":
        if (
          this.resolver.calculate === 0 ||
          this.resolver.operation === "sum"
        ) {
          this.resolver = {
            operation: "sum",
            calculate: this.resolver.calculate + 1,
          };
        } else {
          this.resolver = {
            operation: this.resolver.operation,
            calculate: this.resolver.calculate + 1,
          };
        }
        this.efetuarCalculo();
        break;
      case "-":
        if (
          this.resolver.calculate === 0 ||
          this.resolver.operation === "sub"
        ) {
          this.resolver = {
            operation: "sub",
            calculate: this.resolver.calculate + 1,
          };
        } else {
          this.resolver = {
            operation: this.resolver.operation,
            calculate: this.resolver.calculate + 1,
          };
        }
        this.efetuarCalculo();

        break;
      case "/":
        if (
          this.resolver.calculate === 0 ||
          this.resolver.operation === "div"
        ) {
          this.resolver = {
            operation: "div",
            calculate: this.resolver.calculate + 1,
          };
        } else {
          this.resolver = {
            operation: this.resolver.operation,
            calculate: this.resolver.calculate + 1,
          };
        }
        this.efetuarCalculo();

        break;
      case "*":
        if (
          this.resolver.calculate === 0 ||
          this.resolver.operation === "mult"
        ) {
          this.resolver = {
            operation: "mult",
            calculate: this.resolver.calculate + 1,
          };
        } else {
          this.resolver = {
            operation: this.resolver.operation,
            calculate: this.resolver.calculate + 1,
          };
        }
        this.efetuarCalculo();

        break;
      default:
        break;
    }
  }
  clearScreen() {
    if (this.screen.innerText == "") {
      this.screen.innerText = 0;
      return null;
    }

    let temp = this.valueScreen();
    this.screen.innerText = temp.slice(0, temp.length - 1);
  }
  clear() {
    this.screen.innerText = "";
  }

  efetuarCalculo() {
    if (this.resolver.calculate > 1) {
      switch (this.resolver.operation) {
        case "sum":
          const operation = this.valueScreen().split("+");

          const sum = this.sum(operation);
          this.FinalCalcule = sum;
          this.screen.innerText = this.FinalCalcule;
          this.resolver = { operation: "", calculate: 0 };
          break;
        case "sub":
          const operationSub = this.valueScreen().split("-");

          const sub = this.subtraction(operationSub);
          this.FinalCalcule = sub;
          this.screen.innerText = this.FinalCalcule;
          this.resolver = { operation: "", calculate: 0 };
          break;
        case "div":
          const operationDiv = this.valueScreen().split("/");

          const div = this.division(operationDiv);
          this.FinalCalcule = div;
          this.screen.innerText = this.FinalCalcule;
          this.resolver = { operation: "", calculate: 0 };
          break;
        case "mult":
          const operationMult = this.valueScreen().split("*");

          const mult = this.multiplication(operationMult);
          this.FinalCalcule = mult;
          this.screen.innerText = this.FinalCalcule;
          this.resolver = { operation: "", calculate: 0 };
          break;
        default:
          break;
      }
    }
  }

  result() {
    this.resolver = {
      operation: this.resolver.operation,
      calculate: this.resolver.calculate + 1,
    };
    this.efetuarCalculo();

    this.clear();
    this.setValueScreen(this.FinalCalcule);
  }
}
