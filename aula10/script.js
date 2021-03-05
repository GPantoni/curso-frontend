const subtrai = function (a, b) {
    return a - b
}

const testaZero = x => {
    if (x == 0) {
        console.log("É zero")
    } else {
        console.log("Não é zero")
    }
}

function testaSinal(a, b) {
    if (subtrai(a, b) == 0) {
        console.log('É zero');
    } else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        console.log('Subtração entre números de sinais diferentes');
    } else if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
        console.log('Subtração entre números de mesmo sinal');
    }
}