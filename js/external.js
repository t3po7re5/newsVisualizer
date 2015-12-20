newsItem = {title:"Test News Item", longitude:100, latitude:100, description:"This is a description of the test news item"};
console.log(newsItem.title);


function getScript(url, callback) {
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;

   script.onreadystatechange = callback;
   script.onload = callback;

   document.getElementsByTagName('head')[0].appendChild(script);
}

var app = angular.module('stories', []);
app.controller('retrieveStories', ['$scope', function($scope) {
	$scope.stories = ['story1 + associating circle', 'story2'];
}]);
app.controller('mapStories', ['$scope', function($scope) {
	function drawCircle() {
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.arc(575,550, 100, 0, 2 * Math.PI, false);
		ctx.fillStyle = "green";
		ctx.fill();
	}
}]);


function drawCircle2() {
	var canvas = document.getElementById("myCanvas");
	var ctx2 = canvas.getContext("2d");
	ctx2.beginPath();
	ctx2.arc(575,550, 100, 0, 2 * Math.PI, false);
	ctx2.fillStyle = "green";
	ctx2.fill();
}

//Input param should be id of circle, maybe reference object with this?
function onCircleHover() {
	// alert("Test");
	document.getElementById("circle2").style.opacity = "1";
}

function onCircleLeave() {
	document.getElementById("circle2").style.opacity = ".5";
}