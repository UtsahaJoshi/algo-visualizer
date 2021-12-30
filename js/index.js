// Include app dependency on ngMaterial
angular.module('myApp', ['ngMaterial', 'ngMessages', 'ngAnimate'])
    .run(function(){
        console.log("my app is ready!");
    })
    .controller('ListCtrl', function($scope, $mdDialog) {
    $scope.algos = [
        { name: 'Search'},
        { name: 'Sort'},
        { name: 'Path Finding'},
        { name: 'Extra'}
        ];
    $scope.data = {"Sort": ["Quick Sort", "Bubble Sort", "Insert Sort", "Merge Sort", "Selection Sort", "Heap Sort"], "Search": ["Linear Search", "Binary Search", "Jump Search", "Interpolation Search", "Fibonacci Search"], "Path Finding": ["Dijkstra Algorithm", "A* Algorithm"]};
    $scope.toggle = {};
    $scope.algoSelected = {};
    })