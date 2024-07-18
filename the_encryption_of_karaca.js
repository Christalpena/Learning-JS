/*
 * Crea una función que sea capaz de encriptar y desencriptar texto
 * utilizando el algoritmo de encriptación de Karaca
 * (debes buscar información sobre él).
 * Esta recivira dos parametros: el texto o palabra y un booleano para saber si esta encryptada o no
 */

function reverseString(word){
    let reverseWord =''
    for(let i = 0; i < word.length; i++){
        reverseWord += word[word.length-1-i]
    }
    return reverseWord.toLowerCase()
}

function encryptionKaraca(txt,isEncrypted){

    let words = txt.split(" ")
    let revercedWords = words.map((word) => reverseString(word))

    if(isEncrypted == true){
        for(let a = 0; a < revercedWords.length; a++){
            let newWord = revercedWords[a].slice(3)
            revercedWords[a] = newWord.replace(0, 'a').replace(1,'e').replace(2,'i').replace(3,'o').replace(4,'u')
        }
    }else{
        for(let a = 0; a < revercedWords.length; a++){
            revercedWords[a] = revercedWords[a].replace('a',0).replace('e',1).replace('i',2).replace('o',3).replace('u',4) + 'aca'
        }
    }

    return revercedWords.join(" ")
}

console.log(encryptionKaraca("0l3haca 3mocaca ?s0ts1aca",true))