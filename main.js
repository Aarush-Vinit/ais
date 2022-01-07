noseX = "" ;
noseY = "" ;
GameStatus = "";
function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,400);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600, 300);
	video.parent(game_console);

	poseNet= ml5.poseNet(video, modalLoaded);
	poseNet.on('pose', gotPoses);
}
function modalLoaded(){
	console.log("PoseNet is Initialized!");
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}
function startGame(){
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game is Loading";
}
function game(){
	console.log("noseX =" + noseX + "noseY =" + noseY);

}

function draw() {
	game()
}






