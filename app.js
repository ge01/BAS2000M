/********************************************************************************
*                                 Mutations                                     *
* Return true if the string in the first element of the array contains all of   *
* the letters of the string in the second element of the array.                 *
********************************************************************************/
//console.log("hello".indexOf("hey"));
//console.log("hello".indexOf("Hello"));

var a = ["hello", "hey"];
//console.log(a[0].indexOf(a[1]));

var b = ["Mary", "ARMY"];
// console.log(b[0].match(/[b[1]]/gi));
//strTemp = b[1];
//console.log(strTemp);
//console.log(b[0].match(/[strTemp]/gi));

var filter = new RegExp("[" + b[1] + "]", "gi");
console.log(filter);
console.log(b[0].match(filter));
console.log(b[0].match(/[ARMY]/gi));
