/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [["R", "S"], ["S", "R"], ["P", "S"]]. Resultado: "Player 2".
 */

function game(moves){
    let player1 = moves.map(move => move[0]) 
    let player2 = moves.map(move => move[1]) 
    let player1Score = 0, player2Score = 0

    for(let i = 0; i < player1.length; i++){

        if(player1[i] == 'R' && player2[i] == 'S' 
            || player1[i] == 'S' && player2[i] == 'P' 
            || player1[i] == 'P' && player2[i] == 'R'){
            player1Score += 1

        }else{
            player2Score +=1
        }
    }
    return player1Score > player2Score ? "Player 1 Win" : player1Score == player2Score ? "This is a Tie" : "Player 2 Win"
}

console.log(game([["R", "S"], ["S", "R"], ["P", "S"]]))