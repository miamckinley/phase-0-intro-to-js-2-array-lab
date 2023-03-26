const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
cats.push("Ralph");
}
function destructivelyPrependCat (name) {
cats.unshift("Bob");
}
function destructivelyRemoveLastCat (name) {
cats.pop("Garfield");
}
function destructivelyRemoveFirstCat (name) {
cats.shift("Milo");
}
function appendCat(name) {
const Cats = cats.slice();
Cats.push(name);
return Cats;
}
function prependCat(name) {
const Cats = cats.slice();
Cats.unshift(name);
return Cats;
}
function removeLastCat(name) {
const Cats = cats.slice();
Cats.pop(name);
return Cats;
}
function removeFirstCat(name) {
const Cats = cats.slice();
Cats.shift(name);
return Cats;
}