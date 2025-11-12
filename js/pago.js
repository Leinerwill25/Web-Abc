document.addEventListener('DOMContentLoaded', function () {
	// Seleccionamos el botón de restauración y los elementos de contenido que se ocultarán
	const restoreButton = document.querySelector('#root > div > div > div > button');
	const h2Element = document.querySelector('.sub-content h2');
	const pElement = document.querySelector('.sub-content p');

	// Función para ocultar el <h2> y <p> dentro de "sub-content"
	function hideSubContent() {
		if (h2Element) h2Element.style.display = 'none';
		if (pElement) pElement.style.display = 'none';
	}

	// Función para mostrar el <h2> y <p> dentro de "sub-content"
	function showSubContent() {
		if (h2Element) h2Element.style.display = '';
		if (pElement) pElement.style.display = '';
	}

	// Intentar encontrar el botón de PayPal cada 500 ms hasta que esté disponible
	const intervalId = setInterval(() => {
		const paypalButton = document.querySelector('.paypal-button.paypal-button-number-1.paypal-button-layout-vertical.paypal-button-number-multiple.paypal-button-env-sandbox.paypal-button-color-black.paypal-button-text-color-white.paypal-logo-color-white.paypal-button-shape-rect');

		if (paypalButton) {
			// Agregar evento de clic para ocultar el contenido al botón de PayPal
			paypalButton.addEventListener('click', hideSubContent);

			// Detener el intervalo una vez que el botón ha sido encontrado
			clearInterval(intervalId);
		}
	}, 500); // Verifica cada 500 ms

	// Agregar evento de clic para mostrar el contenido al botón de restauración
	if (restoreButton) {
		restoreButton.addEventListener('click', showSubContent);
	} else {
		console.warn('Botón de restauración no encontrado');
	}
});
