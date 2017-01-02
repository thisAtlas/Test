function onLoad() {
	
}
function nameFunc() {
	var name=document.greeting.name.value;
	if (name == "Magnus") {
		document.greeting.call.value="Welcome "+name;
	}
	else {
		document.greeting.call.value="Go away "+name;
	}
}
function numberFunc() {
	var number=document.nr.number.value;
	if (number > 20) {
		document.nr.numberCall.value="That's a large number!";
	}
	else {
		document.nr.numberCall.value="You can do better.";
	}
}
function mornFunc() {
	var greeting;
	var time = new Date().getHours();
	if (time < 10) {
		greeting = "Good morning";
	}
	else if (time < 20) {
		greeting = "Good day";
	}
	else {
		greeting = "Good evening";
	}
	document.getElementById("printTime").innerHTML=greeting;
}
/*Opgave Hovedregning*/
	var x;
	var y;
	var answer;
	var rigtig=0;
	var forkert=0;

function randomFunc() {
	x = Math.floor(Math.random()*10);
	y = Math.floor(Math.random()*10);
	document.hovedregning.rNrPrint.value=x+" * "+y;
}
function guessFunc() {
	var answer = x*y;
	if (document.hovedregning.input.value == answer) {
		document.getElementById("resulttf").innerHTML="true";
		rigtig = rigtig+1;
	}
	else {
		document.getElementById("resulttf").innerHTML="false, the answer was: "+answer;
		forkert = forkert +1;
	}
	document.getElementById("rigtige").innerHTML = "Rigtige svar: "+rigtig+"<br>";
	document.getElementById("forkerte").innerHTML = "Forkerte svar: "+forkert+"<br>";
}