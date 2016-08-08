'use strict';

eventsApp.controller('EventController',
    function($scope, eventData) {
    
        $scope.snippet = '<span style="color:red">hi there</span>';
    
        $scope.boolValue = false;
    
        $scope.mystyle = {
            color: 'red'  
        };
    
        $scope.myclass = "blue";
    
        $scope.buttonDisabled = true;
    
        eventData.getEvent(function(event){
            $scope.event = event;
        });
        
        $scope.upVoteSession = function(session) {
          session.upVoteCount++;  
        };
        $scope.downVoteSession = function(session) {
          session.upVoteCount--;  
        };
    } 
);