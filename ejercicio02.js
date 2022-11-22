// Segundo ejercicio
/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

const cumpleNoa = new Date("21 mayo 1982");
const libroFav = {
    titulo: "Dragonlace: El retorno de los dragones",
    autor: "Margaret Weis y Tracy Hickman",
    fechaPubli: "1984",
    url: "https://es.wikipedia.org/wiki/Dragonlance",
}
const noa = ["Noa", 40, false, cumpleNoa, libroFav];

console.log(noa);