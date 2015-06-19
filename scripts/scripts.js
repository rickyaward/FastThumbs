'use strict';

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

            // imdb API call //
            $http.get("http://www.omdbapi.com/?t=" + $scope.search)
                .success(function(response) {
                    $scope.details = response;
                    console.log(response);
                });

            // $http.get("http://www.omdbapi.com/?s=" + $scope.search)
            //     .success(function(response) {
            //         $scope.related = response;
            //         console.log(response);
            //     });

            // DPLA - Digital Public Library of America API call //
            $http.get("http://api.dp.la/v2/items?sourceResource.type=text&sourceResource.title="+ $scope.search +"&api_key=13ecd79a26ee7a3ca1a6a12ae0ae38c2" )
                .success(function(response) {
                    $scope.stuff = response.docs;
                    console.log(response.docs);
                });

            $http.get("http://api.dp.la/v2/items?q="+ $scope.search +"&api_key=13ecd79a26ee7a3ca1a6a12ae0ae38c2" )
                .success(function(response) {
                    $scope.related = response.docs;
                    console.log(response.docs);
                });
        }

        $scope.update = function(book) {
            $scope.search = book.sourceResource.title[0];
            $scope.change();
        };

        $scope.select = function() {
            this.setSelectionRange(0, this.value.length);
        }

        //Simple Text Rotator//
        $(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 4000 // How many milliseconds until the next statement shows.
        });

    });
