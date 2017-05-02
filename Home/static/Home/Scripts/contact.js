$(document).ready(function () {
	$('#contact-form').submit(function () {
		var hasError = false;

		$('.requiredField').each(function () {
			if ($.trim($(this).val()) == '') {
				hasError = true;
			} else if ($(this).is("input[type='email']") || $(this).attr('name') === 'email') {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if (!emailReg.test($.trim($(this).val()))) {
					hasError = true;
				}
			}
		});

		if (hasError) {
			alert("Hubo un error");
		}
		else {
		    $('#contact-form button').html("Enviando...");
			var formInput = $(this).serialize();
			var url = "Home/SendMail";
			var nombre = $('#contact-name').val();
			var mail = $('#contact-email').val();
			var mensaje = $('#contact-message').val();
			var status = $('#contact-topic').val();
			//ga('send', 'event', 'button', 'click', 'Contact Form', '1');
			// $("#contact-sending").slideDown('slow');
			$.post(url, { SenderName: nombre, SenderAddress: mail, Message: mensaje, Status: status }, function (ResponseDetail) {
				if (ResponseDetail == "ok") {
				    //alert("win");
				    $('#contact-form button').html('<i class="fa fa-check"></i>' + "Mensaje enviado correctamente");

				}
				else {
					//alert("fail");
				}
			})
		}

		return false;
	});
});