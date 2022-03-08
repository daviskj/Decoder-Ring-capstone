// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) return false                                  //if not alphabet - false
    if(alphabet.length !== 26) return false                      //if length is not 26 - false
    if(Array.from(new Set(alphabet)).length !== 26) return false   //if duplicates - false
      let abc = 'abcdefghijklmnopqrstuvwxyz'
      alphabet = alphabet.split('')
      input = input.toLowerCase()
      let alpha= {}
      let decode = {}
      let result = ''

      abc.split('').forEach((letter, index) => {
        alpha[letter] = alphabet[index]
        decode[alphabet[index]] = letter
      })
    if(!encode) alpha = decode
    input.split('').forEach(input => {
      result += input === ' ' ? ' ' :alpha[input]
    })
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
