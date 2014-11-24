
//loads a canvas for drawing on
window.onload = canvas();
function canvas(){
	$(document).ready(function() {
		$('body').append('<div id="canvas"></div>');
	})
}

//object and methods for rectangle
	var rect = function(width, height, x, y) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.id = stringGen(5);
	}

	rect.prototype.draw = function() {
		$('#canvas').append('<div class="rect" id="' + this.id + '"></div>');
		$('#' + this.id).css({
			'width': this.width + 'px',
			'height': this.height + 'px',
			'margin-left': this.x + 'px',
			'margin-top': this.y + 'px'
		});
	}

	rect.prototype.setWi = function(first_argument) {
		// body...
	};

function stringGen(len) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for( var i=0; i < len; i++ ) text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}