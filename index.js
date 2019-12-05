var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

// Use .push to add name to end of kittens in function destructivelyAppendKitten()
function destructivelyAppendKitten(name) {
  var newAppendKittens = kittens.push(name);
  return newAppendKittens
}

// Use .shift to add name to beginning of kittens in function destructivelyPrependKitten()

kittens = ["Milo", "Otis", "Garfield"] // Redefine kittens
function destructivelyPrependKitten(name) {
var newPrependKittens = kittens.unshift(name);
return newPrependKittens
}

kittens = ["Milo", "Otis", "Garfield"] // Redefine kittens
function destructivelyRemoveLastKitten(name) {
var newRemoveLastKittens = kittens.pop(name);
return newRemoveLastKittens
}
