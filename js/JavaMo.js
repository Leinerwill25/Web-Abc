$(document).ready(function () {
	function showPopup() {
		$('.pop-up').addClass('show');
		$('.pop-up-wrap').addClass('show');
	}

	$('#close').click(function () {
		$('.pop-up').removeClass('show');
		$('.pop-up-wrap').removeClass('show');
	});

	$('.btn-abrir').click(showPopup);
	$('.btn__text').click(showPopup);
	$('.btn').click(showPopup);

	setTimeout(showPopup, 2000);
});
