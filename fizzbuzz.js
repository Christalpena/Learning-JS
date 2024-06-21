/*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

 */


let mulpThree = []
let mulpFive = []

for (let num = 1; num < 100; num++){
    mulpThree.push(num*3);
    mulpFive.push(num*5)
}

for (let num = 1; num < 100; num++){
    if(mulpFive.includes(num) && mulpThree.includes(num)){
        console.log('fizzbuzz')
    }else if(mulpFive.includes(num)){
        console.log("buzz")
    }else if(mulpThree.includes(num)){
        console.log("fizz")
    }else{
        //pass
    }
}
