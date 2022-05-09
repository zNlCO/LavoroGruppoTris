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
/*
turno=0;
function assegna(riga,colonna)
{
	n=riga*3+ colonna
	if(turno%2==0)
	{
		document.images[n].src="x.png";
	}
	else
	{
		document.images[n].src="o.png";	
	}
	turno=turno+1;
}*/