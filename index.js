var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

// Use .push to add name to end of kittens in function destructivelyAppendKitten()
function destructivelyAppendKitten(name) {
  var newAppendKittens = kittens.push(name);
  return newAppendKittens
}

// Use .shift to add name to beginning of kittens in function destructivelyPrependKitten()

function destructivelyPrependKitten(name) {
var newPrependKittens = kittens.shift(name);
return newPrependKittens
}
