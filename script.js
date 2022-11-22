class calculator{
    constructor(previousOperandButtonTextElement,currentOperandButtonTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement

    }
    clear(){
      this.currentOperant = ''
      this.previousOperant = ''
      this.operatoin = undefined
    }
    delete(){

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
       this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {

    }
    compute() {

    }

    updateDisplay(){
       this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButton = document.querySelectorAll("data-number")
const operationButtons = document.querySelectorAll("data-operations")
const equalsButton = document.querySelectorAll("data-equals")
const deleteButton = document.querySelectorAll("data-delete")
const allClearButton = document.querySelectorAll("data-al-clear")
const previousOperandButtonTextElement = document.querySelectorAll("data-previous-operand")
const currentOperandButtonTextElement = document.querySelectorAll("data-current-operand")

const calculator = new calculator(previousOperandTextElement,currentOperandTextElement)

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
    }) 
})

operationButton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    }) 
})