/*
	******************** 500 DAYS CODING CHALLENGE *****************************
	@ AUTHOR : Ariharasudhan
	@ DATE : 30/09/2022
	@ Problem Statement : Implementing Typed Arrays in JavaScript
	You are now able to say how much memory you want to give an array.
	Below is a basic overview of the different types of arrays available and 
	the size in bytes for each element in that array.
	
			Type				Element Size in bytes
			Int8Array					1
			Uint8Array					1
			Uint8ClampedArray			1
			Int16Array					2
			Uint16Array					2
			Int32Array					4
			Uint32Array					4
			Float32Array				4
			Float64Array				8	
**/

var i8 = new Int16Array(3);
console.log(i8);  //Returns Int16Array(3) [ 0, 0, 0 ]

/*-------------------------------------------------------------------------------*/
//To create typed arrays using buffers,
//you need to assign the number of bytes to be a multiple of the bytes listed above.
// Create same Int16Array array differently

var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]

/*-------------------------------------------------------------------------------*/
i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
/*-------------------------------------------------------------------------------*/
