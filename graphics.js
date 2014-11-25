//loads a canvas for drawing on
	var canvas;
	$(document).ready(function(){
		window.onload = function(){
			$('body').append("<canvas id='we'>Didn't work. Go get Chrome.</canvas>");
			canvas = document.getElementById('we');
		}
	});

	var getWidth = function(){return canvas.css('width');};
	var getHeight = function(){return canvas.css('height');};

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
		canvasObjects.push(this);
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
		canvasObjects.push(this);
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
		//var t = canvas.getContext('2d');
		//t.fillText(this.l, this.x, this.y);
		//t.font = this.font;
		canvasObjects.push(this);
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
		this.id = stringGen(5);
	}

	Line.prototype.draw = function() {
		//var l = canvas.getContext("2d");
		//l.moveTo(this.startX, this.startY);
		//l.lineTo(this.endX, this.endY);
		//l.strokeStyle = this.color;
		//l.stroke();
		canvasObjects.push(this);
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

	Line.prototype.setEndpoint = function(x, y) {
		this.endX = x;
		this.endY = y;
		this.draw();
	};

//array of objects for the canvas to draw
	var canvasObjects = [];
	canvasObjects.push = function (){
		canvas.clearRect(0, 0, getWidth(), getHeight());
		for (var i = 0; i < arguments.length; i++) {
			var obj = arguments[i];
			if (obj.getType() === 'Rectangle'){
				var r = canvas.getContext('2d');
				r.fillStyle = obj.color;
				r.fillRect(obj.x, obj.y, obj.width, obj.height);
			} else if (obj.getType() === 'Circle'){
				var c = canvas.getContext('2d');
				c.beginPath();
				c.arc(obj.x, obj.y, obj.radius, 0, 2*Math.PI);
				c.fillStyle = obj.color;
				c.fill();
			} else if (obj.getType() === 'Text'){
				var t = canvas.getContext('2d');
				t.fillText(obj.l, obj.x, obj.y);
				t.font = obj.font;
			} else if (obj.getType() === 'Line'){
				var l = canvas.getContext("2d");
				l.moveTo(obj.startX, obj.startY);
				l.lineTo(obj.endX, obj.endY);
				l.strokeStyle = obj.color;
				l.stroke();
			}
		};
	    return Array.prototype.push.apply(this,arguments);
	}

function stringGen(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for( var i=0; i < len; i++ ) text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}

Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};