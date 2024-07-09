/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */


function orderList(numberList,parm){
    if(parm == 'Asc'){
        for(let i=0; i < numberList.length; i++){
          for(let j=0; j < numberList.length; j++){
            if(numberList[j] > numberList[j+1]){

                let newPosition = numberList[j] //4
                numberList[j] = numberList[j+1]
                numberList[j+1] = newPosition
            }

          }
        }
        return numberList;
    }
    for(let i = numberList.length; i > 0; i--){
        for(let j = numberList.length; j > 0; j--){
            if(numberList[j] > numberList[j-1]){
                let newPosition = numberList[j]
                numberList[j] = numberList[j-1]
                numberList[j-1] = newPosition
            }

        }
    }
    return numberList

    
}

console.log(orderList([4, 2, 10, 8, 9],'Asc'))