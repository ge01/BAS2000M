/********************************************************************************
*                                 Mutations                                     *
* Return true if the string in the first element of the array contains all of   *
* the letters of the string in the second element of the array.                 *
********************************************************************************/
function mutation(arr) {
  console.log(arr[0]);
  var filter = new RegExp("[" + arr[1] + "]", "gi");
  console.log(filter);
  var whatMatchedArr = arr[0].match(filter);
  //var stringToArr = arr[0].split('');
  console.log(whatMatchedArr);

  var whatMatchedStr = whatMatchedArr.join('');
  //var cB = arr[0].sort.join(',');
  console.log(whatMatchedStr);
  //console.log(cB);
  //console.log(whatMatchedArr.length);
  if (whatMatchedStr === arr[0] || whatMatchedArr.length === arr[1].length){
    return true;
  } else {
    return false;
  }


  //console.log(stringToArr);
  //console.log(whatMatchedArr.indexOf(stringToArr));
  //return whatMatchedArr.equals(stringToArr);
}

//console.log(mutation(["Mary", "Aarmy"]));
//console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));

//var b = ["Mary", "ARMY"];
// console.log(b[0].match(/[b[1]]/gi));
//strTemp = b[1];
//console.log(strTemp);
//console.log(b[0].match(/[strTemp]/gi));

//var filter = new RegExp("[" + b[1] + "]", "gi");
//console.log(filter);
//console.log(b[0].match(filter));
//var whatMatchedArr = b[0].match(filter);
//console.log(whatMatchedArr);
//console.log(whatMatchedArr.length);
/*
if (whatMatchedArr.length === b[1].length){
  console.log(true);
}
else {
  console.log(false);
}
*/
