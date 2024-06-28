/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function recursiveFactorial(num){
    let result = 1
    for(let i = 1; i <= num-1; i++){
        result = result * (i + 1)
    }
    return result
}

console.log(recursiveFactorial(6))