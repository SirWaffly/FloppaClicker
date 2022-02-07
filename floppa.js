var floppas = 0;
var fishecost = 15;
var fishenumber = 0;
var floppercost = 100;
var floppernumber = 0;
var chikenmcost = 500;
var chikenmnumber = 0;

function floppers(amount) {
	floppas = floppas + amount; 
	document.getElementById("floppas").innerHTML = (floppas);
}

function fishebuy() {
	if (floppas >= fishecost) {
		floppas = floppas - fishecost;
		fishenumber = fishenumber + 1; 
		fishecost = Math.round(fishecost * 1.3);

		document.getElementById("floppas").innerHTML = floppas;
		document.getElementById("fishenumber").innerHTML = fishenumber;
		document.getElementById("fishecost").innerHTML = fishecost;
	}
}

function flopperbuy() {
	if (floppas >= floppercost) {
		floppas = floppas - floppercost;
		floppernumber = floppernumber + 1; 
		floppercost = Math.round(floppercost * 1.4);

		document.getElementById("floppas").innerHTML = floppas;
		document.getElementById("floppernumber").innerHTML = floppernumber;
		document.getElementById("floppercost").innerHTML = floppercost;
	}
}

function chikenmbuy() {
	if (floppas >= chikenmcost) {
		floppas = floppas - chikenmcost;
		chikenmnumber = chikenmnumber + 1; 
		chikenmcost = Math.round(chikenmcost * 1.5);

		document.getElementById("floppas").innerHTML = floppas;
		document.getElementById("chikenmnumber").innerHTML = chikenmnumber;
		document.getElementById("chikenmcost").innerHTML = chikenmcost;
	}
}

setInterval (function() {
	floppas = floppas + fishenumber;
	floppas = floppas + floppernumber * 3;
	floppas = floppas + chikenmnumber * 10;

	document.getElementById("floppas").innerHTML = floppas;
}, 1000);