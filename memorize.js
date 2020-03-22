
var record = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var imgRec = [];
var rand;
var flipIndex = 0;
var cardTextRec = [];
var cardRec = [];
var cardNum;
var front;
var back;
var cardChk = 0;
var correct = 0;

var memory = document.getElementById("game");
var timer = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var newGame;
var result = document.getElementById('result');
var opacityD = document.getElementById("opacityD");
var h1Res = document.getElementById("h1Res");
var pRes = document.getElementById("pRes");
var okayButtonText = document.getElementById("okayButtonText");


var status = 0;
var countDown;
var secsInput = 60;
var seconds = secsInput;
var gameOver = false;

//2. Make the flipping work 
memory.addEventListener("click", function (e) {
	var el = e.target.parentElement;
	var numId = el.id;
	if (Number.isInteger(parseInt(numId.replace("back", ""), 10))) {
		//cardClick(el.parentElement.id);
	} else {
		//cardClick(numId);
	}
});

function cardClick(cardId) {
	cardNum = cardId.replace("card", "");
	cardNum = parseInt(cardNum, 10);


	if (record[cardNum - 1] == 0 && cardChk == 0 && gameOver == false) {

		front = document.getElementById("front" + cardNum);
		back = document.getElementById("back" + cardNum);
		front.style.transform = "rotateY(-180deg)";
		back.style.transform = "rotateY(0deg)";

		//3. Basic game - no randomization, no timer, just flipping, comparing and alert box for result 

		cardTextRec.push(back.innerHTML);
		cardRec.push(cardNum);

		flipIndex++;
		record[cardNum - 1] = 1;

		if (flipIndex == 2) {

			if (cardTextRec[0] == cardTextRec[1]) {
				correct++;
				scoreEl.innerHTML = "Score: " + correct;
				cardRec = [];
				cardTextRec = [];
				flipIndex = 0;

				if (correct == 10) {

					clearTimeout(countDown);

					setTimeout(function () {
						displayResult();
					}, 600);
				}
				return;
			} else {

				cardChk = 1;

				setTimeout(function () {
					flipBack();
				}, 600);
				return;
			}
		}
	}

	if (gameOver == true) {
		alert("Game is over. Click on the New Game button to start a new game");
	} 
}

function flipBack() {
	front = document.getElementById("front" + cardRec[0]);
	back = document.getElementById("back" + cardRec[0]);
	front.style.transform = "rotateY(0deg)";
	back.style.transform = "rotateY(180deg)";

	front = document.getElementById("front" + cardRec[1]);
	back = document.getElementById("back" + cardRec[1]);
	front.style.transform = "rotateY(0deg)";
	back.style.transform = "rotateY(180deg)";

	record[cardRec[0] - 1] = 0;
	record[cardRec[1] - 1] = 0;
	cardTextRec = [];
	cardRec = [];
	flipIndex = 0;
	cardChk = 0;
}

//4. Make new game button work 
newGame = document.getElementById("new");
newGame.addEventListener("click", newClick);

function newClick() {
	window.location.reload();
}

//5. Randomize the game boxes on loading - also create images.js file here
function newBoard() {
	for (var i = 0; i < 9; i++) {
		if (i == 0) {

			rand = Math.round(Math.random() * images.length);
			while (rand == images.length) {
				rand = Math.round(Math.random() * images.length);
			}
			imgRec[i] = rand;
		} else {
			while (status == 0) {
				rand = Math.round(Math.random() * images.length);
				if (rand !== images.length) {
					for (var j = 0; j < imgRec.length; j++) {
						if (rand == imgRec[j]) {
							break;
						} else if (j == imgRec.length - 1) {}
						status = 1;
						imgRec[i] = rand;
					}
				}
			}
		}
	}
	status = 0;
	document.getElementById("back" + (i + 1)).innerHTML = images[rand];
}

startTimer(seconds, false);



//6. Create timer 
function startTimer(secs, startGame) {
	timer.innerHTML = "00:" + secs;

	if (secs == 0 && !startGame) {

		setTimeout(function () {
			var x = document.getElementsByClassName("front");
            var i;
            for (i = 0; i < x.length; i++) {
              x[i].style.transform = "rotateY(0deg)";
            }
            var y = document.getElementsByClassName("back");
            var j;
            for (j = 0; j < y.length; j++) {
              y[j].style.transform = "rotateY(180deg)";
            }
			displayGameStart();
			//display msg to start the game
		
		}, 800);
		timer.innerHTML = "00:"+ seconds;
		return;
	}

	

	if (secs == 0) {

		clearTimeout(countDown);
		setTimeout(function () {
		displayResult();
		}, 800);
		timer.innerHTML = "00:00";
		return;
	}

	secs--;


	countDown = setTimeout(function () {
		startTimer(secs, !startGame);
	}, 1000);
startGame--;

}
//getting questions randomly
/*if(secsInput==60){
	var a = ["locate peterparkar","find the man of sheild","find the gal gadot","girl with pink hair","man of hulk","lady with pink hair band"," lady with red musk","locate ninja","find batman"];
	function question(a){
	var quest = [];
	var i=4;
	var temp=[];
	var j;
	var flag;
	while(--i >= 0) {
		flag = 1;
		temp = Math.ceil(Math.random()*7);
		// console.log(temp);
		if(quest.length > 0) {
			for(j = 0; j<quest.length; j++) {
				if(quest[j] === a[temp]) {
					flag = 0;
					i++;
					break;
				}
			}
			if(flag == 1) {
				quest.push(a[temp]);
				console.log(a[temp])
			}
		}
		else {
			quest.push(a[temp]);
		   console.log(a[temp])
		}
	}
	}
	question();
}
//function cardclick
function myfunctionall() {
	myfunction1();
	myfunction2();
	myfunction3();
	myfunction4();
	myfunction5();
	myfunction6();
	myfunction7();
	myfunction8();
	myfunction9();
  }





var place_value;
function myfunction1(){
 {
    place_value = document.getElementById("set1").value;
}
function myfunction2(){
	{
	   place_value = document.getElementById("set2").value;
   }
   function myfunction3(){
	{
	   place_value = document.getElementById("set3").value;
   }
   function myfunction4(){
	{
	   place_value = document.getElementById("set4").value;
   }
   function myfunction5(){
	{
	   place_value = document.getElementById("set5").value;
   }
   function myfunction6(){
	{
	   place_value = document.getElementById("set6").value;
   }
   function myfunction7(){
	{
	   place_value = document.getElementById("set7").value;
   }
   function myfunction8(){
	{
	   place_value = document.getElementById("set8").value;
   }
   function myfunction9(){
	{
	   place_value = document.getElementById("set9").value;
   }

}*/


function displayResult() {
	gameOver = true;
	var width = window.innerWidth;
	opacityD.style.display = "block";
	result.style.display = "block";
	result.style.left = (width / 2) - (500 / 2) + "px";
	result.style.top = 150 + "px";
	if (correct == 10) {
		h1Res.innerHTML = "Congratulations! You won!";
		pRes.innerHTML = "You've scored " + correct + " points.";
		okayButtonText.innerHTML = "Great!";
	} else {
		h1Res.innerHTML = "Try again!";
		pRes.innerHTML = "You've scored " + correct + " points.";
		okayButtonText.innerHTML = "TRY AGAIN";
	}
}
function displayGameStart() {
	gameOver = false;
	var width = window.innerWidth;
	opacityD.style.display = "block";
	result.style.display = "block";
	result.style.left = (width / 2) - (500 / 2) + "px";
	result.style.top = 150 + "px";
	h1Res.innerHTML = "Start Game";
	pRes.innerHTML = "Your game will start now.";
	okayButtonText.innerHTML = "START";
}
var okayButton = document.getElementById("okayButton");
okayButton.addEventListener("click", okayClick);
function okayClick() {
	result.style.display = "none";
	opacityD.style.display = "none";
	if(okayButtonText.innerHTML === "START"){
		startTimer(seconds, true);
	}
}

window.onload = newBoard();
