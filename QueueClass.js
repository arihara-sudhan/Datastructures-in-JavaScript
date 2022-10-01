/*
	******************** 500 DAYS CODING CHALLENGE *****************************
	@ AUTHOR : Ariharasudhan
	@ DATE : 30/09/2022
	@ Problem Statement : Implementing Queue Class in JavaScript
	We have to implement the enqueue() , dequeue() , isEmpty() , front() , size() methods

**/

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length<1;
  }
  this.front = function() {
    return collection[0];
  }
}
/*-------------------------------------------------------------------------------*/
