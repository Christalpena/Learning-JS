/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

async function stopingTheTime(num1,num2,time){
    await new Promise(resolve => setTimeout(resolve,time))
    console.log(num1 + num2)
}

stopingTheTime(2,2,2000)
stopingTheTime(2,3,1000)