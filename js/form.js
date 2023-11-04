//Validacion de formulario
document.addEventListener('DOMContentLoaded', function () {
	document
		.getElementById('miFormulario')
		.addEventListener('submit', function (event) {
			event.preventDefault();
			let nombreyapellido = document.getElementById('NombreyApellido').value;
			let email = document.getElementById('email').value;
			let mensaje = document.getElementById('mensaje').value;
			let valid = true;

			if (nombreyapellido.length < 3) {
				valid = false;
				document.getElementById('nombreyapellido_error').textContent =
					'El nombre y apellido deben tener al menos 3 caracteres';
			} else {
				document.getElementById('nombreyapellido_error').textContent = '';
			}

			let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailPattern.test(email)) {
				valid = false;
				document.getElementById('email_error').textContent =
					'Por favor, introduce un correo electrónico válido';
			} else {
				document.getElementById('email_error').textContent = '';
			}

			if (mensaje.trim() === '') {
				valid = false;
				document.getElementById('mensaje_error').textContent =
					'El mensaje no puede estar vacío';
			} else {
				document.getElementById('mensaje_error').textContent = '';
			}

			if (!valid) {
				event.preventDefault();
			}
			if (valid) {
				event.preventDefault();

				var templateParams = {
					from_name: nombreyapellido,
					from_email: email,
					message: mensaje,
				};

				emailjs
					.send(
						'service_l9kga6q',
						'template_iuxviuc',
						templateParams,
						'DI2VF188vdgInr9ah'
					)
					.then(
						function (response) {
							console.log(
								'Correo electrónico enviado correctamente!',
								response
							);
							alert('Correo electrónico enviado correctamente!');
						},
						function (error) {
							console.error('Error al enviar el correo electrónico', error);
							alert('Error al enviar el correo electrónico', error);
						}
					);
			}
		});
});
