//loads a canvas for drawing on
	$(document).ready(function(){
		window.onload = canvas();
		function canvas(){
			$('body').append('<div id="canvas"></div>');
		}
	});
	function getWidth(){
		return $('#canvas').css('width');
	}
	function getHeight(){
		return $('#canvas').css('height');
	}

//object and methods for Rectangle
	var Rectangle = function(width, height) {
		this.width = width;
		this.height = height;
		this.x = 0;
		this.y = 0;
		this.color = '#333';
		this.id = stringGen(5);
	}

	Rectangle.prototype.draw = function() {
		$('#canvas').append('<div class="Rectangle" id="' + this.id + '"></div>');
		$('#' + this.id).css({
			'width': this.width + 'px',
			'height': this.height + 'px',
			'margin-left': this.x + 'px',
			'margin-top': this.y + 'px',
			'background-color': this.color
		});
	}

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
		this.color = '#333';
		this.id = stringGen(5);
	}

	Circle.prototype.draw = function() {
		$('#canvas').append('<div class="Circle" id="' + this.id + '"></div>');
		$('#' + this.id).css({
			'width': this.radius * 2 + 'px',
			'height': this.radius * 2 + 'px',
			'margin-left': (this.x - this.radius) + 'px',
			'margin-top': (this.y - this.radius) + 'px',
			'background-color': this.color
		});
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

function stringGen(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for( var i=0; i < len; i++ ) text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}