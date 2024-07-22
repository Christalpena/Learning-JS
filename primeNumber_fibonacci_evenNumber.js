/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo,
 * fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */


function numberKind(num){
    let isPrimeNum = num % 1 == 0 && num % num == 0 ? true : false
    let isEven = num % 2 == 0 ? true : false
    let isFinbonnaci = false
    let fibonacciNums = [0,1]

    for(let i = 0; i < num; i++){
        fibonacciNums.push(fibonacciNums[i] + fibonacciNums[i+1])
    }

    if(fibonacciNums.includes(num)){
        isFinbonnaci = true
    }
    
    return `${7} Is a prime number ? ${isPrimeNum} \nIs fibonacci ? ${isFinbonnaci} \nIs even ? ${isEven} `


}

console.log(numberKind(7))