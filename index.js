// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(kitten) {
  return kittens.push(kitten);
}
function destructivelyPrependDriver(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastDriver(Drivers) {
  return kittens.pop();
}
function destructivelyRemoveFirstDriver(Drivers) {
  return kittens.shift();
}
function appendDriver(name){
  return [...kittens, name]
}

function prependDriver(name){
  return [name, ...kittens]
}

function removeLastDriver(Driver) {
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}
function removeFirstDriver(Driver) {
  var newArray = kittens.slice(1);
  return newArray;
}
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
