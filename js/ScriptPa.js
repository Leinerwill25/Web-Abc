window.onscroll = function () {
	var posicion = window.pageYOffset || document.documentElement.scrollTop;

	var elemento1 = document.getElementById('icon_heart');

	elemento1.style.bottom = posicion * 0.2 + 'px';
};

const mostrar = document.querySelector('.box__card-primary');
var carga1 = document.getElementById('fondo');
var carga2 = document.getElementById('fondo1');
var carga3 = document.getElementById('fondo2');
var carga4 = document.getElementById('fondo3');
var carga5 = document.getElementById('fondo4');
var carga6 = document.getElementById('fondo5');

window.addEventListener('load', function () {
	carga1.style.display = 'none';
	carga2.style.display = 'none';
	carga3.style.display = 'none';
	carga4.style.display = 'none';
	carga5.style.display = 'none';
	carga6.style.display = 'none';
});

if ('load' == true) {
	mostrar.style.display = 'none';
}
