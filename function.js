$(document).ready(function(){
	var x = 16;
	var size = (500/x) + "px";
	var sketch = function() {
		for(i=0; i<x; i++) {
				$("#container").append("<div></div>");
			
		}
		for(y=0; y<x; y++) {
				$("#container > div").append("<div></div>");
			
		}
		$("#container > div").find("div").css({"width": size, "height": size});
		
		};
	sketch();
	var colour = function(color) {
		$("#container > div").find("div").on("mouseenter", function(){
			$(this).css("background-color", color);
		});
	};
	colour("green");
	var cancel = function() {
		$("#container > div").find("div").on("click", function(){
			$(this).css("background-color", "white");
		});
	};
	cancel();
	$("#resize").on("click", "button", function() {
		$("#container > div").remove();
		x = window.prompt("Let's change the size of our squares... With how many squares per side do you want to play?");
		size = (500/x) + "px";
		sketch();
		colour("green");
		cancel();
	});
	
	var letters = 0;
	var color = 0;
	function getRandomColor() {
    	letters = '0123456789ABCDEF'.split('');
   		color = '#';
    	for (var i = 0; i < 6; i++ ) {
    	    color += letters[Math.floor(Math.random() * 16)];
    	}
    	return color;
	};
	$("#woodstock").on("click", "button", function() {
		$("#container > div").remove();
		sketch();
		cancel();
			$("#container > div").find("div").on("mouseenter", colour(getRandomColor));
	});
});