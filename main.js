let btn = document.querySelector('.btn-confirm');
let rawString = document.querySelector('.decoder-input').value;

btn.addEventListener("click", decode, false);

function decode (e) {
	e.preventDefault();
	console.log(e);
}


