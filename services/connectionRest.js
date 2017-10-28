/**
 * Created by AWS2-25 on 11/10/2017.
 */
angular.module('Brastlewark')
    .factory('connectionRest', ["$http", "$q", function ($http, $q) {

        var connection = {
            getDataMethodGET: function (url) {
                var deferred = $q.defer();

                $http.get(url).then(function (res) {
                    deferred.resolve(res);
                }).catch(function (error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            }
        };

        return connection;
    }]);