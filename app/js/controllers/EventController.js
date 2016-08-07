'use strict';

eventsApp.controller('EventController',
    function($scope) {
    
        $scope.snippet = '<span style="color:red">hi there</span>';
    
        $scope.boolValue = false;
    
        $scope.mystyle = {
            color: 'red'  
        };
    
        $scope.myclass = "blue";
    
        $scope.buttonDisabled = true;
    
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                'province': 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    createrName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session..',
                    upVoteCount: 0
                },
                {
                    name: 'Scope for fun and profit',
                    createrName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'In this session..',                    
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    createrName: 'Jane Doe',
                    duration: '2 hr',
                    level: 'Intermediate',
                    abstract: 'In this session..',
                    upVoteCount: 0
                }
            ]
        }
        
        $scope.upVoteSession = function(session) {
          session.upVoteCount++;  
        };
        $scope.downVoteSession = function(session) {
          session.upVoteCount--;  
        };
    } 
);