/*
 * Crea una función que reciba dos parámetros para crear una cuenta atrás.
 * - El primero, representa el número en el que comienza la cuenta.
 * - El segundo, los segundos que tienen que transcurrir entre cada cuenta.
 * - Sólo se aceptan números enteros positivos.
 * - El programa finaliza al llegar a cero.
 * - Debes imprimir cada número de la cuenta atrás.
 */

async function countdown(startNum,seg){
    if(startNum > 0){
        for(let i = 0; i <= startNum; i++){
            await new Promise(resolve => setTimeout(resolve,seg * 1000))
            console.log(`${startNum - i}`)
        }
    }else{
        console.log("The number must be higher than zero")
    }
}

console.log(countdown(4,5))