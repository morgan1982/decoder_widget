const bcrypt = require('bcryptjs');
const R = require('ramda');

let btn = document.querySelector('.encode-btn');
let rawString = document.querySelector('.decoder-input').value;

btn.addEventListener("click", encode, false);

let adder = function (x) {
		x + 6
	}

let results = R.chain(adder, [2, 3, 5, 6, 7]);
console.log(results)

function encode (e) {
	e.preventDefault();
	let phrase = document.querySelector('.decoder-input').value;
	console.log(phrase);
	let salt = bcrypt.getSaltSync(10);
	// let hash = bcrypt.hashSync()
	// console.log(e);
}

function compare() {

} 


