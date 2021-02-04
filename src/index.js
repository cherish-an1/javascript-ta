// complete the function
function palindrom(string) {
  // code goes here
  var re = /[^A-Za-z0-9]/g;
  string = string.toLowerCase().replace(re, '');
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
        return false;
    }
}
return true;
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
