'use strict';

eventsApp.factory('eventData', function($http, $log) {
    return {
        getEvent: function(sucesscb) {
            $http({method: 'GET', url:'/data/event/1'})
            .success(function(data, status, headers, config) {
                sucesscb(data);
            }).error(function(data, status, headers, config) {
                $log.warn(data, status, headers(), config);
            });
        }
    };
});

/*
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
            
*/