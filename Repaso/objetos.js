let Liga1 = new liga("Liga Santander","19/20");
let Liga2 = new liga("League 1","20/21");

let arrayLigas = [];
arrayLigas.push(Liga1);
arrayLigas.push(Liga2);

let EquipoSev = new equipo("Sevilla","Sevilla");
let EquipoMadrid = new equipo("Real Madrid","Madrid");
let EquipoBarcelona = new equipo("Barcelona","Barcelona");
let EquipoManchesterC = new equipo("Manchester City","Manchester");
let EquipoBorusia = new equipo("Borusia Dortmun","Berlin");
let EquipoMilan = new equipo("Milan","Milan");

let arrayEquipos = [EquipoSev,EquipoMadrid,EquipoBarcelona,EquipoManchesterC,EquipoBorusia,EquipoMilan];

let Jugador1 = new jugador("Canouté");
let Jugador2 = new jugador("Palop");
let Jugador3 = new jugador("Messi");
let Jugador4 = new jugador("Ronaldo");
let Jugador5 = new jugador("Puerta");
let Jugador6 = new jugador("Buffon");
let Jugador7 = new jugador("Puyol");
let Jugador8 = new jugador("Pepe Espejo");
let Jugador9 = new jugador("Jorge Baron");
let Jugador10 = new jugador("Etó");
let Jugador11 = new jugador("Di Maria");
let Jugador12 = new jugador("Vitolo");

Liga1.agregarEquipo(EquipoSev);
Liga1.agregarEquipo(EquipoMadrid);
Liga1.agregarEquipo(EquipoBarcelona);

Liga2.agregarEquipo(EquipoManchesterC);
Liga2.agregarEquipo(EquipoBorusia);
Liga2.agregarEquipo(EquipoMilan);

EquipoSev.agregarJugador(Jugador1);
EquipoSev.agregarJugador(Jugador2);

EquipoMadrid.agregarJugador(Jugador3);
EquipoMadrid.agregarJugador(Jugador4);

EquipoBarcelona.agregarJugador(Jugador5);
EquipoBarcelona.agregarJugador(Jugador6);

EquipoManchesterC.agregarJugador(Jugador7);
EquipoManchesterC.agregarJugador(Jugador8);

EquipoBorusia.agregarJugador(Jugador9);
EquipoBorusia.agregarJugador(Jugador10);

EquipoMilan.agregarJugador(Jugador11);
EquipoMilan.agregarJugador(Jugador12);