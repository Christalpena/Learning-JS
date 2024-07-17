/*
 * Crea una función que sea capaz de detectar y retornar todos los
 * handles de un texto usando solamente Expresiones Regulares.
 * Debes crear una expresión regular para cada caso:
 * - Handle usuario: Los que comienzan por "@"
 * - Handle hashtag: Los que comienzan por "#"
 * - Handle web: Los que comienzan por "www.", "http://", "https://"
 *   y finalizan con un dominio (.com, .es...)
 */


function handle(strng){
    let words = strng.split(" ")
    let user = words.filter((word) => word[0] == '@')
    let hashtag = words.filter((word) => word[0] == '#')
    let web = words.filter((word) => word.includes('http://') || word.includes('https://') || word.includes('www'))
    console.log(user)
    console.log(hashtag)
    return web 
}

console.log(handle("En esta actividad de @mouredev, resolvemos #retos de #programacion desde https://retosdeprogramacion.com/semanales2022, que @braismoure aloja en www.github.com"))