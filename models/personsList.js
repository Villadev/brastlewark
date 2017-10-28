/**
 * Created by AWS2-25 on 12/10/2017.
 */
"use strict";

PersonsList.prototype.constructor = PersonsList;

function PersonsList(){
    var personList = [];

    this.getAllPersons = function(){
        return personList;
    };

    this.removeAllPersons = function(){
        personList.splice(0);
    };

    this.getPersonByName = function(name){
        for(var p in personList){
            if(personList[p].getName() == name){
                return personList[p];
            }
        }
        return null;
    };

    this.getPersonIndexByName = function(name){
        for(var p in personList){
            if(personList[p].getName() == name){
                return p;
            }
        }
        return null;
    };

    this.addPerson = function (person) {
        if(this.getPersonByName(person.getName()) == null){
            personList.push(person);
            return true;
        }
        return false;
    };

    this.addNewPerson = function (obj) {
        var newPerson = new Person(obj.id, obj.name, obj.thumbnail, obj.age, obj.hair_color, obj.height);

        for(var f in obj.friends){
            newPerson.addFriend(obj.friends[f]);
        }

        for(var p in obj.professions){
            newPerson.addProfession(obj.professions[p]);
        }

        return this.addPerson(newPerson);
    };

    this.removePerson = function(){

    };
}