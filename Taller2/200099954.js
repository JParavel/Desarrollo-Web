function invertirString(cadena){
    let invertida = ""
    for (let i = cadena.length - 1; i > 0; i--) {
        invertida += cadena[i]
    }
    return invertida
}  

function findMax(numbers){
    let max = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }

    return max
}

function includes(numbers, n){
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == n) {
            return true
        }
    }
    return false
}



function sum(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

function missingNumbers(numbers){
    let max = numbers[0]
    let min = numbers[0]

    //Encontramos el menor y el mayor valor de la lista
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }

        if (numbers[i] < min) {
            min = numbers[i]
        }
    }

    let missing = []

    for (let i = min; i < max; i++) {
        
        if (!numbers.includes(i)) {
            missing.push(i)
        }
        
    }

    return missing
}

// console.log(missingNumbers([7, 2, 4, 6, 3, 9] ))