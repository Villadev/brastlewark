/**
 * Created by AWS2-25 on 12/10/2017.
 */
"use strict";

Person.prototype.constructor = Person;

function Person(_id, _name, _image, _age, _hairColor, _height){

    var professions = [];
    var friends = [];

    this.getId = function () {
        return _id;
    };
    this.getName = function(){
        return _name;
    };
    this.getImage = function(){
        return _image;
    };
    this.getAge = function () {
        return _age;
    };
    this.getHairColor = function () {
        return _hairColor;
    };
    this.getHeight = function () {
        return _height;
    };

    this.getProfessions = function(){
        return professions;
    };

    this.addProfession = function(profession){
        if(professions.indexOf(profession) == -1){
            professions.push(profession);
            return true;
        }
        return false;
    };

    this.removeProfession = function(name){
        var index = professions.indexOf(name);
        if(index == -1){
            return false;
        }
        else{
            professions.splice(index, 1);
            return true;
        }
    };

    this.getFriends = function(){
        return friends;
    };

    this.addFriend = function(friendName){
        if(friends.indexOf(friendName) == -1){
            friends.push(friendName);
            return true;
        }
        return false;
    };

    this.removeFriend = function(name){
        var index = friends.indexOf(name);
        if(index == -1){
            return false;
        }
        else{
            friends.splice(index, 1);
            return true;
        }
    };

    this.setId =function (id) {
        _id = id;
    };
    this.setName = function (name) {
        _name = name;
    };
    this.setImage = function (image) {
        _image = image;
    };
    this.setAge = function (age) {
        _age = age;
    };
    this.setHairColor = function (hairColor) {
        _hairColor = hairColor;
    };
    this.setHeight = function (height) {
        _height = height;
    };
}
