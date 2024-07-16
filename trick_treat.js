/*
 * Este es un reto especial por Halloween.
 * Deberemos crear un programa al que le indiquemos si queremos realizar "Trick
 * o Treat" y un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido trick, el programa retornará scares (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos scares por cada edad que sea un número par
 * - Tres scares por cada 100 cm de altura entre todas las personas
 * - scares: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido treat, el programa retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 * - En caso contrario retornará un error.
 */

function randomScares(){
    let scares = ['🎃 ', '👻 ', '💀 ', '🕷 ' , '🕸 ', '🦇 ']
    let numScare = Math.floor(Math.random() * scares.length)
    return scares[numScare]
}

function randomCandies(){
    let candies = ['🍰 ', '🍬 ', '🍡 ', '🍭 ', '🍪 ', '🍫 ', '🧁 ', '🍩 ']
    let numCandy = Math.floor(Math.random() * candies.length)
    return candies[numCandy]
}

function trickTreating(trg,people){
    if(trg == 'Trick'){
        let scares = []
        for(let i = 0; i < people.length; i++){
            
            //NAME
            let nameLength = Math.floor(people[i][0].length / 2)
            scares.push(randomScares().repeat(nameLength))

            //AGE
            if(people[i][1] % 2 == 0){
                scares.push(randomScares())
                scares.push(randomScares())
            }
        }
        
        //HEIGHT
        let totalheight = 0
        for(let c = 0; c < people.length; c++){
            totalheight += people[c][2]
        }

        let height = Math.floor(totalheight / 100)
        for(let b = 0; b < height; b++){
            scares.push(randomScares())
            scares.push(randomScares())
            scares.push(randomScares())
        }
        
        return scares.join("")

    }else if(trg == 'Treat'){
        let candies = []
        for(let i = 0; i < people.length; i++){

            //NAME
            let nameLenght = people[i][0].length
            for(let c = 0; c < nameLenght; c++){
                candies.push(randomCandies())
            }

            //AGE
            if(people[i][1] <= 10){
                for(let b = 3; b < 10; b +=3){
                    if(b > people[i][1]){
                        break
                    }
                    candies.push(randomCandies())

                }
            }

            //HEIGHT
            for(let t = 50; t < people[i][2]; t += 50){

                candies.push(randomCandies())
                candies.push(randomCandies())
  
            }
            
        }
        return candies.join("")
    }
    return 'Somenting went wrong'
}

console.log(trickTreating('Trick',[["Brais", 35, 177],["Sara", 9, 122],["Pedro", 5, 80],["Roswell", 3, 54]]))

console.log(trickTreating('Treat',[["Brais", 35, 177],["Sara", 9, 122],["Pedro", 5, 80],["Roswell", 3, 54]]))