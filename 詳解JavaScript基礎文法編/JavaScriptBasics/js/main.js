'use strict'

function showAD(message = 'AD'){
  console.log('----------');
  console.log(`---${message}---`);
  console.log('----------');
}

showAD('header AD');

console.log('Tom is great!');
console.log('Bob is great!');

showAD('AD');

console.log('Steve is great!');
console.log('Rich is great!');

showAD('footer AD');
