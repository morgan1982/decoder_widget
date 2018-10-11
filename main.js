const bcrypt = require('bcryptjs');

let btn = document.querySelector('.encode-btn');
let rawString = document.querySelector('.decoder-input').value;

btn.addEventListener("click", encode, false);

function encode (e) {
	e.preventDefault();
	let phrase = document.querySelector('.decoder-input').value;
	console.log('phrase');
	let salt = bcrypt.getSaltSync(10);
	// let hash = bcrypt.hashSync()
	// console.log(e);
}

function compare() {

}


