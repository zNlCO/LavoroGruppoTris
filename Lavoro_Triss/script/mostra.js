function mostra()
{
	//fa comparire il bottone gioca e il triss
	document.getElementById('board').style.display = "grid";
	document.getElementById('restartButton').style.display = "block";
	//disabilita gli input (blocca quello che si inserisce)
	document.getElementById('tfGioc1').disabled = true;
	document.getElementById('tfGioc2').disabled = true;
	//fa scomparire il bottone:GIOCA
	document.getElementById('btnImg').style.display = "none";
	document.getElementById("titolo").innerHTML = "TRIS"
}

function mostra2()
{
	turno = 0
	arrayo = []
	arrayx = []
	finePartita = 0

	//resetto il tris 
	cleanTris()

	//fa scomparire il bottone gioca e il triss
	document.getElementById('board').style.display = "none";
	document.getElementById('restartButton').style.display = "none";
	//riabilita gli input
	document.getElementById('tfGioc1').disabled = false;
	document.getElementById('tfGioc2').disabled = false;
	//fa comparire il bottone:GIOCA
	document.getElementById('btnImg').style.display = "grid";

	//reset della scritta del vincitore
	document.getElementById("setText").innerHTML = ""

	document.getElementById("titolo").innerHTML = "Inserisci i nomi dei dei 2 giocatori"
	

}


function cleanTris()
{
	for(let i = 0; i<9; i++)
	{
		document.images[i].src = "../imm/vuoto.jpg"
	}
	
}