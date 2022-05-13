
var turno=0
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
function assegna(posizione)
{
	if(turno%2==0)
	{
		var img = document.images[posizione].src= "../imm/x.png"
		arrayx.push(posizione)
	}
	else
	{
		var img = document.images[posizione].src="../imm/o.png"
		arrayo.push(posizione)
		
	}
	turno+=1 /* incremento del turno */

	if(turno>4)
	{
		checkWin();
	}
}

function checkWin()
{
	/*variabile per capire se c'è la casella esatta nella combinazione di vittoria*/
	var casellaEsatta = false
	//varibile per capire se raggiunge 3 caselle per "formare" la vittoria
	var caselleEsatte = 0
	//cicla le 8 combinazioni di vittoria del tris
	for(var c = 0; c<8; c++){
		//cicla le caselle dove c'è una x sopra
		for(var i = 0; i<arrayx.length; i++){
			//cicla una combinazione di vittoria 
			for(var a = 0; a<3; a++){
				//controlla se la casella selezionata in questo momento è uguale a una solo casella della combinazione corretta
				if(arrayx[i] == comGiuste[c][a]){
					var casellaEsatta = true
				}
			}
			// se la casella è stata trovata nella combinazione corretta aggiungo uno alla variabile caselle esatte (se raggiunge tre caselle corrette allora è vittoria)
			if(casellaEsatta == true){
				caselleEsatte++
				casellaEsatta = false
			}
		}
		if(caselleEsatte == 3){
			/*VITTORIA PER LE X*/
			//getElementById("setText").innerText = "ciao";
			
		}
		caselleEsatte = 0
	}


	/*variabile per capire se c'è la casella esatta nella combinazione di vittoria*/
	var casellaEsatta = false
	//varibile per capire se raggiunge 3 caselle per "formare" la vittoria
	var caselleEsatte = 0
	//cicla le 8 combinazioni di vittoria del tris
	for(var c = 0; c<8; c++){
		//cicla le caselle dove c'è una x sopra
		for(var i = 0; i<arrayo.length; i++){
			//cicla una combinazione di vittoria 
			for(var a = 0; a<3; a++){
				//controlla se la casella selezionata in questo momento è uguale a una solo casella della combinazione corretta
				if(arrayo[i] == comGiuste[c][a]){
					var casellaEsatta = true
				}
			}
			// se la casella è stata trovata nella combinazione corretta aggiungo uno alla variabile caselle esatte (se raggiunge tre caselle corrette allora è vittoria)
			if(casellaEsatta == true){
				caselleEsatte++
				casellaEsatta = false
			}
		}
		if(caselleEsatte == 3){
			/*VITTORIA PER LE X*/
			//getElementById("setText").innerText = "ciao";

			
			document.getElementById("setText").innerHTML = "Il *giocatore 2*";
		}
		caselleEsatte = 0
	}
}