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
}

function mostra2()
{
	turno = 0
	arrayo = []
	arrayx = []
	//resetto il tris data (16/05/2022 ora 18:55)
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

	


}


function cleanTris(){
	for(let i = 0; i<9; i++){
		document.images[i].src = "../imm/vuoto.jpg"
	}
	
}