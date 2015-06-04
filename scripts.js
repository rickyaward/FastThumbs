'use strict';

angular.module('myApp', [])
    .controller('MovieController', function($scope, $http) {
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
            $http.get("http://www.omdbapi.com/?t=" + $scope.search)
                .success(function(response) {
                    $scope.details = response;
                });

            $http.get("http://www.omdbapi.com/?s=" + $scope.search)
                .success(function(response) {
                    $scope.related = response;
                });
        }

        $scope.update = function(movie) {
            $scope.search = movie.Title;
            $scope.change();
        };

        $scope.select = function() {
            this.setSelectionRange(0, this.value.length);
        }
    });

//Begin Coding for Book Controller

// var queryOpts = {
//          key: '13ecd79a26ee7a3ca1a6a12ae0ae38c2',
//          url: 'http://api.dp.la/v2/items?q=',
// -        facets: 'sourceResource.date.begin,sourceResource.subject.name,sourceResource.type,sourceResource.spatial.name'
// +        facets: 'sourceResource.date.begin,sourceResource.subject.name,sourceResource.type,sourceResource.spatial.name',
// +        size : 6,
// +        page : 1
//      };
 
// +    var apiCall;
// +
// +
// +    function makeApiString() {
// +        apiCall = queryOpts.url;
// +        apiCall += $scope.query.keywords;
// +
// +        apiCall += ("&sourceResource.type=" + $scope.limiters.type.toString()); 
// +        apiCall += ("&sourceResource.subject=" + encodeURI($scope.limiters.subject.toString()));
// +
// +        if ($scope.limiters.dateAfter) { apiCall += ("&sourceResource.date.after=" + $scope.limiters.dateAfter)}
// +        if ($scope.limiters.dateBefore) { apiCall += ("&sourceResource.date.before=" + $scope.limiters.dateBefore)}
// +
// +        apiCall += ("&page_size=" + queryOpts.size);
// +        apiCall += ('&facets=' + queryOpts.facets);
// +        apiCall += ('&page=' + queryOpts.page);
// +
// +        apiCall += ("&callback=JSON_CALLBACK" + '&api_key=' + queryOpts.key);
// +    }
// +
 
// -    
//      $scope.search = function() {
 
//          $scope.loading = true;
 
// -            var apiCall = queryOpts.url 
// -                    + $scope.query.keywords
// -                    + "&sourceResource.type=" + $scope.limiters.type.toString()
// -                    + "&sourceResource.subject=" + $scope.limiters.subject.toString()
// -                    + "&page_size=" + $scope.query.size
// -                    + '&facets=' + queryOpts.facets
// -                    + "&callback=JSON_CALLBACK" 
// -                    + '&api_key=' + queryOpts.key;
// +        makeApiString();
 
//          console.log('apicall', apiCall);
//         }

//  $http.jsonp(apiCall).
//               success(function(data, status, headers, config) {
 
//                  $scope.loading = false;
               
//                  var d = data;
// -                console.log(d);
// +                // console.log(d);
 
//                  $scope.count = d.count;
 
// -
//                  $scope.results = d.docs;
 
// +                console.log(d.docs);
// +
// +
//                  $scope.aggs = {
 
//                      type : d.facets['sourceResource.type'],
//                      subject : d.facets['sourceResource.subject.name'],
//                      date : d.facets['sourceResource.date.begin'].entries
//                  }
//             });


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
            $http.get("http://api.dp.la/v2/items/?q=Apollo13&api_key=13ecd79a26ee7a3ca1a6a12ae0ae38c2" + $scope.search)
                .success(function(response) {
                    $scope.details = response;
                    console.log(response);
                });

            $http.get("http://api.dp.la/v2/collections/?q=Apollo13&api_key=13ecd79a26ee7a3ca1a6a12ae0ae38c2" + $scope.search)
                .success(function(response) {
                    $scope.related = response;
                    console.log(response);
                });
        }

        $scope.update = function(book) {
            $scope.search = movie.Title;
            $scope.change();
        };

        $scope.select = function() {
            this.setSelectionRange(0, this.value.length);
        }
    });


