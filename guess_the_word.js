/*
 * Crea un pequeño juego que consista en adivinar palabras en un número máximo de intentos:
 * - El juego comienza proponiendo una palabra aleatoria incompleta
 *   - Por ejemplo "m_ur_d_v", y el número de intentos que le quedan
 * - El usuario puede introducir únicamente una letra o una palabra (de la misma longitud que
 *   la palabra a adivinar)
 *   - Si escribe una letra y acierta, se muestra esa letra en la palabra. Si falla, se resta
 *     uno al número de intentos
 *   - Si escribe una resolución y acierta, finaliza el juego, en caso contrario, se resta uno
 *     al número de intentos
 *   - Si el contador de intentos llega a 0, el jugador pierde
 * - La palabra debe ocultar de forma aleatoria letras, y nunca puede comenzar
 *   ocultando más del 60%
 * - Puedes utilizar las palabras que quieras y el número de intentos que consideres
 */

const prompt = require('prompt-sync')();


let attemps = 3
const WORD = 'JavaScript'
let hidden = WORD
let missingLetter = {}

function randomLetter(){
    let number = Math.floor(Math.random() * WORD.length)
    return WORD[number]
}

const hddenWords = Math.floor((WORD.length*40)/100)

for(let i = 0; i < hddenWords; i++){
    let letter =  randomLetter()
    let index = WORD.indexOf(letter)
    hidden = hidden.replace(letter,'_')
    missingLetter[letter] = index
}

const hasKey = (obj, value) => Object.keys(obj).includes(value);

while(true){
    console.log(`Attemps: ${attemps} \n${hidden}`)
    let response = prompt("Which word are missing? ---> ")
    if(response.length == 1){
        if(hasKey(missingLetter,response)){
            let index2 =  missingLetter[response]
    
            hidden = hidden.split('')
            hidden[index2] = response
            hidden = hidden.join('')
    
            if(hidden == WORD){
                console.log('You won')
                break
            }
        }else{
            attemps -= 1
        }
        if(attemps == 0){
            console.log("You lost")
            break
        }
    }else{
        if(response == WORD){
            console.log('You won')
            break
        }else{
            console.log("The words are not the same!")
        }
    }
}
