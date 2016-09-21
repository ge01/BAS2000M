/********************************************************************************
*                                 Mutations                                     *
* Return true if the string in the first element of the array contains all of   *
* the letters of the string in the second element of the array.                 *
********************************************************************************/
function mutation(arr) {
  // Ensure characters in arr are lower case
  var lowerArr1 = arr[1].toLowerCase();
  var lowerArr0 = arr[0].toLowerCase();
  // Loop through length of the string lowerArr1
  for (i=0;i<lowerArr1.length;i++) {
    // if the given element can't be found -1 will be compared to 0
    // and return false
    if (lowerArr0.indexOf(lowerArr1[i]) < 0)
      return false;
  }
  return true;
 }

// Input Test Data
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));

// Output Test Data
//false
//true
//true
//true
//true
//true
//true
//false
//false
//false
