var canvas;
var text_from_user;
var choosing_angle = 103;
var velocity = 0;
var inverse = false;

function roll() {
	if (velocity == 0) {
		velocity = random(200, 300);
		if (random() < 0.5) {
			inverse = true;
		} else {
			inverse = false;
		}
	}
}

function setup() {
	canvas = createCanvas(600, 400);
	// Move the canvas so it's inside our <div id="sketch-holder">.
	canvas.parent('sketch-holder');
}

function draw() {
	background(51);
	ellipseMode(CENTER);
	angleMode(DEGREES);
	
	fill(255);
	stroke(0);
	ellipse(width/2, height/2, height/1.5, height/1.5);
	
	text_from_user = document.getElementById('list').value;
	
	var list = text_from_user.split('\n');
	var count = list.length;
	var r = height/3 + 30;
	
	// adjusts the text format
	textAlign(CENTER, CENTER);
	textSize(18);
	fill(190);
	
	// start angle
	var angle = 90;
	
	// draw the circle
	for (var i = 0; i < list.length; i++) {
		// position and choice text
		var x = r * cos(angle) + width / 2;
		var y = -r * sin(angle) + height / 2;
		var s = list[i];
		
		// print the choices
		strokeWeight(1);
		text(s, x - 50, y - 25, 100, 50);
		
		// draws the lines to separate the circle
		if (count > 1) {
			x = r * cos(angle + (180/count)) + width / 2;
			y = -r * sin(angle + (180/count)) + height / 2;
			
			strokeWeight(1);
			line(width/2, height/2, x, y);
		}
		
		// increase the angle
		angle += 360 / count;
	}
	
	// position of the choice
	var x = r * cos(choosing_angle) + width / 2;
	var y = -r * sin(choosing_angle) + height / 2;
	strokeWeight(10);
	line(width/2, height/2, x, y);
	
	// updates the velocity
	if (inverse) {
		choosing_angle -= velocity;
	} else {
		choosing_angle += velocity;
	}
	velocity *= 1 * random(0.96, 1);

	// Stops it
	if (Math.abs(velocity) < 1) {
		velocity = 0;
	}
}
