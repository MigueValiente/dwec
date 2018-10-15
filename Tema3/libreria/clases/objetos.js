//Declarando Clientes
let cliente1 = new cliente("Pepe","Espejo Roig","72146712K",954321231,"Calle Don Nadie, Nº213");
let cliente2 = new cliente("Jorge","Baron Abad","72254571F",954367681,"Calle Don Alguien, Nº214");

//Declarar Autor
let Shakespeare = new autor("William","Shakespeare");

//Declarando Libros
let Hamlet = new libro("Hamlet","7134589745151",Shakespeare,"12/2/1832","Tragedia",12.95);
let RomeoJulieta = new libro("Romeo y Julieta","7134146745151",Shakespeare,"14/7/1852","Romance",18.95);
let Otelo = new libro("Otelo","71345843265151",Shakespeare,"7/9/1847","Tragedia",9.95);

//Array de Libros
let librosShakespeare = [Hamlet,RomeoJulieta,Otelo];

//Declarar Libreria
let libreria = new tienda("PAQUITO",librosShakespeare,"Calle de la Piruleta, Nº7");



Shakespeare.libros = librosShakespeare;

//Declarar Votos
let voto1 = new votos(3,"Ezte livro no me a gustadio.",cliente1,Hamlet);
let voto2 = new votos(5,"Me ha encatodo este libro si señor",cliente1,Otelo);

console.log(libreria);
console.log(cliente2);
console.log(Otelo);
console.log(Shakespeare);
console.log(voto1);