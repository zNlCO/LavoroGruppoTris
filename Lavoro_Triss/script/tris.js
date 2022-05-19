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

var vitX = 0
var vitO = 0

var vincitore_torneo

//boleana non va quindi uso 0 e 1
var finePartita = 0
function assegna(posizione) {

	let casellaMaiUsata = true
	for (let b = 0; b < (arrayo.length + arrayx.length); b++) {
		let arrayxo = arrayo.concat(arrayx)
		if (posizione == arrayxo[b]) {
			casellaMaiUsata = false
		}
	}


	if (casellaMaiUsata && finePartita < 1) {
		if (turno % 2 == 0) {
			document.images[posizione].src = "../imm/x.png"
			arrayx.push(posizione)
			document.getElementById('lblToccaA').innerHTML = 'Tocca a O'
		}
		else {
			document.images[posizione].src = "../imm/o.png"
			arrayo.push(posizione)
			document.getElementById('lblToccaA').innerHTML = 'Tocca a X'
		}
		turno += 1 /* incremento del turno */
	}

	if (turno > 4) {
		checkWin()
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
			finePartita++
			/*VITTORIA PER LE X*/
			var vinc = document.getElementById("tfGioc1").value;
			if (vinc == "") {
				document.getElementById("setText").innerHTML = "Giocatore 1 ha vinto"
			}
			else {
				document.getElementById("setText").innerHTML = vinc + " ha vinto"
			}
			document.getElementById('lblToccaA').style.display = "none";
			vitX++
			break
		}
		else {
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
			finePartita++
			console.log(finePartita)
			/*VITTORIA PER LE O*/
			var vinc = document.getElementById("tfGioc2").value;
			if (vinc == "") {
				document.getElementById("setText").innerHTML = "Giocatore 2 ha vinto"
			}
			else {
				document.getElementById("setText").innerHTML = vinc + " ha vinto"
			}
			document.getElementById('lblToccaA').style.display = "none";
			vitO++
			break
		}
		else {
			caselleEsatte = 0
		}
	}

	//se in totale hanno vinto 5 partite allora mostra il grafico
	if ((vitX + vitO) == 5) {
		if (vitO > vitX) {
			vincitore_torneo = document.getElementById("tfGioc2").value;
		}
		else {
			vincitore_torneo = document.getElementById("tfGioc1").value;
		}
		grafico()
		document.getElementById("grafico").style.display = "block";
		document.getElementById('restartButton').style.display = "none";
	}
}

function grafico() {
	/*javascript grafico*/
	var xValues = [vitO, vitX];
	var yValues = [vitO * 100 / 5, vitX * 100 / 5];
	var barColors = ["#b91d47", "#00aba9"];

	new Chart("grafico", 
	{
		type: "pie",
		data: {
			labels: xValues,
			datasets: [{
				backgroundColor: barColors,
				data: yValues
			}]
		},
		options: {
			title: {
				display: true
			}
		}
	});

	if (vitO > vitX) {
		var vinc = document.getElementById("tfGioc2").value;
		if (vinc == "") {
			document.getElementById("setText").innerHTML = "Giocatore 2 ha vinto il torneo"
		}
		else {
			document.getElementById("setText").innerHTML = vinc + " ha vinto il torneo"
		}
	}
	else {
		var vinc = document.getElementById("tfGioc1").value;
		if (vinc == "") {
			document.getElementById("setText").innerHTML = "Giocatore 1 ha vinto il torneo"
		}
		else {
			document.getElementById("setText").innerHTML = vinc + " ha vinto il torneo"
		}
	}


}