//loads a canvas for drawing on
	$(document).ready(function(){
		window.onload = canvas();
		function canvas(){
			$('body').append("<canvas id='we'>Didn't work</canvas>");
		}
	});
	var canvas = document.getElementsByTagName("canvas");
	function getWidth(){return canvas.css('width');};
	function getHeight(){return canvas.css('height');};

//object and methods for Rectangle
	var Rectangle = function(width, height) {
		this.width = width;
		this.height = height;
		this.x = 0;
		this.y = 0;
		this.color = '#FFF';
		this.id = stringGen(5);
	}

	Rectangle.prototype.draw = function() {
		var r = canvas.getContext('2d');
		r.fillStyle = this.color;
		r.fillRect(this.x, this.y, this.width, this.height);
	};

	Rectangle.prototype.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
		this.draw();
	};

	Rectangle.prototype.setColor = function(color) {
		this.color = color;
		this.draw();
	};

	Rectangle.prototype.move = function(dx, dy) {
		this.x += dx;
		this.y += dy;
		this.draw();
	};

//object and methods for Circle
	var Circle = function(r) {
		this.radius = r;
		this.x = r;
		this.y = r;
		this.color = '#FFF';
		this.id = stringGen(5);
	}

	Circle.prototype.draw = function() {
		var c = canvas.getContext('2d');
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		c.fillStyle = this.color;
		c.fill();
	};

	Circle.prototype.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
		this.draw();
	};

	Circle.prototype.setColor = function(color) {
		this.color = color;
		this.draw();
	};

	Circle.prototype.setRadius = function(r) {
		this.radius = r;
		this.draw();
	};

	Circle.prototype.move = function(dx, dy) {
		this.x += dx;
		this.y += dy;
		this.draw();
	};

//object and methods for Text
	var Text = function(l, f){
		this.label = l;
		this.font = f;
		this.color = '#FFF';
		this.x = 0;
		this.y = 0;
		this.id = stringGen(5);
	}

	Text.prototype.draw = function() {
		var t = canvas.getContext('2d');
		t.fillText(this.l, this.x, this.y);
		t.font = this.font;
	};

	Text.prototype.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
		this.draw();
	};

	Text.prototype.setColor = function(color) {
		this.color = color;
		this.draw();
	};

	Text.prototype.setText = function(t) {
		this.label = t;
		this.draw();
	};

	Text.prototype.move = function(dx, dy) {
		this.x += dx;
		this.y += dy;
		this.draw();
	};

//object and methods for Line
	var Line = function(startX, startY, endX, endY) {
		this.startX = startX;
		this.startY = startY;
		this.endX = endX;
		this.endY = endY;
		this.color = '#FFF';
	}

	Line.prototype.draw = function() {
		var l = canvas.getContext("2d");
		l.moveTo(this.startX, this.startY);
		l.lineTo(this.endX, this.endY);
		l.strokeStyle = this.color;
		l.stroke();
	};

	Line.prototype.setColor = function(color) {
		this.color = color;
		this.draw();
	};

	Line.prototype.move = function(dx, dy) {
		this.startX += dx;
		this.endX += dx;
		this.startY += dy;
		this.endY += dy;
		this.draw();
	};

	Line.prototype.setPosition = function(x, y) {
		this.startX = x;
		this.startY = y;
		this.draw();
	};

	Line.prototype.setPosition = function(x, y) {
		this.endX = x;
		this.endY = y;
		this.draw();
	};


function stringGen(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for( var i=0; i < len; i++ ) text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}