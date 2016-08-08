'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            if (newEventForm.$valid){
                window.alert("Event Name: "+ event.name+ " saved !!");
            }
        };
        
        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";
        };
    }
                    
                    
);