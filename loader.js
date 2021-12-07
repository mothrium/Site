let loader = document.getElementById("loader");
		let body = document.querySelector('body');

		body.style.overflowY = 'hidden';

		window.addEventListener("load", function () {
			loader.style.display = 'none';
			body.style.overflowY = 'initial';
		});