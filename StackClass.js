/*
	******************** 500 DAYS CODING CHALLENGE *****************************
	@ AUTHOR : Ariharasudhan
	@ DATE : 30/09/2022
	@ Problem Statement : Implementing Stack Class in JavaScript
	We have to implement the push() , pop() , isEmpty() , peek() , clear() methods

**/

function Stack() {
  var collection = [];
  this.print =()=> {
    console.log(collection);
  };
  this.push =(element)=> {
    collection.push(element);
  };
  this.pop =()=> {
    return collection.pop();
  };
  this.peek =()=> {
    return collection[collection.length-1];
  }
  this.clear =()=> {
    collection.splice(0, collection.length);
  }
  this.isEmpty =()=> {
    return collection.length<1;
  }
}

/*-------------------------------------------------------------------------------*/
