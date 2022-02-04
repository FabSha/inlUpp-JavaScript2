
let myNumbers = []

let myNumber = document.getElementById("myNumber")

$("#calculate").on("click", calc)

$("#addition").on("click", plus)

$("#sub").on("click", minus)


function plus() {
    let x = Number(myNumber.value)
    if (myNumber.value.length === 0) {
        return
    }
    if (myNumbers[myNumbers.length - 1] === "+" || myNumbers[myNumbers.length - 1] === "-") {
        myNumbers.pop()
        myNumbers.push("+", x)

    } else if (myNumbers.length === 0) {
        myNumbers.push(x, "+")

    } else {
        myNumbers.push("+", x)
    }



    console.log(x, myNumbers)
    displayCalc(myNumbers)
}

function minus() {
    let x = Number(myNumber.value)
    if (myNumber.value.length === 0) {
        return
    }
    if (myNumbers[myNumbers.length - 1] === "+" || myNumbers[myNumbers.length - 1] === "-") {
        myNumbers.pop()
        myNumbers.push("-", x)

    } else if (myNumbers.length === 0) {
        myNumbers.push(x, "-")

    } else {
        myNumbers.push("-", x)
    }



    console.log(x, myNumbers)
    displayCalc(myNumbers)
}

function displayCalc(myNumbers) {

    $("#calculation").text(myNumbers.join(" "))
    $("#myNumber").val(" ")
}

function calc() {
    const result = eval(myNumbers.join(" "))

    console.log(result)
    displayResult(result)
}
function displayResult(result) {
    $("#result").text(result)
    myNumbers = []
    displayCalc(myNumbers)
}