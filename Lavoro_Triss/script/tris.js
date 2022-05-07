//primo metodo
/*function mostraImmagine(){
	let image = document.getElementById("ImmagineTris");

	image.src = "../immagini/prova1.jpg"
	document.getElementById("btnImg").style.display = "none";
}*/
//secondo metodo
function mostraImmagine()
{
	document.getElementById('tabella_gioco').style.display = "block";
	document.getElementById('gioca_ancora').style.display = "block";

	document.getElementById('btnImg').style.display = "none";
}