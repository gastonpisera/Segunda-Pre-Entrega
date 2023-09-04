class Partida {
    constructor(jugador1, jugador2){
        this.jugador1 = jugador1
        this.jugador2 = jugador2
        this.resultados = []

    }
    agregarResultado(resultado){
        this.resultados.push(resultado)

    }
    obtenerGanador(){
        const ganaJugador1 = this.resultados.filter(resultado => resultado === this.jugador1).length > this.resultados.filter(resultado => resultado === this.jugador2).length  
        const empate = this.resultados.filter(resultado => resultado === this.jugador1).length === this.resultados.filter(resultado => resultado === this.jugador2).length  
       if (empate) return "La partida es un empate"
        if (ganaJugador1){
            return `El ganador es ${this.jugador1}!`

        } else {
            return `El ganador es ${this.jugador2}!`
        } 
        
    }
        
}



let retry = true
alert("Vamos a jugar un juego");
let Jugador1 = prompt("Ingrese nombre Jugador1:");
let Jugador2 = prompt("Ingrese nombre Jugador2:");
const partida = new Partida (Jugador1,Jugador2)

while (retry) {
//Declaración de variables

let seleccionJugador1 = prompt(`Selecciona una opción ${Jugador1}: \n1. Piedra \n2. Papel \n3. Tijera`);
let seleccionJugador2 = prompt(`Selecciona una opción ${Jugador2}: \n1. Piedra \n2. Papel \n3. Tijera`);



// Logica para indicar que piedra le gana a tijera, papel a piedra y tijera a papel.
function determinarGanador(seleccionJugador1, seleccionJugador2){
    if (seleccionJugador1 === seleccionJugador2){
        return "Empate";
    } else if (
        (seleccionJugador1 === "1" && seleccionJugador2 === "3") ||
        (seleccionJugador1 === "2" && seleccionJugador2 === "1") ||
        (seleccionJugador1 === "3" && seleccionJugador2 === "2")
    ){
        return Jugador1;
    }else {
        return Jugador2;
    }
}

let ganador = determinarGanador(seleccionJugador1, seleccionJugador2);



// Cambio de la selección de un numero a la palabra elegida
if(seleccionJugador1 == 1){
    seleccionJugador1 = "Piedra";
}else{
    if(seleccionJugador1 == 2){
        seleccionJugador1 = "Papel";
    }else{
        if(seleccionJugador1 == 3){
            seleccionJugador1 = "Tijera";
        }else {alert("Elegiste mal");
        }
    }
}

if(seleccionJugador2 == 1){
    seleccionJugador2 = "Piedra";
}else{
    if(seleccionJugador2 == 2){
        seleccionJugador2 = "Papel";
    }else{
        if(seleccionJugador2 == 3){
            seleccionJugador2 = "Tijera";
        }else {alert("Elegiste mal");
        }
    }
}



// alert("Resultado:\n" + Jugador1 + " eligió " + seleccionJugador1 + "\n" + Jugador2 + " eligió " + seleccionJugador2 + "\n" + ganador)
if (ganador !== "Empate"){
    partida.agregarResultado(ganador)
    
}

retry = confirm(`Resultado: 
${Jugador1} eligió ${seleccionJugador1}
${Jugador2} eligió ${seleccionJugador2}
${ganador==="Empate" ? "La partida es un empate." : `El ganador es ${ganador}`}

¿Querés seguir jugando?`)
console.log(partida)
    
}

alert(partida.obtenerGanador())