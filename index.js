var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

// Use .push to add name to end of kittens in function destructivelyAppendKitten()
function destructivelyAppendKitten(name) {
  var newKittens = kittens.push(name);
  return newKittens
}
