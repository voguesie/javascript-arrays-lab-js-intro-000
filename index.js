var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

// use .push to add name to end of kittens
function destructivelyAppendKitten(name) {
  var newKittens = kittens.push(name);
  return newKittens
}
