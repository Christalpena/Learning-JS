/*
 * Crea una función que sea capaz de dibujar el "Triángulo de Pascal"
 * indicándole únicamente el tamaño del lado.
 *
 * - Aquí puedes ver rápidamente cómo se calcula el triángulo:
 *   https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif
 */

function pascalTriangle(ht){
    let numberList = [[1]]

    for(let i = 0; i <= ht-2; i++){
        
        if(numberList.length > 1){
            numberList.push([1])
            
            for(let a = 0; a < numberList[i-1].length; a++){
                
                numberList[numberList.length-1].push(numberList[i][a]+ numberList[i][a+1])
            }
            numberList[numberList.length-1].push(1)

        }else{
            numberList.push([1,1])
            
        }
    }

    return numberList
}

console.log(pascalTriangle(6))