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

	//NON TOCCARE MANCA PARTE (serve a bloccare le caselle già premute)

	let casellaMaiUsata = true
	for (let b = 0; b < (arrayo.length + arrayx.length); b++) {
		let arrayxo = arrayo.concat(arrayx)
		console.log(posizione + " = "+ arrayxo[b])
		if (posizione == arrayxo[b]) {
			casellaMaiUsata = false
		}
	}

	console.log(casellaMaiUsata && finePartita)
	if (casellaMaiUsata) {
		if (turno % 2 == 0) {
			document.images[posizione].src = "../imm/x.png"
			arrayx.push(posizione)
		}
		else {
			document.images[posizione].src = "../imm/o.png"
			arrayo.push(posizione)
		}
		turno += 1 /* incremento del turno */
		if (turno > 4) {
			checkWin();
		}
	}
}

function checkWin() {
	/*variabile per capire se c'è la casella esatta nella combinazione di vittoria*/
	var casellaEsatta = false
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
					var casellaEsatta = true
				}
			}
			// se la casella è stata trovata nella combinazione corretta aggiungo uno alla variabile caselle esatte (se raggiunge tre caselle corrette allora è vittoria)
			if (casellaEsatta == true) {
				caselleEsatte++
				casellaEsatta = false
			}
		}
		if (caselleEsatte == 3) {
			finePartita = false
			/*VITTORIA PER LE X*/
			//getElementById("setText").innerText = "ciao";
			console.log(document.getElementById(tfGioc1));
			if(document.getElementById(tfGioc1) == null)
			{
				var vincitore = document.getElementById("tfGioc1").value
				document.getElementById("setText").innerHTML = vincitore +=" ha vinto"
			}
			else
			{
				document.getElementById("setText").innerHTML = document.getElementById(tfGioc1) + " ha vinto"
			}
		}
		caselleEsatte = 0
	}


	/*variabile per capire se c'è la casella esatta nella combinazione di vittoria*/
	var casellaEsatta = false
	//varibile per capire se raggiunge 3 caselle per "formare" la vittoria
	var caselleEsatte = 0
	//cicla le 8 combinazioni di vittoria del tris
	for (var c = 0; c < 8; c++) {
		//cicla le caselle dove c'è una x sopra
		for (var i = 0; i < arrayo.length; i++) {
			//cicla una combinazione di vittoria 
			for (var a = 0; a < 3; a++) {
				//controlla se la casella selezionata in questo momento è uguale a una solo casella della combinazione corretta
				if (arrayo[i] == comGiuste[c][a]) {
					var casellaEsatta = true
				}
			}
			// se la casella è stata trovata nella combinazione corretta aggiungo uno alla variabile caselle esatte (se raggiunge tre caselle corrette allora è vittoria)
			if (casellaEsatta == true) {
				caselleEsatte++
				casellaEsatta = false
			}
		}
		if (caselleEsatte == 3) {
			finePartita = false
			/*VITTORIA PER LE X*/
			//getElementById("setText").innerText = "ciao";
			if(document.getElementById(tfGioc2) == null)
			{
				var vincitore = document.getElementById("tfGioc2").value
				document.getElementById("setText").innerHTML = vincitore + " ha vinto"
			}
			else{
				document.getElementById("setText").innerHTML = document.getElementById(tfGioc2) + " ha vinto"
			}

		}
		caselleEsatte = 0
	}
}