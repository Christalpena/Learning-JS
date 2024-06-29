/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */


function obstacleRace(moves,runTrack){
    let movesArray = moves
    let runTrackArray = runTrack.split("")
    let win = true
    for(let i = 0; i < movesArray.length; i++){
        if(movesArray[i] == "run" && runTrackArray[i] == "|"){
            runTrackArray[i] = "/"
            win = false
        }else if(movesArray[i] == "jump" && runTrackArray[i] == "_"){
            runTrackArray[i] = "x"
            win = false
        }
    }
    console.log(runTrackArray.join(""))
    return win
}

console.log(obstacleRace(["run","jump","run","run","jump","run"],"_|____"))