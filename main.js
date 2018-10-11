let btn = document.querySelector('.btn-confirm');
let pss = document.querySelector('.pss');
let rawString = document.querySelector('.decoder-input').value;

console.log(pss);
btn.addEventListener("click", decode, false
})
pss.addEventListener('click', apsou, false);

const decode = (e) => {
	e.preventDefault();
	console.log(e);
	console.log(rawString);

}

const apsou = (e) => {
	console.log("apsou...");
}