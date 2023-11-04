let navLinks = document.querySelectorAll('.navbar-nav a');

navLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		let navbarCollapse = document.querySelector('.navbar-collapse');
		bootstrap.Collapse.getInstance(navbarCollapse).hide();
	});
});

//Popup

document.addEventListener('DOMContentLoaded', function () {
	const popup = document.getElementById('popup');
	setTimeout(function () {
		popup.style.display = 'block';
		setTimeout(function () {
			popup.style.display = 'none';
		}, 5000); // Desaparece después de 3 segundos
	}, 2000); // Aparece después de 2 segundos
});
