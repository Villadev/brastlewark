/**
 * Created by AWS2-25 on 12/10/2017.
 */
angular.module('Brastlewark')
    .factory('getDataService', ["connectionRest", "constants", "$q",
        function(connectionRest, constants, $q){

            var service = {
                getBrastlewarkPeople: function(){
                    var deferred = $q.defer();

                    connectionRest.getDataMethodGET(constants.urlBrastlewark)
                        .then(function (res) {

                            if(res == null || res.data == null || res.data.Brastlewark == null){
                                deferred.reject();
                            }

                            var newPersonList = new PersonsList();

                            for(var i in res.data.Brastlewark){
                                newPersonList.addNewPerson(res.data.Brastlewark[i]);
                            }

                            deferred.resolve(newPersonList);
                        }).catch(function(error){
                            deferred.reject(error);
                    });

                    return deferred.promise;
                }
            };

            return service;

        }]);