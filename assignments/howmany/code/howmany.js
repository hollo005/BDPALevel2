function doLevel1(){
	hide("level1")
	show("level2")
    var answer = prompt("What is the answer")
	if (answer == "dishes"){
		alert ("You got it right !")
		addPoints(10)
	}else{
		alert("You got it wrong")
	}
}
	
function doLevel2(){
	
    
	hide("level2")
	show("level3")
    var answer = prompt("What is the answer")
	if (answer == "10"){
        alert("You got it right!")
		addPoints(15)
	}else{
		alert("You got it wrong")
	}
}

function doLevel3(){
	hide("level3")
	var answer = prompt("What is the answer")
	if (answer == "true"){
		alert("You got it right!")
		 addPoints(15)
	}else{
		alert("You got it wrong")
	}
	
	document.write("<b><h1>Your final score was " + score + "</b></h1>")
}


 function show(id){
	var el = document.getElementById(id);
    el.classList.remove("hidden");
}

function hide(id){
	var el = document.getElementById(id);
    el.classList.add("hidden");
}

var score= 0;

function addPoints(points){
	score = score + points;
	document.getElementById("score").innerHTML = score;
}