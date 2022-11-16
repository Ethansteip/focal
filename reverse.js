
/*
*
* Take a user's inputted string and reverse the spelling.
*
* @param {string} original - user supplied string that will be reversed.
*
*/

const reverse = function(original) {
  return original.split('').reverse().join('');
};

const input = process.argv[2];

if (input) {
  console.log(reverse(input));
}

