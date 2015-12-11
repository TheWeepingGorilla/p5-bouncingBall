var s = function( p ) {

	// template for objects
	// function foo(bar) { // bar e.g. is constructor var
	// 	var baz = bar;

	// 	this.method = function() {
	// 		// stuff happens
	// 	}
	// }

	var location; // declare here if used in multiple functions, eg. in setup & draw
	var valocity;

	p.setup = function() {
		p.createCanvas(p.windowWidth, p.windowHeight);
		location = p.createVector(100,100);
		velocity = p.createVector(2.5,5);
	}

	p.draw = function() {
		p.background(255);
		location.add(velocity);
	  if ((location.x > p.width) || (location.x < 0)) {
	    velocity.x = velocity.x * -1;
	  }
	  if ((location.y > p.height) || (location.y < 0)) {
	    velocity.y = velocity.y * -1;
	  }

	  p.stroke(0);
	  p.fill(175);
	  p.ellipse(location.x,location.y,16,16);
	}

	// auto-resize canvas to window size
	p.windowResized = function() {
  	p.resizeCanvas(p.windowWidth, p.windowHeight);
	}
};

var myp5 = new p5(s,'flockingSketch');
