function jugarCachipun() {
    var vecesJugar = document.getElementById("vecesJugar").value;

    for (var i = 0; i < vecesJugar; i++) {
        var jugadaUsuario = prompt("Elige tu jugada: Piedra, Papel o Tijera").toLowerCase();
        var opcionesMaquina = ["piedra", "papel", "tijera"];
        var jugadaMaquina = opcionesMaquina[Math.floor(Math.random() * 3)];

        alert("Tú elegiste: " + jugadaUsuario + "\nLa máquina eligió: " + jugadaMaquina);

        if (jugadaUsuario === jugadaMaquina) {
            alert("¡Es un empate!");
        } else if (
            (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
            (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
            (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
        ) {
            alert("¡Felicidades! Ganaste esta partida.");
        } else {
            alert("Has perdido contra la máquina. ¡Inténtalo de nuevo!");
        }
    }
}
