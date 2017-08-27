var controller = [
  '$scope','posts',
  function($scope, posts) {
    $scope.posts = posts.posts;
    $scope.test = 'Hello world!';
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
];

var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
  // service body
  var o = {
    posts: [{
        title: 'post 1',
        upvotes: 5
      },
      {
        title: 'post 2',
        upvotes: 2
      },
      {
        title: 'post 3',
        upvotes: 15
      },
      {
        title: 'post 4',
        upvotes: 9
      },
      {
        title: 'post 5',
        upvotes: 4
      }
    ]
  };
  return o;
}])

app.controller('MainCtrl', controller);