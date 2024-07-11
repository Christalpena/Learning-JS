/*
 * Crea un función, que dado un año, indique el elemento 
 * y animal correspondiente en el ciclo sexagenario del zodíaco chino.
 * - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos
 *   madera, fuego, tierra, metal, agua y los animales rata, buey, tigre,
 *   conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo
 *   (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

function chineseCycle(year){
    let yearNumbers = year.toString().split("")[0]
    if(Number(yearNumbers[yearNumbers.length - 1]) == 0 || 1){

    }else if(yearNumbers[yearNumbers.length - 1] == 2 || 3){
        
    }else if(yearNumbers[yearNumbers.length - 1] == 4 || 5){
        
    }else if(yearNumbers[yearNumbers.length - 1] == 6 || 7){
        
    }else{
        
    }
    
}

console.log(chineseCycle(1900))