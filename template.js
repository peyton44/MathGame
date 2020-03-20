var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400); 
frameRate(60);

var symbol;

var nextProblem = true;

var changeSymbol = function(){
	if(nextProblem){
		symbol = Math.floor(random(0, 3));
		nextProblem = false;	
	}
};

var showSymbol = function(){
	switch(symbol){
		case 0: text("+", 190, 190);
		break;
		case 1: text("-", 190, 190);
		break;
		case 2: text("*", 190, 190);
		break;
		case 3: text("/", 190, 190);
		break;
	}
};

generateMathProblem();

var draw = function(){
	background(255,255,255);

	fill(255, 0, 0);
	textSize(20);

	changeSymbol();
	showSymbol();
};


}};
