/********************************************************************************
*                                 Mutations                                     *
* Return true if the string in the first element of the array contains all of   *
* the letters of the string in the second element of the array.                 *
********************************************************************************/
function mutation(arr) {
  var lowerArr1 = arr[1].toLowerCase();
  var lowerArr0 = arr[0].toLowerCase();
  for (i=0;i<lowerArr1.length;i++) {
    if (lowerArr0.indexOf(lowerArr1[i]) < 0)
      return false;
  }
  return true;
 }

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
