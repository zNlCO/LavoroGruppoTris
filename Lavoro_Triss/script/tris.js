//primo metodo
/*function mostraImmagine(){
	let image = document.getElementById("ImmagineTris");

	image.src = "../immagini/prova1.jpg"
	document.getElementById("btnImg").style.display = "none";
}*/
//secondo metodo
function mostraImmagine()
{
	document.getElementById('ImmagineTris').style.display = "block";

	document.getElementById('btnImg').style.display = "none";
}