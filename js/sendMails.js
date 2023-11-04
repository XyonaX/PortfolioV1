import { createTransport } from 'nodemailer';

const transporter = createTransport({
	service: 'gmail',
	auth: {
		user: 'jonatan.vargasportillo@gmail.com',
		pass: '235689yona',
	},
});

function enviarCorreo(destinatario, asunto, cuerpo) {
	const mailOptions = {
		from: 'jonatan.vargasportillo@gmail.com',
		to: destinatario,
		subject: asunto,
		text: cuerpo,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.error(error);
		} else {
			console.log('Correo enviado: ' + info.response);
		}
	});
}

export default enviarCorreo;
