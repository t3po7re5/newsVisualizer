var app = angular.module('stories', []);
app.controller('retrieveStories', ['$scope', '$log', '$http', function($scope, $log, $http) {
  var vm = this;
  vm.stories = ['story1 + associating circle', 'story2'];
  $scope.stories = ['story1 + associating circle', 'story2'];
  $scope.numberOfStories = 4;
  $scope.color = "blue";
  $log.info("got here");
  //HTTP Get example, this should be in a service
  $http.get("http://www.w3schools.com/angular/customers.php")
  .then(function (response)
  {
    $log.info(response.data.records);
  });
  // $scope.circle = {
  //   xPos : 130,
  //   yPos : 130,
  //   color : "orange"
  // };
  $scope.circles = [{
    xPos : 130,
    yPos : 130,
    color : "orange"
  },
  {
      xPos : 230,
      yPos : 230,
      color : "purple"
  }];

}]);
app.controller('mapStories', ['$scope', function($scope) {
	// function drawCircle() {
	// 	var canvas = document.getElementById("myCanvas");
	// 	var ctx = canvas.getContext("2d");
	// 	ctx.beginPath();
	// 	ctx.arc(575,550, 100, 0, 2 * Math.PI, false);
	// 	ctx.fillStyle = "green";
	// 	ctx.fill();
	// }
}]);

function getScript(url, callback) {
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;
   script.onreadystatechange = callback;
   script.onload = callback;
   document.getElementsByTagName('head')[0].appendChild(script);
}

function drawCircle2() {
	var canvas = document.getElementById("myCanvas");
	var ctx2 = canvas.getContext("2d");
	ctx2.beginPath();
	ctx2.arc(575,550, 100, 0, 2 * Math.PI, false);
	ctx2.fillStyle = "green";
	ctx2.fill();
}

//TODO: Change to gradual transition, use JQuery's fadeto method, http://www.w3schools.com/jquery/eff_fadeto.asp
function onCircleHover(el) {
	el.style.opacity = "1";
}

function onCircleLeave(el) {
	el.style.opacity = ".5";
}
