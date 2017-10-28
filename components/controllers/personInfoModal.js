/**
 * Created by AWS2-25 on 12/10/2017.
 */
angular.module('Brastlewark')
    .component('personInfoModal', {
        templateUrl: "components/views/personInfoModal.html",
        bindings: {
            personSelected: "<"
        },
        controller: [function () {
            var ctrl = this;

            ctrl.closeInfoDetail = function () {
                ctrl.personSelected.person = null;
            };

            ctrl.getPerson = function(){
                return ctrl.personSelected.person;
            };

            ctrl.changePreson = function (name) {
                var newPerson = ctrl.personSelected.list.getPersonByName(name);
                ctrl.personSelected.person = newPerson;
            };
        }]
    });