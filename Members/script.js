function toggle() {
	var sec1 = document.getElementById('sec1');
	var sec2 = document.getElementById('sec2');
	var sec3 = document.getElementById('sec3');
	var sec4 = document.getElementById('sec4');
	var sec5 = document.getElementById('sec5');
	var nav = document.getElementById('navigation');
	sec1.classList.toggle('active');
	sec2.classList.toggle('active');
	sec3.classList.toggle('active');
	sec4.classList.toggle('active');
	sec5.classList.toggle('active');
	nav.classList.toggle('active');
}