function mostraImmagine()
{
	//fa comparire il bottone gioca e il triss
	document.getElementById('board').style.display = "grid";
	document.getElementById('restartButton').style.display = "block";
	//disabilita i bottoni (blocca quello che si inserisce)
	document.getElementById('tfGioc1').disabled = true;
	document.getElementById('tfGioc2').disabled = true;
	//fa scomparire il bottone:GIOCA
	document.getElementById('btnImg').style.display = "none";
}
