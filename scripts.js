'use strict';

// angular.module('myApp', [])
//     .controller('MovieController', function($scope, $http) {
//         var pendingTask;

//         if ($scope.search === undefined) {
//             $scope.search = "Apollo 13";
//             fetch();
//         }

//         $scope.change = function() {
//             if (pendingTask) {
//                 clearTimeout(pendingTask);
//             }
//             pendingTask = setTimeout(fetch, 800);
//         };

//         function fetch() {
//             $http.get("http://www.omdbapi.com/?t=" + $scope.search)
//                 .success(function(response) {
//                     $scope.details = response;
//                     console.log(response);
//                 });

//             $http.get("http://www.omdbapi.com/?s=" + $scope.search)
//                 .success(function(response) {
//                     $scope.related = response;
//                     console.log(response);
//                 });
//         }

//         $scope.update = function(movie) {
//             $scope.search = movie.Title;
//             $scope.change();
//         };

//         $scope.select = function() {
//             this.setSelectionRange(0, this.value.length);
//         }
//     });

//Begin Coding for Book Controller


angular.module('myApp2', [])
    .controller('BookController', function($scope, $http) {
        var pendingTask;

        if ($scope.search === undefined) {
            $scope.search = "Apollo 13";
            fetch();
        }

        $scope.change = function() {
            if (pendingTask) {
                clearTimeout(pendingTask);
            }
            pendingTask = setTimeout(fetch, 800);
        };

        function fetch() { 

            $http.get("http://api.dp.la/v2/items?q="+ $scope.search +"&api_key=13ecd79a26ee7a3ca1a6a12ae0ae38c2" )
                .success(function(response) {
                    $scope.stuff = response.docs;
                    console.log(response.docs);
                });
        }

        $scope.update = function(book) {
            $scope.search = book.Title;
            $scope.change();
        };

        $scope.select = function() {
            this.setSelectionRange(0, this.value.length);
        }
    });


