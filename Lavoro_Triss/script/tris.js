var turno = 0
const comGiuste = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
var arrayx = []
var arrayo = []

var finePartita = true;

function assegna(posizione) {

	let casellaMaiUsata = true
	for (let b = 0; b < (arrayo.length + arrayx.length); b++) {
		let arrayxo = arrayo.concat(arrayx)
		if (posizione == arrayxo[b]) {
			casellaMaiUsata = false
		}
	}

	if (casellaMaiUsata) {
		if (turno % 2 == 0) {
			document.images[posizione].src = "../imm/x.png"
			arrayx.push(posizione)
			console.log(posizione+ "x")
		}
		else {
			document.images[posizione].src = "../imm/o.png"
			arrayo.push(posizione)
			console.log(posizione+ "o")
		}
		}
	turno += 1 /* incremento del turno */
	if (turno > 4) {
		checkWin();
	}
}


function checkWin() {

	//varibile per capire se raggiunge 3 caselle per "formare" la vittoria
	var caselleEsatte = 0
	//cicla le 8 combinazioni di vittoria del tris
	
	for (var c = 0; c < 8; c++) {
		//cicla le caselle dove c'è una x sopra
		for (var i = 0; i < arrayx.length; i++) {
			//cicla una combinazione di vittoria 
			for (var a = 0; a < 3; a++) {
				//controlla se la casella selezionata in questo momento è uguale a una solo casella della combinazione corretta
				if (arrayx[i] == comGiuste[c][a]) {
					caselleEsatte++
					
				}
			}
		}

		
		if (caselleEsatte == 3) {
			finePartita = false
			/*VITTORIA PER LE X*/
			if (document.getElementById(tfGioc1) == null) {
				document.getElementById("setText").innerHTML = "Giocatore 1 ha vinto"
			}
			else {
				document.getElementById("setText").innerHTML = document.getElementById(tfGioc1) + " ha vinto"
			}
			break
		}
		else{
			caselleEsatte = 0
		}
	}


	//varibile per capire se raggiunge 3 caselle per "formare" la vittoria
	caselleEsatte = 0
	//cicla le 8 combinazioni di vittoria del tris
	for (var c = 0; c < 8; c++) {
		//cicla le caselle dove c'è una x sopra
		for (var i = 0; i < arrayo.length; i++) {
			//cicla una combinazione di vittoria 
			for (var a = 0; a < 3; a++) {
				//controlla se la casella selezionata in questo momento è uguale a una solo casella della combinazione corretta
				if (arrayo[i] == comGiuste[c][a]) {
					caselleEsatte++
				}
			}
		}

		
		if (caselleEsatte == 3) {
			finePartita = false
			/*VITTORIA PER LE O*/
			if (document.getElementById(tfGioc2) == null) {
				document.getElementById("setText").innerHTML = "Giocatore 2 ha vinto"
			}
			else {
				document.getElementById("setText").innerHTML = document.getElementById(tfGioc2) + " ha vinto"
			}
			break

		}
		else{
			caselleEsatte = 0
		}
	}
}

