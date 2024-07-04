/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function divisorNumbers(num){
    let numArray = []
    for(let i = 0; i <= num; i++){
        let result = num % i
        if(result == 0){
            numArray.push(i)
        }
    }

    return numArray
}
function mcd(num1,num2){
    let divNum1 = divisorNumbers(num1)
    let divNum2 = divisorNumbers(num2)
    let mcdNumbers = []

    for(let i = 0; i < divNum1.length; i++){
        if(divNum2.includes(divNum1[i])){
            mcdNumbers.push(divNum1[i])
        }
        
    }
    return mcdNumbers[mcdNumbers.length-1]

}

function multiplayerNumbers(num){
    let dividers = []
    for(let i = 1; i <= num; i++){
        dividers.push(num * i)
    }
    return dividers
}

function mcm(num1,num2){

    let multipliersNum1 = multiplayerNumbers(num1)
    let multipliersNum2 = multiplayerNumbers(num2)
    
    for(let i = 0; i < multipliersNum2.length; i++){
        if(multipliersNum2.includes(multipliersNum1[i])){
            return multipliersNum1[i]
        }
    }
    

}

console.log(mcd(12,18))
console.log(mcm(324,180))