var postit = angular.module('postit', [])

postit.controller('postitCtrl', function($scope, $http){
    $scope.post = {}
    $scope.posts = []
    $scope.sort = '-score'

    $scope.submitPost = function(){
      $scope.post.comments = []
      $scope.post.score = 0
      $scope.post.date = new Date().toJSON()
      console.log($scope.post.date)
      $scope.posts.push($scope.post)
      $scope.post = {}
      $scope.postForm = false
    }

    $scope.upvote = function(){
      this.post.score ++
    }
    $scope.downvote = function(){
      this.post.score --
    }

    $scope.submitComment = function(){
      this.post.writeComment = false
      this.post.commentShow = true
      this.post.comments.push(this.comment)
      this.comment = {}
    }

    $scope.setSort = function(by){
      $scope.sort = by
    }
})