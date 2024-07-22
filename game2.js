/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

function game(moves){
    if(moves.length < 3){
        return "You need more moves to play"
    }

    let playe1 = 0
    let playe2 = 0

    for(let i = 0; i < moves.length; i++){
        if(moves[i][0] == "🗿" && moves[i][1] == "✂️" || 
           moves[i][0] == "🗿" && moves[i][1] == "🦎"){
            playe1 += 1
            
        }else if(moves[i][0] == "✂️" && moves[i][1] == "📄" || 
                 moves[i][0] == "✂️" && moves[i][1] == "🦎"){
                playe1 += 1

        }else if(moves[i][0] == "📄" && moves[i][1] == "🗿" || 
                 moves[i][0] == "📄" && moves[i][1] == "🖖"){
                playe1 += 1
        
        }else if(moves[i][0] == "🦎" && moves[i][1] == "📄" || 
                 moves[i][0] == "🦎" && moves[i][1] == "🖖"){
                playe1 += 1

        }else if(moves[i][0] == "🖖" && moves[i][1] == "✂️" || 
                 moves[i][0] == "🖖" && moves[i][1] == "🗿"){
                playe1 += 1

        }else if(moves[i][0] === moves[i][1]){
            //pass
            
        }else{
            playe2 += 1
        }
    }

    return playe1 > playe2 ? `Player 1 won \nScore: ${playe1}`: playe2 > playe1 ? `Playe 2 won \nScore: ${playe2}` : `This is a tie \nPlayer 1 Score: ${playe1} - Player 2Score: ${playe2}`
}

console.log(game([["🖖","✂️"], ["🗿","📄"], ["📄","✂️"], ["🦎","🗿"]]))