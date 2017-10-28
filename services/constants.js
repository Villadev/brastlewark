/**
 * Created by AWS2-25 on 10/10/2017.
 */
angular.module('Brastlewark')
    .factory('constants', [function(){

        var constants = {
            urlBrastlewark: "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
        };

        return constants;
    }]);
