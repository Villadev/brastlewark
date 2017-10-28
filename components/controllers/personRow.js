/**
 * Created by AWS2-25 on 12/10/2017.
 */
angular.module('Brastlewark')
    .component('personRow', {
        templateUrl: "components/views/personRow.html",
        bindings:{
            person: "<",
            personSelected: "<"
        },
        controller:["$scope", function($scope){
            var ctrl = this;


            ctrl.selectPerson = function () {
                ctrl.personSelected.person = ctrl.person;
            };
        }]
    });