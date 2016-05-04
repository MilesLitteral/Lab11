$(document).ready(function(){
	var uX = prompt("Input an X size");
	var uY = prompt("Input a Y height");

	var uR = prompt("Input a Radius");
	var uF = prompt("Input a color (Hexdecimal only)");
	d3.select("#THUNDERBREAK").attr("cx", uX).attr("cy", uY).attr("r", uR).style("fill", uF);
})